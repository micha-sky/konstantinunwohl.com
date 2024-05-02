import { Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql } from "gatsby"

import { faSoundcloud } from "@fortawesome/free-brands-svg-icons"

const Konzerte = ({ data }) => {
  const konzerte = data.allMarkdownRemark.nodes
  console.log(konzerte)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//widget-app.songkick.com/injector/9405399"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Layout>
      <div className={styles.textCenter}>
        <div className="max-w-screen-lg mx-auto p-4">
          <a
            href="https://www.songkick.com/artists/9405399"
            className="songkick-widget"
            data-theme="light"
            data-track-button="on"
            data-detect-style="off"
            data-background-color="rgb(255,255,255,1)"
            data-font-color="rgb(0,0,0,1)"
            data-button-bg-color="rgb(0,0,0,1)"
            data-button-text-color="rgb(255,255,255,1)"
            data-locale="en"
            data-other-artists="on"
            data-share-button="on"
            data-country-filter="on"
            data-rsvp="on"
            data-request-show="on"
            data-past-events="off"
            data-past-events-offtour="off"
            data-remind-me="off"
            style={{ display: "none" }}
          ></a>
          <script src="//widget-app.songkick.com/injector/9405399"></script>
        </div>
        <div className="flex flex-col md:flex-wrap md:justify-between hidden">
          {konzerte.map(konzert => (
            <div key={konzert.id} className=" p-4 rounded shadow mb-4 ">
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  to={konzert.fields.slug}
                  className="text-blue-500 hover:underline"
                >
                  {konzert.frontmatter.title}
                </Link>
              </h2>
              <p className="text-gray-500 mb-1">{konzert.frontmatter.date}</p>
              <p className="text-gray-700">{konzert.frontmatter.description}</p>
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="inline-block mt-4 text-blue-500 hover:underline"
        >
          Go back home
        </Link>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Konzerte" />

export default Konzerte

export const pageQuery = graphql`
  query AllKonzerte {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/konzerte/" } }) {
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
