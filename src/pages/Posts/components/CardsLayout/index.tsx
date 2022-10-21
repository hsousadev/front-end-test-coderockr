import SinglePost from "./components/SinglePost";
import DoublePost from "./components/DoublePost";
import { Container } from "./styles";

interface PostObject {
  article: string;
  author: string;
  id: string;
  imageUrl: string;
  title: string;
}

interface CardsLayoutProps {
  postsList: Array<PostObject>;
}

const CardsLayout = ({ postsList }: CardsLayoutProps) => {
  const articleLengthLimit = 100;
  const titleLengthLimit = 30;

  return (
    <Container>
      <DoublePost
        firstPost={postsList[0]}
        secondPost={postsList[1]}
        articleLengthLimit={articleLengthLimit}
        titleLengthLimit={titleLengthLimit}
      />
      <SinglePost
        post={postsList[2]}
        titleLengthLimit={titleLengthLimit}
        articleLengthLimit={articleLengthLimit}
      />
      <DoublePost
        firstPost={postsList[3]}
        secondPost={postsList[4]}
        articleLengthLimit={articleLengthLimit}
        titleLengthLimit={titleLengthLimit}
        mirror
      />
      <SinglePost
        post={postsList[5]}
        titleLengthLimit={titleLengthLimit}
        articleLengthLimit={articleLengthLimit}
        mirror
      />
    </Container>
  );
};

export default CardsLayout;
