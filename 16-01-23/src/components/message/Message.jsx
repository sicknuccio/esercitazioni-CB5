import { useEffect } from "react";
import { useState } from "react";
import { GET } from "../../utils/http";

import "./index.css";

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
      <div className="Message_Text">
        <div className="Message_Text-Profile">
          <h4 className="Message_Text-Profile-Name">
            {`${user.firstName} ${user.lastName}`}
          </h4>
          <p className="Message_Text-Profile-Username">@{user.username}</p>
        </div>
        {/* <h3>{post.title}</h3> */}
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default Message;
