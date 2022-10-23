import axios from "axios";
import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import CardsLayout from "./components/CardsLayout";
import loading from "../../shared/assets/icons/loading.svg";

import { Container } from "./styles";

interface PostProps {
  id: string;
  title: string;
  article: string;
  author: string;
  imageUrl: string;
}

const Posts = () => {
  const [postsList, setPostsList] = useState<PostProps[][]>([[]]);
  const [pageNumber, setPageNumber] = useState(2);
  const [maxSliceLimit, setMaxSliceLimit] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios(
      "https://stormy-shelf-93141.herokuapp.com/articles/?_page=1&_limit=6"
    ).then((res) => {
      setPostsList([res.data]);
    });
  }, []);

  async function handleInfinityScroll() {
    setIsLoading(true);

    await axios(
      `https://stormy-shelf-93141.herokuapp.com/articles/?_page=${pageNumber}&_limit=6`
    ).then((res) => {
      const newPosts = res?.data;
      setIsLoading(false);

      if (newPosts.length > 0) {
        const savePosts = postsList;
        savePosts.push(newPosts);

        setPostsList(savePosts);
        setPageNumber(pageNumber + 1);
        setMaxSliceLimit(maxSliceLimit + 6);
      }
    });
  }

  return (
    <Container>
      {postsList.length > 0 ? (
        <InfiniteScroll
          dataLength={postsList?.length}
          next={handleInfinityScroll}
          hasMore={true}
          loader={isLoading && <img src={loading} alt="loading" />}
          endMessage={<h1 color="#fff">Não há mais resultados.</h1>}
        >
          {postsList?.map((post, index) => (
            <CardsLayout key={index} postsList={post} />
          ))}
        </InfiniteScroll>
      ) : (
        <img src={loading} alt="" />
      )}
    </Container>
  );
};

export default Posts;
