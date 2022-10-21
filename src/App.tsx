import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import SinglePost from "./pages/SinglePost";
import Posts from "./pages/Posts";
import TopBar from "./shared/components/TopBar";

import { Container } from "./styles/global";

function App() {
  return (
    <Container>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/SinglePost" element={<SinglePost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
