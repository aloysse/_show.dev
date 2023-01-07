import React from "react";

const PageHeader = () => {
  const header = {
    height: "500px",
    background: "black",
  };

  const headerContainer = {
    paddingBottom: "5em",
    display: "flex",
    height: "100%",
    alignItems: "end",
  };
  return (
    <header style={header}>
      <div className="container" style={headerContainer}>
        <div>
          <h1>PAGE</h1>
          <p>this page description</p>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
