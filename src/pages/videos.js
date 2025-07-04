// Videos.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import YouTubeVideo from "../components/yt-video"

const Videos = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div className="flex flex-col py-4 space-y-6 text-center">
        <YouTubeVideo videoId="Axufrbp4ARQ" />
        <YouTubeVideo videoId="64fxxIsMMLg" />
        <YouTubeVideo videoId="m3tHv4_zcV8" />
        <YouTubeVideo videoId="rscYO7mpwEo" />
        <YouTubeVideo videoId="9urgMM41E80" />
        <YouTubeVideo videoId="UK09qRM8Aic" />
        <YouTubeVideo videoId="7moV-LJhyf0" />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Videos" />

export default Videos
