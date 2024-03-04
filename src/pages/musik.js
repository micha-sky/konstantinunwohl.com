import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Musik = () => (
  <Layout>
    <h1>Musik here</h1>
    <Link to="/">Go back home</Link>
  </Layout>
)

export const Head = () => <Seo title="Musik" />

export default Musik
