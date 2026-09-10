import React from "react";

const App = () => {
  const friends = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  const [friendList, setFriendList] = React.useState([]);

  return (
    <div>
      <h1>Hello, World!</h1>
      {friends.map((friend, index) => (
        <div key={index}>
          {friend.name} - {friend.age} years old
        </div>
      ))}
      <button
        onClick={() => {
          const newFriend = { name: "New Friend", age: 20 };
          setFriendList([...friendList, newFriend]);
        }}>
        Add friend
      </button>
      {friendList.map((friend, index) => (
        <div key={index}>
          {friend.name} - {friend.age} years old
        </div>
      ))}
    </div>
  );
};

export default App;
