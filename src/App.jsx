import { FaBeer } from "react-icons/fa";
import { TbAccessible } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./comps/Button";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Card</h1>
      <div>
        <FaShoppingCart />
        <Button />
      </div>
      <p>Button clicked {count} times</p>
      <div>
        <button
          style={{ marginTop: "16px", width: "100px" }}
          onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    </>
  );
}
export default App;
