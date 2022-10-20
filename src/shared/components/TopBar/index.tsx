import { Link } from "react-router-dom";

import { Container } from "./styles";

const TopBar = () => {
  return (
    <Container>
      <div className="content">
        <h1>Rockr Blog</h1>

        <div className="buttons">
          <Link to="/">
            <h2>Posts</h2>
          </Link>
          <Link to="/contact">
            <h2>Contact</h2>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default TopBar;
