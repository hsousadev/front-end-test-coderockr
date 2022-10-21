import shortenText from "../../../../../../shared/utils/shortenText";
import readMore from "../../../../../../shared/assets/icons/read-more.svg";

import { Container } from "./styles";

interface SinglePostProps {
  post: {
    article: string;
    author: string;
    imageUrl: string;
    title: string;
  };
  articleLengthLimit: number;
  titleLengthLimit: number;
  mirror?: boolean;
}

const SinglePost = ({
  post,
  articleLengthLimit,
  titleLengthLimit,
  mirror,
}: SinglePostProps) => {
  const newArticle = post?.article.replace(/(<([^>]+)>)/gi, "");

  return (
    <Container mirror={mirror}>
      <div className="content">
        <img src={post?.imageUrl} alt="" />
        <div className="sub-content">
          <div>
            <p>{post?.author}</p>
            <h1>{shortenText(post?.title, titleLengthLimit)}</h1>
            <p>{shortenText(newArticle, articleLengthLimit)}</p>
          </div>
          <img src={readMore} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default SinglePost;
