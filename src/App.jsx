import "./App.css";

function App() {
  return (
    <>
      <h1>Props</h1>
      <User name="John" age={30} />
    </>
  );
}

const User = (props) => {
  return (
    <>
      <h1>My name is {props.name}</h1>
      <h2>My age is {props.age}</h2>
    </>
  );
};

export default App;
