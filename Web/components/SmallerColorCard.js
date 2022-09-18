import React from "react";

function SmallerColorCard({ text, color, boldText, textColor }) {
  return (
    <div
      style={{ backgroundColor: color, color: textColor }}
      className={`px-3 shadow flex text-sm items-center justify-center rounded min-h-[60px]  md:max-w-[114px] w-full py-2`}
    >
      <div>
        {" "}
        <span className="font-[400]">{text}</span>
        <br />
        <span className="font-[700]">{boldText}</span>
      </div>
    </div>
  );
}

export default SmallerColorCard;
