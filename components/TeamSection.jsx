import React from "react";
import LetterCircle from "./LetterCircle";

function TeamSection() {
  return (
    <div className="min-h-[50vh] pt-10">
      <div className="flex items-center  justify-center my-auto">
        <div className="flex items-center flex-wrap w-[80%] mx-auto justify-between mt-auto">
          <div className=" max-w-lg">
            <h2 className="text-6xl font-bold">Our Team</h2>
            <p className="text-[25px]">
              Scroll over your cursor on later to see the magic!
            </p>
          </div>
          <div className="flex flex-wrap max-w-xl">
            <LetterCircle letter={"P"} color={"#0FE76A"} />
            <LetterCircle letter={"V"} color={"#FEF025"} />
            <LetterCircle letter={"B"} color={"#029CFF"} />
            <LetterCircle letter={"G"} color={"#FEF025"} />
            <LetterCircle letter={"A"} color={"#0FE76A"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
