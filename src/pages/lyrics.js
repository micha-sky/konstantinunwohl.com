import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThemeContext } from "../components/theme-context"
import * as styles from "../components/index.module.css"

const Lyrics = ({ data }) => {
  const theme = React.useContext(ThemeContext)
  const lyrics = data.allMarkdownRemark.nodes

  return (
    <div data-theme={theme}>
      <Layout>
        <div className={styles.textCenter}>
          <h1>Lyrics</h1>
          <div className="sm:grid-cols-1 md:grid-cols-3 grid gap-6">
            {lyrics.map(lyric => {
              const image = getImage(lyric.frontmatter.image)
              return (
                <Link
                  key={lyric.id}
                  to={lyric.fields.slug}
                  className="text-sm no-underline mb-3"
                >
                  <GatsbyImage
                    image={image}
                    alt={lyric.frontmatter.title}
                    className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
                  />
                  <div className="text-center mt-4 font-bold">
                    {lyric.frontmatter.title}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Lyrics" />

export default Lyrics

export const pageQuery = graphql`
  query AllLyrics {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/lyrics/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
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
        fields {
          slug
        }
      }
    }
  }
`
