import { useEffect } from "react";
import { useState } from "react";
import { GET } from "../../utils/http";
import { Friend } from "../friend/Friend";

export function FriendList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    GET("users").then(({ users }) => {
      setFriends(users);
    });
  }, []);
  return (
    <div>
      {friends.map((item) => (
        <Friend friend={item} key={item.id} />
      ))}
    </div>
  );
}
