import "./App.css";

import Product from "./comps/Product";
import Wraper from "./comps/Wrap";
import Password from "./comps/Password";

function App() {
  return (
    <>
      <h1>Props</h1>
      <Wraper>
        <Product name="Smartphone" price={499.99} />
      </Wraper>
      <Product name="Laptop" price={999.99} />
      <Password isValid={true} />
      <Password isValid={false} />
    </>
  );
}

export default App;
