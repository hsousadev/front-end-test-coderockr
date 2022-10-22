import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../../App";

import { Container } from "./styles";

const TopBar = () => {
  const { setContactModal } = useContext(Context);

  return (
    <Container>
      <div className="content">
        <h1>Rockr Blog</h1>

        <div className="buttons">
          <Link to="/">
            <h2>Posts</h2>
          </Link>
          <h2 onClick={() => setContactModal(true)}>Contact</h2>
        </div>
      </div>
    </Container>
  );
};

export default TopBar;
