import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactModal from "./shared/components/ContactModal";
import SinglePost from "./pages/SinglePost";
import Posts from "./pages/Posts";
import TopBar from "./shared/components/TopBar";

import { Container } from "./styles/global";

interface GlobalContext {
  hasContactModal: boolean;
  setHasContactModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<GlobalContext>({
  hasContactModal: false,
  setHasContactModal: () => {},
});

function App() {
  const [hasContactModal, setHasContactModal] = useState(false);

  return (
    <Context.Provider value={{ hasContactModal, setHasContactModal }}>
      <Container>
        <Router>
          <TopBar />
          {hasContactModal && <ContactModal />}
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post/:id" element={<SinglePost />} />
          </Routes>
        </Router>
      </Container>
    </Context.Provider>
  );
}

export default App;
