import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import ViewPostPage from "./pages/ViewPostPage";
import EditPostPage from "./pages/EditPostPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/create" element={<CreatePostPage />} />
          <Route path="/post/view/:postId" element={<ViewPostPage />} />
          <Route path="/post/edit/:postId" element={<EditPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
