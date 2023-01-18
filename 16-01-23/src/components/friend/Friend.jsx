import "./index.css";

export function Friend({ friend, onClickedFriend }) {
  const onHandleClick = (e) => {
    onClickedFriend(e.target.src);
  };
  return (
    <div className="Friend">
      <img src={friend.image} alt="" onClick={onHandleClick} />
      <div className="Friend_Text"></div>
    </div>
  );
}
