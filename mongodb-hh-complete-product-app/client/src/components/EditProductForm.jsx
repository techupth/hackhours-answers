import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getCurrentProduct = async () => {
    const result = await axios(
      `http://localhost:4001/products/${params.productId}`
    );
    setName(result.data.data.name);
    setImageUrl(result.data.data.image);
    setPrice(result.data.data.price);
    setDescription(result.data.data.description);
    setCategory(result.data.data.category);
  };

  const updateProduct = async () => {
    await axios.put(`http://localhost:4001/products/${params.productId}`, {
      name,
      image: imageUrl,
      price,
      description,
      category,
    });
    navigate("/");
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    updateProduct();
  };

  useEffect(() => {
    getCurrentProduct();
  }, []);

  return (
    <form className="product-form" onSubmit={handleUpdate}>
      <h1>Edit Product Form</h1>
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
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
