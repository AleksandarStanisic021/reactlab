import React from "react";
import NotValid from "./NotValid";
import IsValid from "./IsValid";

const Password = ({ isValid }) => {
  return <div>{isValid ? <IsValid /> : <NotValid />}</div>;
};

export default Password;
