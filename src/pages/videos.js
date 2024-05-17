import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Videos = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div className="flex flex-col py-4 space-y-6 text-center">
        <div className="video-container aspect-w-16 aspect-h-9">
          <iframe
            className="aspect-content w-full"
            width={560}
            height={450}
            src="https://www.youtube.com/embed/m3tHv4_zcV8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container aspect-w-16 aspect-h-9">
          <iframe
            className="aspect-content w-full"
            width={560}
            height={450}
            src="https://www.youtube.com/embed/rscYO7mpwEo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container aspect-w-16 aspect-h-9">
          <iframe
            className="aspect-content w-full"
            width={560}
            height={450}
            src="https://www.youtube.com/embed/9urgMM41E80"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container aspect-w-16 aspect-h-9">
          <iframe
            className="aspect-content w-full"
            width={560}
            height={450}
            src="https://www.youtube.com/embed/UK09qRM8Aic"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container aspect-w-16 aspect-h-9">
          <iframe
            className="aspect-content w-full"
            width={560}
            height={450}
            src="https://www.youtube.com/embed/7moV-LJhyf0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Videos" />

export default Videos
