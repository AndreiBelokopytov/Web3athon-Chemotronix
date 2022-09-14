import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import City from "../images/city.png";
import Quote from "../images/quote.png";
function QuoteSection() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center flex-wrap mx-auto w-[80%]">
        <motion.div
          initial={{ opacity: 0, y: -40, x: -40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="mr-auto ml-28">
            <Image src={Quote} />
          </div>

          <div className="mt-20">
            <Image src={City} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, x: 40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center flex-col ml-auto"
        >
          <p className="text-[#008036] text-[40px] max-w-lg">
            “The future is green energy, sustainability, renewable energy.”
          </p>
          <p className="mr-auto text-[25px] mt-8">Arnold Schwarzenegger</p>
        </motion.div>
      </div>
    </div>
  );
}

export default QuoteSection;
