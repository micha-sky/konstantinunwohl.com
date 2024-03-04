import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql } from "gatsby"

const Konzerte = ({ data }) => {
  const konzerte = data.allMarkdownRemark.nodes
  console.log(konzerte)

  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1>Aktuelle konzerte here</h1>
        {konzerte.map(konzert => (
          <div key={konzert.id}>
            <h2>
              <Link to={konzert.fields.slug}>{konzert.frontmatter.title}</Link>
            </h2>
            <p>{konzert.frontmatter.date}</p>
            <p>{konzert.frontmatter.description}</p>
          </div>
        ))}
        <Link to="/">Go back home</Link>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Konzerte" />

export default Konzerte

export const pageQuery = graphql`
  query AllKonzerte {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/konzerte/" } }
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
