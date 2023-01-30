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

  return (
    <div>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.age}</p>
    </div>
  );
}
