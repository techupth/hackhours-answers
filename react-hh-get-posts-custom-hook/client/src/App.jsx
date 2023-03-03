import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import HomePage from "./pages/HomePage";
import ViewPostPage from "./pages/ViewPostPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/create" element={<CreatePostPage />} />
          <Route path="/post/view/:id" element={<ViewPostPage />} />
          <Route path="/post/edit/:id" element={<EditPostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
