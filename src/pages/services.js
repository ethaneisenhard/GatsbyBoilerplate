import React from "react";
/* import { Link } from "gatsby" */

import Layout from "../components/layout";
import SEO from "../components/seo";
import SubPage from "../components/subPage"
import "../styles/pages/services.scss";

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <SubPage>
      <section id="Services">
        <h1>Services</h1>
      </section>
    </SubPage>
  </Layout>
);

export default Services;
