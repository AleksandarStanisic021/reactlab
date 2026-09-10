import "./App.css";

import Product from "./comps/Product";
import Wraper from "./comps/Wrap";

function App() {
  return (
    <>
      <h1>Props</h1>
      <Wraper>
        <Product name="Smartphone" price={499.99} />
      </Wraper>
      <Product name="Laptop" price={999.99} />
    </>
  );
}

export default App;
