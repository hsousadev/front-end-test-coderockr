import axios from "axios";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";

interface SinglePostProps {
  article: string;
  author: string;
  date: string;
  id: string;
  imageUrl: string;
  title: string;
}

const SinglePost = () => {
  const params = useParams();

  const [post, setPost] = useState<SinglePostProps>();

  useEffect(() => {
    axios(
      `https://stormy-shelf-93141.herokuapp.com/articles/${params?.id}`
    ).then((res) => {
      setPost(res.data);
    });
  }, []);

  return (
    <Container>
      {post && (
        <Post
          imageUrl={post?.imageUrl}
          date={post?.date}
          author={post?.author}
          title={post?.title}
          article={post?.article}
        />
      )}
    </Container>
  );
};

export default SinglePost;
