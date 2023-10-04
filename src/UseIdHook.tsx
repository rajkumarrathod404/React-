import React, { useId } from "react";

const UseIdHook = () => {
  let pass = useId();

  console.log(pass);
  
  return (
    <>
      {/* <input type="text" />     */}

      <p>{pass}</p>
      <h2>Hello world </h2>
    </>
  );
};

export default UseIdHook;
