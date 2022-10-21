import axios from "axios";
import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import CardsLayout from "./components/CardsLayout";

import { Container } from "./styles";

interface PostProps {
  id: string;
  title: string;
  article: string;
  author: string;
  imageUrl: string;
}

const Posts = () => {
  const [postsList, setPostsList] = useState<PostProps[]>([]);
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    console.log("pageNumber", pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    console.log("postsList", postsList);
  }, [postsList]);

  function handleInfinityScroll() {
    axios(
      `https://stormy-shelf-93141.herokuapp.com/articles/?_page=${pageNumber}&_limit=6`
    ).then((res) => {
      setPostsList(res.data);
      setPageNumber(pageNumber + 1);
    });
  }

  useEffect(() => {
    axios(
      "https://stormy-shelf-93141.herokuapp.com/articles/?_page=1&_limit=6"
    ).then((res) => {
      setPostsList(res.data);
    });
  }, []);

  return (
    <Container>
      <InfiniteScroll
        dataLength={postsList.length}
        next={handleInfinityScroll}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <CardsLayout postsList={postsList} />
      </InfiniteScroll>
    </Container>
  );
};

export default Posts;
