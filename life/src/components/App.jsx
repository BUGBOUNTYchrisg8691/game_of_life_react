import React from "react";
import { hot } from "react-hot-loader";

import Cell from "./Cell";

import { Game } from "../utils";

import "../styles/App.css";

const App = () => {
  const [universe, setUniverse] = React.useState(new Game());
  const [size, setSize] = React.useState([50, 20]);
  const [running, setRunning] = React.useState(false);
  const [interval, setInterval] = React.useState(100);

  const handleRowChange = () => {};
  const handleColChange = () => {};
  const handleIntervalChange = () => {};
  const handleStartGame = () => {};
  const handleStopGame = () => {};

  const handleRenderBoard = () => {
    let newBoard = [];
    let cellRow = [];

    for (let i = 0; i < size[0]; i++) {
      for (let j = 0; j < size[1]; j++) {
        if (universe.isAlive(i + " , " + j)) {
          cellRow.push(
            <Cell
              key={[i, j]}
              pos={{ x: i, y: j }}
              live={true}
              storeCell={storeCell}
            />
          );
        } else {
          cellRow.push(
            <Cell
              key={[i, j]}
              pos={{ x: i, y: j }}
              live={false}
              storeCell={storeCell}
            />
          );
        }
      }
      newBoard.push(
        <div className="row" key={i}>
          {cellRow}
        </div>
      );
      cellRow = [];
    }

    return newBoard;
  };

  const storeCell = () => {};

  return (
    <div className="app-container">
      <h1>Conway's Game of Life</h1>
      <div className="header-container">
        <div className="header">
          <label className="label">
            Rows:
            <input
              className="input"
              type="text"
              value={size[1]}
              onchange={handleRowChange}
            />
          </label>
          <label className="label">
            Columns:
            <input
              className="input"
              type="text"
              value={size[0]}
              onchange={handleColChange}
            />
          </label>
          <label className="label">
            Interval:
            <input
              className="input"
              type="text"
              value={size[0]}
              onchange={handleIntervalChange}
            />
          </label>
        </div>
        <div className="header-buttons">
          <button className="submit" onClick={handleStartGame}>
            Start
          </button>
          <button className="submit" onClick={handleStopGame}>
            Stop
          </button>
        </div>
        Generation: {universe.getGeneration()}
      </div>
      <div className="board-container">{handleRenderBoard()}</div>
    </div>
  );
};

export default hot(module)(App);
