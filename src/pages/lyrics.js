import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Lyrics = ({ data }) => {
  const lyrics = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className="flex space-x-0">
        <div className={styles.coverPlace}>
          <StaticImage
            src="../images/cover.jpeg"
            loading="lazy"
            width={250}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Projekte"
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <div className={styles.tracklist}>
          <ol className="list-decimal list-inside">
            <li>ich hass es, wenn man spass hat</li>
            <li>track2</li>
            <li>track3</li>
            <li>track4</li>
            <li>track5</li>
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Lyrics" />

export default Lyrics

export const pageQuery = graphql`
  query AllLyrics {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/lyrics/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
        fields {
          slug
        }
      }
    }
  }
`
