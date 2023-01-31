import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../http/http";
import styles from "./styles.module.scss";

export function Users() {
  const { userID } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${userID}`).then((res) => {
      setUser(res);
    });
  }, []);

  if (Object.keys(user).length === 0) return <p>Caricamento</p>;
  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.avatar_container}>
            <img src={user.image} alt="" />
          </div>
          <h2>
            {console.log(user)}
            {user.firstName} {user.lastName}
          </h2>
          {console.log(user)}
          <p>Address: {user.address.address}</p>
        </div>
      </div>
    </>
  );
}
