import React from "react";

const App = () => {
  const friends = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  const [friendList, setFriendList] = React.useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ]);

  function modifyFriend() {
    const updatedFriends = friendList.map((friend) => {
      if (friend.name === "Alice") {
        return { ...friend, name: "Alice Smith", age: friend.age + 1 }; // Increment Alice's age by 1 and update her name
      }
      return friend;
    });
    setFriendList(updatedFriends);
  }

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
      <button
        onClick={() => {
          setFriendList(friendList.slice(0, -1));
        }}>
        Remove friend
      </button>
      <button onClick={modifyFriend}> Modify friend</button>

      {friendList.map((friend, index) => (
        <div key={index}>
          {friend.name} - {friend.age} years old
        </div>
      ))}
    </div>
  );
};

export default App;
