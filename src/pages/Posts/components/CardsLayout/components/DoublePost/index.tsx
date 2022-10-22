import { Link } from "react-router-dom";

import shortenText from "../../../../../../shared/utils/shortenText";
import formatOnlyText from "../../../../../../shared/utils/formatOnlyText";

import readMore from "../../../../../../shared/assets/icons/read-more.svg";

import { Container } from "./styles";

interface DoublePostProps {
  firstPost: {
    id: string;
    article: string;
    author: string;
    imageUrl: string;
    title: string;
  };
  secondPost: {
    id: string;
    article: string;
    author: string;
    imageUrl: string;
    title: string;
  };

  mirror?: boolean;
  articleLengthLimit: number;
  titleLengthLimit: number;
}

const DoublePost = ({
  firstPost,
  secondPost,
  mirror,
  articleLengthLimit,
  titleLengthLimit,
}: DoublePostProps) => {
  const newFirstArticle = formatOnlyText(firstPost?.article);
  const newSecondArticle = formatOnlyText(secondPost?.article);

  return (
    <Container isMirror={mirror}>
      {firstPost && (
        <Link to={`/post/${firstPost?.id}`} className="post">
          {!mirror ? (
            <>
              <img src={firstPost?.imageUrl} className="cover" alt="" />
              <div className="content">
                <div>
                  <p>{firstPost?.author}</p>
                  <h1>{shortenText(firstPost?.title, titleLengthLimit)}</h1>
                  <p>
                    {newFirstArticle && (
                      <>{shortenText(newFirstArticle, articleLengthLimit)}</>
                    )}
                  </p>
                </div>
                <img src={readMore} alt="" />
              </div>
            </>
          ) : (
            <>
              <div className="content">
                <div>
                  <p>{firstPost?.author}</p>
                  <h1>{shortenText(firstPost?.title, titleLengthLimit)}</h1>
                  <p>
                    {newFirstArticle && (
                      <>{shortenText(newFirstArticle, articleLengthLimit)}</>
                    )}
                  </p>
                </div>
                <img src={readMore} alt="" />
              </div>
              <img src={firstPost?.imageUrl} className="cover" alt="" />
            </>
          )}
        </Link>
      )}
      <Link to={`/post/${secondPost?.id}`} className="post" id="reverse">
        {secondPost && (
          <>
            {!mirror ? (
              <>
                <img src={secondPost?.imageUrl} className="cover" alt="" />
                <div className="content">
                  <div>
                    <p>{secondPost?.author}</p>
                    <h1>{shortenText(secondPost?.title, titleLengthLimit)}</h1>
                    <p>
                      {newSecondArticle && (
                        <>{shortenText(newSecondArticle, articleLengthLimit)}</>
                      )}
                    </p>
                  </div>
                  <img src={readMore} alt="" />
                </div>
              </>
            ) : (
              <>
                <div className="content">
                  <div>
                    <p>{secondPost?.author}</p>
                    <h1>{shortenText(secondPost?.title, titleLengthLimit)}</h1>
                    <p>
                      {newSecondArticle && (
                        <>{shortenText(newSecondArticle, articleLengthLimit)}</>
                      )}
                    </p>
                  </div>
                  <img src={readMore} alt="" />
                </div>
                <img src={secondPost?.imageUrl} className="cover" alt="" />
              </>
            )}
          </>
        )}
      </Link>
    </Container>
  );
};

export default DoublePost;
