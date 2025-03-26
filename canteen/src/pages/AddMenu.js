import axios from "axios";
import React, { useState } from "react";

export default function AddMenu() {
  const [productname, setProductName] = useState("");
  const [productid, setProductId] = useState("");
  const [image, setImage] = useState(null); // Change from {} to null
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Snacks"); // Default selection
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    const fd = new FormData();
    fd.append("file", image);
    fd.append("productid", productid);
    fd.append("productname", productname);
    fd.append("price", price);
    fd.append("description", description);
    fd.append("type", type);

    axios
      .post("http://localhost:9000/addproduct", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        alert(response.data.message);
        // Reset form fields
        setProductName("");
        setProductId("");
        setImage(null);
        setPrice("");
        setType("Snacks");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }

  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>ADD MENU</h1>
      <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="col-md-6">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="productName"
            onChange={(e) => setProductName(e.target.value)} value={productname} required />
        </div>

        <div className="col-md-6">
          <label htmlFor="productId" className="form-label">Product ID</label>
          <input type="text" className="form-control" id="productId"
            onChange={(e) => setProductId(e.target.value)} value={productid} required />
        </div>

        <div className="col-12">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price"
            onChange={(e) => setPrice(e.target.value)} value={price} required />
        </div>

        {/* Dropdown for Type Selection */}
        <div className="col-12">
          <label htmlFor="type" className="form-label">Type</label>
          <select className="form-control" id="type"
            onChange={(e) => setType(e.target.value)} value={type}>
            <option value="Snacks">Snacks</option>
            <option value="Beverages">Beverages</option>
            <option value="Today's Special">Today's Special</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description"
            onChange={(e) => setDescription(e.target.value)} value={description} required />
        </div>

        <div className="col-md-12">
          <label htmlFor="image" className="form-label">Image</label>
          <input type="file" className="form-control" id="image"
            onChange={(e) => setImage(e.target.files[0])} required />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Menu Item</button>
        </div>
      </form>
      <br />
    </div>
  );
}
