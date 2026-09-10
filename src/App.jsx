import { FaBeer } from "react-icons/fa";
import { TbAccessible } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./comps/Button";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Button clicked {count} times</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          backgroundColor: "#02124d",
          padding: "16px",
          borderRadius: "8px",
        }}>
        <button style={{ width: "100px" }} onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    </>
  );
}
export default App;
