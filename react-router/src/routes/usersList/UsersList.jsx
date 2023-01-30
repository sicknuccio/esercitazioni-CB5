import styles from "./styles.module.scss";

import { GET } from "../../http/http";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GET("users").then(({ users }) => setUsersList(users));
  }, []);
  return (
    <div className={styles.main}>
      <h1>Lista di utenti</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      {usersList.map((user) => (
        <>
          {/* <Link to={`${user.id}`}>{user.username}</Link> */}
          <p onClick={() => navigate(`/users/${user.id}`)}>{user.username}</p>
        </>
      ))}
    </div>
  );
}
