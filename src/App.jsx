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
  const { name, age } = props;
  return (
    <>
      <h1>My name is {name}</h1>
      <h2>My age is {age}</h2>
    </>
  );
};

export default App;
