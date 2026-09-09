import "./App.css";
import Greet from "./comps/Greet";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
import Main from "./comps/Main";
import Welcome from "./comps/Welcome";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Welcome />
      <p>{2 + 2}</p>
      {true && <p>True</p>}
      {false && <p>True</p>}
      <Footer />
    </>
  );
}

export default App;
