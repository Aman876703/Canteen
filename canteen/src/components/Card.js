import axios from "axios";
import React, { useState } from "react";

export default function Card(props) {
  const [quantity, setQuantity] = useState(0); // Default to 0
  var em=localStorage.getItem("emailid")
  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddToCart() {
    var amt=quantity*props.price
    axios.post()
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={`http://localhost:9000/${props.image}`} className="card-img-top " alt="Product Image"
      style={{height:200,width:260}} />
      <div className="card-body">
        <h5 className="card-title">{props.productname}</h5>
        <p className="card-text">
          {props.description}
          <br />
          <br />
          Price : {props.price}&#8377;
        </p>

        {/* Quantity Counter */}
        <div className="d-flex align-items-center mb-2 justify-content-center">
          <button className="btn btn-outline-secondary" onClick={handleDecrease} disabled={quantity === 0}>
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button className="btn btn-outline-secondary" onClick={handleIncrease}>
            +
          </button>
        </div>

        {/* Add to Cart Button (Disabled if quantity is 0) */}
        { em!=null && <button className="btn btn-primary" onClick={handleAddToCart} disabled={quantity === 0}>
          Add to Cart
        </button>}
      </div>
    </div>
  );
}
