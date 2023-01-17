import "./App.css";
import { FriendList } from "./components/friendsList/FriendList";
import MessageList from "./components/messageList";

function App() {
  return (
    <div className="App">
      <FriendList />
      <MessageList />
    </div>
  );
}

export default App;
