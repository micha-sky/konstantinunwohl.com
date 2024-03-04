import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Kontakt = () => (
  <Layout>
    <h1>Contact here</h1>
    <Link to="/">Go back home</Link>
  </Layout>
)

export const Head = () => <Seo title="Kontakt" />

export default Kontakt
