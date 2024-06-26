import * as React from "react"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data, location }) => {
  const siteTitle = `Title`
  const posts = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        nodes {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  `).allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className={styles.textCenter + " flex justify-center"}>
        <ol
          style={{ listStyle: `none` }}
          className="w-full md:w-2/3 lg:w-10/12 px-4"
        >
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.html,
                      }}
                      itemProp="articleBody"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
