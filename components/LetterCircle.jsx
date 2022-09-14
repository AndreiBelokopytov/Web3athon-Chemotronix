import React from "react";
import { motion } from "framer-motion";
function LetterCircle({ color, letter, hover, hoverOut }) {
  // console.log(`bg-${color}`);
  return (
    <motion.div
      style={{ backgroundColor: `${color}` }}
      className={`h-[150px] w-[150px] rounded-[50%] mx-4 my-3 cursor-pointer hover:rotate-[360deg] duration-300 transition-all flex items-center justify-center`}
      onMouseEnter={hover}
      onMouseLeave={hoverOut}
    >
      <span className="text-7xl"> {letter}</span>
    </motion.div>
  );
}

export default LetterCircle;
