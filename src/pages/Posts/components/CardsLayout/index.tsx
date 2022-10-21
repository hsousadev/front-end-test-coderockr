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
  console.log("postsList", postsList);

  const articleLengthLimit = 120;
  const titleLengthLimit = 40;

  return (
    <Container>
      <DoublePost
        firstPost={postsList[0]}
        secondPost={postsList[1]}
        articleLengthLimit={articleLengthLimit}
        titleLengthLimit={titleLengthLimit}
      />
      <SinglePost
        post={postsList[3]}
        titleLengthLimit={titleLengthLimit}
        articleLengthLimit={articleLengthLimit}
      />
      <DoublePost
        firstPost={postsList[4]}
        secondPost={postsList[5]}
        articleLengthLimit={articleLengthLimit}
        titleLengthLimit={titleLengthLimit}
        mirror
      />
      <SinglePost
        post={postsList[6]}
        titleLengthLimit={titleLengthLimit}
        articleLengthLimit={articleLengthLimit}
        mirror
      />
    </Container>
  );
};

export default CardsLayout;
