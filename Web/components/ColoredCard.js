import React from "react";

function ColoredCard({ text, color, long, noShadow }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`p-4 ${
        noShadow ? "" : "shadow"
      }  flex text-sm items-center justify-center rounded ${
        long ? "w-full" : "w-full"
      } min-h-[60px] max-h-[60px] `}
    >
      {text}
    </div>
  );
}

export default ColoredCard;
