import React, { useState } from "react";
import CONFIG from "../../config";

const Product = () => {
  const stripe = window.Stripe(CONFIG.stripe.testId);
  const [sku, setSku] = useState("sku_GUKPMCuvZtxiRL");
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
      <h3> Rocky T-shirt </h3>
      <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
        <option value="sku_GUKPMCuvZtxiRL">Small</option>
        <option value="sku_GUJfuYVpscOG5r">Medium</option>
        <option value="sku_GUKPBzdhYoUGU3">Large</option>
      </select>
      <button onClick={() => placeOrder()}>
        {/* <button onClick={() => placeOrder("sku_GUJfuYVpscOG5r")}> */}
        Buy me
      </button>
    </article>
  );
};

export default Product;
