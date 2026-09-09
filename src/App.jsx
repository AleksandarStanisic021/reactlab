import "./App.css";
import Greet from "./comps/Greet";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
import Main from "./comps/Main";
import Welcome from "./comps/Welcome";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <Navbar />
      <Main />
      <Welcome />
      <p>{2 + 2}</p>
      <h3>Numbers:</h3>
      {numbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
      {false && <p>True</p>}
      {true && <p>Show me</p>}
      <Footer />
    </>
  );
}

export default App;
