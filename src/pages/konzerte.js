import { Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Konzerte = ({ data }) => {
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
            data-detect-style="on"
            data-background-color="rgb(255,255,255,1)"
            data-font-color="rgb(0,0,0,1)"
            data-button-bg-color="rgb(0,0,0,1)"
            data-button-text-color="rgb(255,255,255,1)"
            data-locale="de"
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
