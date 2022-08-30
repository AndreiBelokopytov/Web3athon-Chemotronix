import React from "react";

function ColoredCard({ text, color, long }) {
  return (
    <div
      className={`p-4 shadow flex text-sm items-center justify-center rounded ${
        long ? "w-full" : ""
      } min-h-[60px] max-h-[60px] bg-[${color}]`}
    >
      {text}
    </div>
  );
}

export default ColoredCard;
