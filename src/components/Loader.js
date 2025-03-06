import React from "react";
import "./loader.css"; // Create this CSS file

const Loader = () => {
  return (
    <div id="loader-container">
      <div id="loader">
        <div id="shadow"></div>
        <div id="box"></div>
      </div>
    </div>
  );
};

export default Loader;
