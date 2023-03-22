import "./App.css";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import EditProductPage from "./pages/EditProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route
            path="/product/view/:productId"
            element={<ViewProductPage />}
          />
          <Route
            path="/product/edit/:productId"
            element={<EditProductPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
