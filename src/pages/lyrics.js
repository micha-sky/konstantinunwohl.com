import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql } from "gatsby"

const Lyrics = ({ data }) => {
  const lyrics = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1>Lyrics here</h1>
        {lyrics.map(lyric => (
          <div key={lyric.id}>
            <div>
              <h1>{lyric.frontmatter.title}</h1>
              <p>{lyric.frontmatter.date}</p>
            </div>
            <Link to={lyric.fields.slug}>Read More</Link>
          </div>
        ))}
        <Link to="/">Go back home</Link>
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
