import React from "react"
/* import { Link } from "gatsby" */

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubPage from "../components/SubPage"
import "../styles/pages/contact.scss"

const Contact = () => (
  <Layout>
    <SEO title="Contact"/>
    <SubPage>   
        <div id="Contact">
            <h1>Contact</h1>
        </div>
    </SubPage>
  </Layout>
)

export default Contact
