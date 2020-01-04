import React, { useState } from "react";
import { Link } from "gatsby";
import CONFIG from "../../config";

import Layout from "../components/layout";
import Product from "../components/product";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Rocky Store</h1>
      <div>
        <Product />
        <Product />

        <Product />

        <Product />

        <Product />
      </div>
    </Layout>
  );
};

export default IndexPage;
