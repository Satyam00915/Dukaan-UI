import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";

const Final = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="col-span-10">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Final;
