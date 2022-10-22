import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactModal from "./shared/components/ContactModal";
import SinglePost from "./pages/SinglePost";
import Posts from "./pages/Posts";
import TopBar from "./shared/components/TopBar";

import { Container } from "./styles/global";

interface GlobalContext {
  contactModal: boolean;
  setContactModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<GlobalContext>({
  contactModal: false,
  setContactModal: () => {},
});

function App() {
  const [contactModal, setContactModal] = useState(false);
  useEffect(() => {
    console.log("contactModal", contactModal);
  }, [contactModal]);

  return (
    <Context.Provider value={{ contactModal, setContactModal }}>
      <Container>
        <ContactModal />
        <TopBar />

        <Router>
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
