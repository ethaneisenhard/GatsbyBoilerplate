import React from "react"
/* import { Link } from "gatsby" */

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubPage from "../components/SubPage"
import "../styles/pages/about.scss"

const About = () => (
  <Layout>
    <SEO title="About"/>
    <SubPage>
    <section id="About">
      <h1>About</h1>
    </section>
    </SubPage>
  </Layout>
)

export default About
