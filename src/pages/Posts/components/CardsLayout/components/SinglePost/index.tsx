import shortenText from "../../../../../../shared/utils/shortenText";
import readMore from "../../../../../../shared/assets/icons/read-more.svg";

import { Container } from "./styles";
import formatOnlyText from "../../../../../../shared/utils/formatOnlyText";
import { Link } from "react-router-dom";

interface SinglePostProps {
  post: {
    article: string;
    author: string;
    imageUrl: string;
    title: string;
    id: string;
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
  const newArticle = formatOnlyText(post?.article);

  return (
    <>
      {post && (
        <Container mirror={mirror}>
          <Link to={`/post/${post?.id}`} className="content">
            <img src={post?.imageUrl} alt="" className="cover" />
            <div className="sub-content">
              <div>
                <p>{post?.author}</p>
                <h1>{shortenText(post?.title, titleLengthLimit)}</h1>
                <p>
                  {newArticle && (
                    <>{shortenText(newArticle, articleLengthLimit)}</>
                  )}
                </p>
              </div>
              <img src={readMore} alt="" />
            </div>
          </Link>
        </Container>
      )}
    </>
  );
};

export default SinglePost;
