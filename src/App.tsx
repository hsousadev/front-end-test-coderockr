import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import PostPage from "./pages/PostPage";
import PostsList from "./pages/PostsList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
