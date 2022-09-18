import Link from "next/link";
import React from "react";

function Custom404() {
  return (
    <div className="h-screen overflow-hidden mx-4">
      <div className="flex items-center h-full justify-center">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl lg:text-6xl my-2">
            🤕<span className="text-error">404</span>- page not Found
          </h3>
          <Link href={"/"}>
            <button className="btn btn-primary">HomePage</button>
          </Link>
        </div>
      </div>
     
    </div>
  );
}

export default Custom404;
