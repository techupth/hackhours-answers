import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [nameInput, setNameInput] = useState("");
  const [imgInput, setImgInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [descrInput, setDescrInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  };

  const createProduct = async () => {
    try {
      const newProductData = {
        name: nameInput,
        price: priceInput,
        image: imgInput,
        description: descrInput,
      };
      await axios.post("http://localhost:4001/products", newProductData);
      navigate("/");
    } catch (error) {
      alert(error);
    }
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
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            value={nameInput}
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
            onChange={(e) => {
              setImgInput(e.target.value);
            }}
            value={imgInput}
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
            onChange={(e) => {
              setPriceInput(e.target.value);
            }}
            value={priceInput}
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
            onChange={(e) => {
              setDescrInput(e.target.value);
            }}
            value={descrInput}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
