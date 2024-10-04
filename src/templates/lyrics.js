import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const LyricTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  // Create state for track titles and modified HTML
  const [trackTitles, setTrackTitles] = React.useState([])
  const [modifiedHtml, setModifiedHtml] = React.useState(html)

  // Run DOM parsing only on the client side inside useEffect
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, "text/html")

      const extractedTrackTitles = Array.from(doc.querySelectorAll("h2")).map(
        h2 => ({
          title: h2.textContent,
          id: h2.textContent.toLowerCase().replace(/\s+/g, "-"),
        })
      )
      setTrackTitles(extractedTrackTitles)

      const updatedHtml = html.replace(/<h2>(.*?)<\/h2>/g, (match, p1) => {
        const id = p1.toLowerCase().replace(/\s+/g, "-")
        return `<h2 class="text-2xl" id="${id}">${p1}</h2>`
      })
      setModifiedHtml(updatedHtml)
    }
  }, [html])

  // Function to scroll to a specific track
  const scrollToTrack = id => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center my-6">
        {frontmatter.title}
      </h1>

      {/* Track list with scroll buttons */}
      <ul className="flex flex-col  space-y-4 mb-10">
        {trackTitles.map((track, index) => (
          <li key={index}>
            <button
              onClick={() => scrollToTrack(track.id)}
              className="px-4 py-2 bg-blue-500 text-black rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            >
              {track.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Lyrics content with modified HTML */}
      <div
        className="prose prose-lg prose-blue max-w-none mx-auto"
        dangerouslySetInnerHTML={{ __html: modifiedHtml }}
      />
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
