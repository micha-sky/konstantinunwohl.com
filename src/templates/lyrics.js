import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LyricTemplate = ({ data: { site, markdownRemark: post }, location }) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const [trackTitles, setTrackTitles] = React.useState([])
  const [modifiedHtml, setModifiedHtml] = React.useState(post.html)
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 350) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const parser = new DOMParser()
      const doc = parser.parseFromString(post.html, "text/html")

      const extractedTrackTitles = Array.from(doc.querySelectorAll("h2")).map(
        h2 => ({
          title: h2.textContent,
          id: h2.textContent.toLowerCase().replace(/\s+/g, "-"),
        })
      )
      setTrackTitles(extractedTrackTitles)

      const updatedHtml = post.html.replace(/<h2>(.*?)<\/h2>/g, (match, p1) => {
        const id = p1.toLowerCase().replace(/\s+/g, "-")
        return `<h2 class="track-title" id="${id}"><strong>${p1}</strong></h2>`
      })
      setModifiedHtml(updatedHtml)
    }
  }, [post.html])

  const scrollToTrack = id => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="flex flex-col main-container">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 className="main-title" itemProp="headline">
              {post.frontmatter.title}
            </h1>
          </header>

          <GatsbyImage
            image={getImage(post.frontmatter.image)}
            alt={post.frontmatter.title}
            className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
          />

          {/* Track list with scroll buttons */}
          <ol className="list-decimal list-inside">
            {trackTitles.map((track, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToTrack(track.id)}
                  className="track-button"
                  style={{ textDecoration: "underline" }}
                >
                  <p>{track.title}</p>
                </button>
              </li>
            ))}
          </ol>

          {/* Lyrics content with modified HTML */}
          <section
            className="lyrics-content"
            dangerouslySetInnerHTML={{ __html: modifiedHtml }}
            itemProp="articleBody"
          />
          <hr />
          <footer></footer>
        </article>
      </div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
          className="fixed bottom-1/2 left-5 cursor-pointer text-gray-500"
        >
          go up
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => (
  <Seo
    title={post.frontmatter.title}
    description={post.frontmatter.description || post.excerpt}
  />
)

export default LyricTemplate

export const pageQuery = graphql`
  query LyricsBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              width: 200
              height: 200
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
