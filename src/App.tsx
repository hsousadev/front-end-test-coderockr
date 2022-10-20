import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import PostPage from "./pages/PostPage";
import PostsList from "./pages/PostsList";
import TopBar from "./shared/components/TopBar";

import { Container } from "./styles/global";

function App() {
  return (
    <Container>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
