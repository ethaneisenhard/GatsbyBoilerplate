import React from "react"
/* import { Link } from "gatsby" */

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubPage from "../components/SubPage"
import "../styles/pages/blog.scss"

const Blog = () => (
  <Layout>
    <SEO title="Blog"/>
    <SubPage>
      <section id="Blog">
         <h1>Blog</h1>
      </section>
    </SubPage>
  </Layout>
)

export default Blog
