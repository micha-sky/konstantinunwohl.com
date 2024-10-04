import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const LyricTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  // Parse the HTML to extract track titles
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")
  const trackTitles = Array.from(doc.querySelectorAll("h2")).map(h2 => ({
    title: h2.textContent,
    id: h2.textContent.toLowerCase().replace(/\s+/g, "-"),
  }))

  // Function to scroll to a specific track
  const scrollToTrack = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Modify the HTML to add ids to each track section
  const modifiedHtml = html.replace(/<h2>(.*?)<\/h2>/g, (match, p1) => {
    const id = p1.toLowerCase().replace(/\s+/g, "-")
    return `<h2 id="${id}">${p1}</h2>`
  })

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <ul>
        {trackTitles.map((track, index) => (
          <li key={index}>
            <button onClick={() => scrollToTrack(track.id)}>
              {track.title}
            </button>
          </li>
        ))}
      </ul>

      <div dangerouslySetInnerHTML={{ __html: modifiedHtml }} />
    </Layout>
  )
}

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
)

export default LyricTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
