import React from "react";
import ConicGradintRotate from "./ConicGradintRotate";

const PageHeader = (props) => {
  const header = {
    height: "400px",
    position: "relative",
    overflow: "hidden",
  };

  const headerContainer = {
    paddingBottom: "3em",
    display: "flex",
    height: "100%",
    alignItems: "end",
  };
  return (
    <header style={header}>
      <div className="container" style={headerContainer}>
        {props.children}
      </div>
      {/* todo */}
      {props.bg === "random" ? <ConicGradintRotate /> : ""}
    </header>
  );
};

export default PageHeader;
