import React from "react";

function LetterCircle({ color, letter }) {
  console.log(`bg-${color}`);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`py-8 px-12 rounded-[50%] mx-4 my-3`}
    >
      <span className="text-7xl"> {letter}</span>
    </div>
  );
}

export default LetterCircle;
