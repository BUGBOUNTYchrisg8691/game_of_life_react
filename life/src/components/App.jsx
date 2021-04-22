import React from "react";
import { hot } from "react-hot-loader";

import "../styles/App.css";

const App = () => {
  const [universe, setUniverse] = React.useState({ getGeneration: () => {} });
  const [size, setSize] = React.useState([50, 20]);
  const [running, setRunning] = React.useState(false);
  const [interval, setInterval] = React.useState(100);

  const handleRowChange = () => {};
  const handleColChange = () => {};
  const handleIntervalChange = () => {};
  const handleStartGame = () => {};
  const handleStopGame = () => {};
  const handleRenderBoard = () => {};

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
