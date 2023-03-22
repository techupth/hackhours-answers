import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios(
        `http://localhost:4001/products?keywords=${searchText}&category=${category}`
      );
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const deleteProduct = async (productId, index) => {
    await axios.delete(`http://localhost:4001/products/${productId}`);
    products.splice(index, 1);
    setProducts(products);
  };

  const handleSearchText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    getProducts();
  }, [searchText, category]);

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button
          onClick={() => {
            navigate("/product/create");
          }}
        >
          Create Product
        </button>
      </div>
      <div className="search-box-container">
        <div className="search-box">
          <label>
            Search product
            <input
              type="text"
              placeholder="Search by name"
              onChange={handleSearchText}
            />
          </label>
        </div>
        <div className="category-filter">
          <label>
            View Category
            <select
              id="category"
              name="category"
              value={category}
              onChange={handleCategory}
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
      </div>
      <div className="product-list">
        {!products.length && !isError && (
          <div className="no-blog-posts-container">
            <h1>No Products</h1>
          </div>
        )}
        {products.map((product, index) => {
          return (
            <div className="product" key={product._id}>
              <div className="product-preview">
                <img
                  src={product.image}
                  alt={product.name}
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <h3>Category: {product.category}</h3>
                <h3>
                  Created Time:{" "}
                  {new Date(product.created_at).toISOString().substring(0, 10)}
                </h3>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button
                    className="view-button"
                    onClick={() => {
                      navigate(`/product/view/${product._id}`);
                    }}
                  >
                    View
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => {
                      navigate(`/product/edit/${product._id}`);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>

              <button
                className="delete-button"
                onClick={() => {
                  deleteProduct(product._id, index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <div className="pagination">
        <button className="previous-button">Previous</button>
        <button className="next-button">Next</button>
      </div>
      <div className="pages">1/ total page</div>
    </div>
  );
}

export default HomePage;
