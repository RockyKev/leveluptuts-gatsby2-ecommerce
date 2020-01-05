import React, { useState } from "react";
import CONFIG from "../../config";

const Product = ({ skus, product }) => {
  const stripe = window.Stripe(CONFIG.stripe.testId);
  const [sku, setSku] = useState(skus[0].node.id);

  console.log(skus);
  // debugger

  const placeOrder = () => {
    stripe.redirectToCheckout({
      //typically generated in local state
      items: [
        {
          sku: sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    });
  };

  // console.log(window.Stripe)

  return (
    <article>
      <img src="https://picsum.photos/340/400" alt="Rocky T-shirt" />
      <h3> {product.name}</h3>
      <select Value={sku} onChange={e => setSku(e.target.value)}>
        {skus.map(edge => (
          <option key={edge.node.id} value={edge.node.id}>
            {edge.node.attributes.name}
          </option>
        ))}
      </select>
      <button onClick={() => placeOrder()}>
        {/* <button onClick={() => placeOrder("sku_GUJfuYVpscOG5r")}> */}
        Buy me
      </button>
    </article>
  );
};

export default Product;
