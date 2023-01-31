import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../http/http";
import styles from "./styles.module.scss";

export function Posts() {
  const { postID } = useParams();

  const [post, setpost] = useState({});

  useEffect(() => {
    GET(`posts/${postID}`).then((res) => {
      setpost(res);
    });
  }, []);

  if (Object.keys(post).length === 0) return <p>Caricamento</p>;
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.avatar_container}>
          <img src={post.image} alt="" />
        </div>
        <h2>{post.title}</h2>
      </div>
    </div>
  );
}
