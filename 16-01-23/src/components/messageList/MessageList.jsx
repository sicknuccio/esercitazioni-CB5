import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../message/Message";

import "./index.css";

export default function MessageList(props) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => {
      setPosts(posts);
      setFilteredPosts(posts);
    });
  }, []);

  const onHandleInput = (e) => {
    e.preventDefault();
    setFilteredPosts(() =>
      posts.filter((post) =>
        post.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="SearchMessage">
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            name=""
            id=""
            onChange={onHandleInput}
            placeholder="Cerca per titolo..."
          />
          <input type="submit" value="Cerca" />
        </form>
      </div>
      <div className="MessageList">
        {filteredPosts.map((post) => {
          return <Message post={post} key={post.id}></Message>;
        })}
      </div>
    </>
  );
}
