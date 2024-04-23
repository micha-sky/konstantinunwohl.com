import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Musik = ({ data }) => (
  <Layout>
    <div className={styles.textCenter}>
      <div className="grid grid-cols-3">
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
            className="w-10 sm:w-28 md:w-36 lg:w-48 2xl:w-50"
          />
        </Link>
        <Link
          to="https://konstantinunwohl.bandcamp.com/album/ich-gehe"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/ginge.jpg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich ginge vier mal spazieren"
            className="w-10 sm:w-28 md:w-36 lg:w-48 2xl:w-50"
          />
        </Link>
        <Link
          to="https://konstantinunwohl.bandcamp.com/album/ich-gehe"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/institut.jpg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich gehe"
            className="w-10 sm:w-28 md:w-36 lg:w-48 2xl:w-50"
          />
        </Link>
        <Link
          to="https://konstantinunwohl.bandcamp.com/album/ich-gehe"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/lieber.jpg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich gehe"
            className="w-10 sm:w-28 md:w-36 lg:w-48 2xl:w-50"
          />
        </Link>
        <Link
          to="https://konstantinunwohl.bandcamp.com/album/ich-gehe"
          className="text-sm no-underline mb-3"
        >
          <StaticImage
            src="../images/musik/wagen.jpg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ich gehe"
            className="w-10 sm:w-28 md:w-36 lg:w-48 2xl:w-50"
          />
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Musik" />

export default Musik
