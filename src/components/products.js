import React from "react";
import Product from "./product";
import { graphql, StaticQuery } from "gatsby";

const PRODUCTS_QUERY = graphql`
  query AllProducts {
    allStripeSku {
      edges {
        node {
          id
          product {
            name
            id
          }
          price
          attributes {
            name
          }
        }
      }
    }
    allStripeProduct {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const Products = () => {
  return (
    <StaticQuery
      query={PRODUCTS_QUERY}
      render={({ allStripeSku, allStripeProduct }) => {
        // debugger;

        return allStripeProduct.edges.map(product => {
          const skus = allStripeSku.edges.filter(
            sku => sku.node.product.id === product.node.id
          );

          return (
            <Product key={product.node.id} skus={skus} product={product.node} />
          );
        });
      }}
    />
  );
};

export default Products;
