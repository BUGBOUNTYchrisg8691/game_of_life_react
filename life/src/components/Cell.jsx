import React from "react";
import { hot } from "react-hot-loader";

const Cell = (props) => {
  const { pos, live, storeCell } = props;

  return (
    <div
      onClick={() => storeCell(pos)}
      className={live ? "cell-container-live" : "cell-container-dead"}
    ></div>
  );
};

export default hot(module)(Cell);
