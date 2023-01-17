export function Friend({ friend }) {
  return (
    <div className="Friend">
      <img src={friend.image} alt="" />
      <div className="Friend_Text">
        <p>{friend.firstName}</p>
        <p>{friend.address.city}</p>
      </div>
    </div>
  );
}
