import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.scss"

const IndexPage = ({data}) => (
  data.allMarkdownRemark.edges.map( ({ node }) => (
  <Layout>
    <SEO title="Gatsby Boilerplate" keywords={[`Gatsby`, `Boilerplate`]} meta={[`Gatsby Boilerplate`]} />
    <section id="hero">
      <div className="hero-container">
        <aside className="hero-text">
          <h2>{node.frontmatter.title}</h2>
          <h1>{node.frontmatter.heading}</h1>
          <p>{node.frontmatter.subheading}</p>
          <Link>Start Here</Link>
        </aside>
        <aside className="hero-image">
          <Image filename={"trending.svg"} alt={"description"}/>
        </aside>
      </div>
     
    </section>

    <section id="resources">
      <aside class = "text-container">
            <h3>We Believe In Community</h3>
            <h4>How can we help you succeed?</h4>
            <h4>Check out these resources for new ideas, code references, and more.</h4>
      </aside> 
      <aside className="resource-links">
          <div className="column">
            <div className="docs">
                <Link className="pricing" to="/pricing">Pricing</Link>
            </div>
            <div className="studies">
              <Link className="pricing" to="/pricing">Pricing</Link>
            </div>
          </div>
          <div className="column">
            <div className="contact">
                <Link className="pricing" to="/pricing">Pricing</Link>
            </div>
            <div className="blog">
              <Link className="pricing" to="/pricing">Pricing</Link>
            </div>
          </div>
          <div className="get-started">
                <div className="tag-line">
                  <Link className="pricing" to="/pricing">Pricing</Link>
                </div>
          </div>
      </aside>
    </section>
  </Layout>
  ))
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: {regex : "/content\/pages/"} }){
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              heading
              subheading
              image
            }
          }
        }
      }
  }
`
