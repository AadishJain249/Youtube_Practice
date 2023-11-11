import React from "react";

function Button({ name }) {
  return (
    <>
      <button className="px-5 py-2 m-2 rounded-lg bg-gray-200">{name}</button>
    </>
  );
}

export default Button;
