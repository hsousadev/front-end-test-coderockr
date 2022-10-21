import shortenText from "../../../../../../shared/utils/shortenText";
import readMore from "../../../../../../shared/assets/icons/read-more.svg";
import { Container } from "./styles";

interface DoublePostProps {
  firstPost: {
    article: string;
    author: string;
    imageUrl: string;
    title: string;
  };
  secondPost: {
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
  const newFirstArticle = firstPost?.article.replace(/(<([^>]+)>)/gi, "");
  const newSecondArticle = secondPost?.article.replace(/(<([^>]+)>)/gi, "");

  return (
    <Container>
      <div className="post">
        {!mirror ? (
          <>
            <img src={firstPost?.imageUrl} alt="" />
            <div className="content">
              <div>
                <p>{firstPost?.author}</p>
                <h1>{shortenText(firstPost?.title, titleLengthLimit)}</h1>
                <p>{shortenText(newFirstArticle, articleLengthLimit)}</p>
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
                  <p>{shortenText(newFirstArticle, articleLengthLimit)}</p>
                </p>
              </div>
              <img src={readMore} alt="" />
            </div>
            <img src={firstPost?.imageUrl} alt="" />
          </>
        )}
      </div>
      <div className="post">
        {!mirror ? (
          <>
            <img src={secondPost?.imageUrl} alt="" />
            <div className="content">
              <div>
                <p>{secondPost?.author}</p>
                <h1>{shortenText(secondPost?.title, titleLengthLimit)}</h1>
                <p>
                  <p>{shortenText(newSecondArticle, articleLengthLimit)}</p>
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
                <p>{shortenText(newSecondArticle, articleLengthLimit)}</p>
              </div>
              <img src={readMore} alt="" />
            </div>
            <img src={secondPost?.imageUrl} alt="" />
          </>
        )}
      </div>
    </Container>
  );
};

export default DoublePost;
