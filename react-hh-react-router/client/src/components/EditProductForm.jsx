import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    editProduct();
  };

  const editProduct = async () => {
    try {
      const newProduct = {
        name: name,
        price: price,
        image: img,
        description: descr,
      };
      await axios.put(
        `http://localhost:4001/products/${param.productId}`,
        newProduct
      );
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const getProduct = async () => {
    const response = await axios.get(
      `http://localhost:4001/products/${param.productId}`
    );
    setName(response.data.data.name);
    setImg(response.data.data.image);
    setPrice(response.data.data.price);
    setDescr(response.data.data.description);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setName(e.target.value);
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
            onChange={(e) => {
              setImg(e.target.value);
            }}
            value={img}
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
              setPrice(e.target.value);
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
            onChange={(e) => {
              setDescr(e.target.value);
            }}
            rows={4}
            cols={30}
            value={descr}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
