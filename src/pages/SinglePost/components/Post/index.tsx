import formatOnlyText from "../../../../shared/utils/formatOnlyText";
import momentDate from "../../../../shared/utils/momentDate";

import { Container } from "./styles";

interface PostProps {
  imageUrl: string;
  date: string;
  author: string;
  title: string;
  article: string;
}

const Post = ({ imageUrl, date, author, title, article }: PostProps) => {
  return (
    <Container>
      <div className="hero">
        <img src={imageUrl} alt="" />
        <div className="post-info">
          <div className="content">
            <h3>{momentDate(date)}</h3>
            <p>{author}</p>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
      <div className="article">
        <p>{formatOnlyText(article)}</p>
      </div>
    </Container>
  );
};

export default Post;
