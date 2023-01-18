import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { GET } from "../../utils/http";
import { Friend } from "../friend/Friend";

import "./index.css";

export function FriendList({ onClickedFriend }) {
  const [friends, setFriends] = useState([]);
  const friendBar = useRef(null);

  useEffect(() => {
    GET("users").then(({ users }) => {
      setFriends(users);
    });
  }, []);

  return (
    <div className="FriendListContainer">
      <div className="FriendList" ref={friendBar}>
        {friends.map((item) => (
          <Friend
            friend={item}
            onClickedFriend={onClickedFriend}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
