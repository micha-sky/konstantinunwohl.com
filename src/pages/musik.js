import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Musik = ({ data }) => (
  <Layout>
    <div className={styles.textCenter}>
      <div className="sm:grid-cols-1 md:grid-cols-3 grid">
        <Link
          to="https://konstantinunwohl.bandcamp.com/album/im-institut-f-r-str-mungstechnik-remixed"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/remixes.png"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich gehe"
            className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
          />
          <p className="text-center">
            {" "}
            Im Institut für Strömungstechnik Remixed{" "}
          </p>
        </Link>
        <Link
          to="https://konstantinunwohl.bandcamp.com/album/ich-gehe"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/ichgehe.jpg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich gehe"
            className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
          />
          <p className="text-center">Ich gehe</p>
        </Link>
        <Link
          to="https://konstantinunwohl.bandcamp.com/album/ich-ging-vier-mal-spatieren"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/ginge.jpg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich ginge vier mal spazieren"
            className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
          />
          <p className="text-center">Ich ginge vier mal spazieren</p>
        </Link>
        <Link
          to="https://konstantinunwohl.bandcamp.com/album/im-institut-f-r-str-mungstechnik"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/institut.jpg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich gehe"
            className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
          />
          <p className="text-center"> Im Institut für Strömungstechnik </p>
        </Link>
        <Link
          to="https://konstantinunwohl.bandcamp.com/album/ich-w-rd-lieber-nicht"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/lieber.jpg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich gehe"
            className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
          />
          <p className="text-center"> Ich Würd Lieber Nicht </p>
        </Link>
        <Link
          to="https://konstantinunwohl.bandcamp.com/track/hoch-auf-dem-gelben-wagen-single-edit"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/wagen.jpg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich gehe"
            className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
          />
          <p className="text-center">
            {" "}
            Hoch auf dem gelben Wagen (Single Edit){" "}
          </p>
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Musik" />

export default Musik
