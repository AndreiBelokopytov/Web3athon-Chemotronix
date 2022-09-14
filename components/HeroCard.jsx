import { motion } from "framer-motion";
import React from "react";

function HeroCard({ number, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="rounded-xl px-11 md:my-0 my-7 py-9 bg-white z-30 shadow"
    >
      <div className="flex flex-col items-center">
        <p className="text-[#008036] text-6xl">{number}</p>
        <p className="mt-2 text-lg">{text}</p>
      </div>
    </motion.div>
  );
}

export default HeroCard;
