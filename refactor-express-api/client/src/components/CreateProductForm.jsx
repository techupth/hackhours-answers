import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProductForm() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const createProduct = async () => {
    await axios.post("http://localhost:4001/products", {
      name,
      image: imageUrl,
      price,
      description,
      category,
    });
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
            value={imageUrl}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Category
          <select
            id="category"
            name="category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option disabled value="">
              -- Select a category --
            </option>
            <option value="it">IT</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food</option>
          </select>
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
