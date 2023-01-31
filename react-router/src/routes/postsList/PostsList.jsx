import styles from "./styles.module.scss";

import { GET } from "../../http/http";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function PostsList() {
  const [postsList, setpostsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GET("posts").then(({ posts }) => setpostsList(posts));
  }, []);
  return (
    <div className={styles.main}>
      <h1>Lista di posts</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      {postsList.map((post) => (
        <>
          <p onClick={() => navigate(`/posts/${post.id}`)}>{post.title}</p>
        </>
      ))}
    </div>
  );
}
