import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubPage from "../components/subPage"
import "../styles/pages/blog.scss"

const Blog = ({data}) => (
  <Layout>
    <SEO title="Blog"/>
    <SubPage>
    {data.allMarkdownRemark.edges.map( ({ node }) => (
        <Link to = {node.fields.slug}>
            <div id="Blog">
              <h1>Blog</h1>
              <h3>{node.frontmatter.title}</h3>
              <h4>{node.frontmatter.date}</h4>
              <p>{node.frontmatter.description}</p>
            </div>
        </Link>
      ))}
  </SubPage>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: {regex : "/content\/blog/"}}
        ){
        edges {
          node {
            excerpt(pruneLength: 500)
            id
            frontmatter {
              title
              date(formatString: "dddd DD MMMM YYYY")
              description
            }
            fields {
              slug
            }
          }
        }
    }
  }
`
