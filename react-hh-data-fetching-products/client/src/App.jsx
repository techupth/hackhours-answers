// Exercise 1
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loadingStatus, setLoadingStatus] = useState(null);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  async function handleDelete(id) {
    await axios.delete(`http://localhost:4001/products/${id}`);
    const newResponse = productData.filter((item) => {
      return item.id !== id;
    });
    setProductData(newResponse);
  }

  const getProductData = async () => {
    const response = await axios.get("http://localhost:4001/products");
    setProductData(response.data.data);
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Product</h1>
      </div>
      {productData.map((item) => {
        return (
          <div className="product-list" key={item.id}>
            <div className="product">
              <div className="product-preview">
                <img
                  src={item.image}
                  alt="some product"
                  width="350"
                  height="350"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {item.name}</h1>
                <h2>Product price: {item.price} Baht</h2>
                <p>Product description: {item.description}</p>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// Exercise 3
// import "./App.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [loadingStatus, setLoadingStatus] = useState(null);
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     getProductData();
//   }, []);

//   async function handleDelete(id) {
//     try {
//       await axios.delete(`http://localhost:4001/products/${id}`);
//       const newResponse = productData.filter((item) => {
//         return item.id !== id;
//       });
//       setProductData(newResponse);
//     } catch {
//       setLoadingStatus("failed");
//     }
//   }

//   const getProductData = async () => {
//     try {
//       setLoadingStatus("loading");
//       const response = await axios.get("http://localhost:4001/products");
//       setLoadingStatus("completed");
//       setProductData(response.data.data);
//     } catch {
//       setLoadingStatus("error");
//     }
//   };

//   return (
//     <div className="App">
//       <div className="app-wrapper">
//         <h1 className="app-title">Product</h1>
//       </div>
//       {loadingStatus === "loading" && <h1>Loading...</h1>}
//       {loadingStatus === "failed" && <h1>Fail to load data...</h1>}
//       {loadingStatus === "completed" &&
//         productData.length &&
//         productData.map((item) => {
//           return (
//             <div className="product-list" key={item.id}>
//               <div className="product">
//                 <div className="product-preview">
//                   <img
//                     src={item.image}
//                     alt="some product"
//                     width="350"
//                     height="350"
//                   />
//                 </div>
//                 <div className="product-detail">
//                   <h1>Product name: {item.name}</h1>
//                   <h2>Product price: {item.price} Baht</h2>
//                   <p>Product description: {item.description}</p>
//                 </div>
//                 <button
//                   className="delete-button"
//                   onClick={() => handleDelete(item.id)}
//                 >
//                   x
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       {loadingStatus === "completed" && !productData.length && (
//         <h1>No Product!</h1>
//       )}
//     </div>
//   );
// }

// export default App;
