import React from "react";
import { FaBeer } from "react-icons/fa";

const Button = () => {
  return (
    <div>
      <button onClick={() => console.log("Button clicked!")}>
        <FaBeer style={{ marginRight: "8px", color: "gold" }} /> Click Me
      </button>
    </div>
  );
};

export default Button;
