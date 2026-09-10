import "./App.css";

import React from "react";
import Product from "./comps/Product";

function App() {
  return (
    <>
      <h1>Props</h1>
      <Product name="Laptop" price={999.99} />
    </>
  );
}

export default App;
