import { useEffect } from "react";
import { useState } from "react";
import { GET } from "../../utils/http";

export function Message({ post }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${post.userId}`).then((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className="Message">
      <img src={user.image} alt={user.firstName} />
      <p>@{user.firstName}</p>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default Message;
