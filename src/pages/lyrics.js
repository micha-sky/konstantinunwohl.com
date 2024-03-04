import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Lyrics = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Lyrics here</h1>
      <Link to="/">Go back home</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Lyrics" />

export default Lyrics
