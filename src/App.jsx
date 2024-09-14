import React, { useState, useEffect } from "react";
import iphone from './assets/iphone.webp'
import "./App.css";

const ProductDisplay = () => (
  <section className="product_cart">
    <div className="product">
      <img
        src={iphone}
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>iPhone 16 pro</h3>
      <h5>$2000.00</h5>
      </div>
    </div>
    <form action="http://localhost:8000/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}

