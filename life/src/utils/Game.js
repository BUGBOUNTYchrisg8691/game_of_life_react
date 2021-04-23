class Game {
  constructor(generation = 0, liveCells = new Map()) {
    this.generation = generation;
    this.liveCells = liveCells;
    this.nextGen = new Map();
    this.deadCells = new Map();
  }

  getGeneration() {
    return this.generation;
  }

  getLiveCells() {
    return this.liveCells;
  }

  addCell(pos) {
    this.liveCells.set(pos.x + " , " + pos.y, { x: pos.x, y: pos.y });
  }

  removeCell(pos) {
    this.liveCells.delete(pos);
  }

  isAlive(pos) {
    return this.liveCells.has(pos);
  }

  storeCell(pos) {
    let posStr = pos.x + " , " + pos.y;
    if (this.isAlive(posStr)) {
      this.removeCell(posStr);
    } else {
      this.addCell(pos);
    }

    return new Game(this.generation, this.liveCells);
  }

  addGen() {
    this.liveCells.forEach((cellPos) => {
      this.calcLiveNeighbors(cellPos);
    });

    this.deadCells.forEach((cellPos) => {
      this.calcDeadNeighbors(cellPos);
    });

    this.generation++;

    return new Game(this.generation, this.liveCells);
  }

  calcLiveNeighbors(pos) {
    let liveNeighbors = 0;

    for (let i = pos.x - 1; i <= pos.x + 1; i++) {
      for (let j = pos.y - 1; j <= pos.y + 1; j++) {
        if (i === pos.x && j === pos.y) {
          continue;
        }

        if (this.isAlive(i + " , " + j)) {
          liveNeighbors++;
        } else {
          this.deadCells.set(i + " , " + j, { x: i, y: j });
        }
      }
    }

    if (liveNeighbors == 2 || liveNeighbors === 3) {
      this.nextGen.set(pos.x + " , " + pos.y, { x: pos.x, y: pos.y });
    }
  }

  calcDeadNeighbors(pos) {
    let liveNeighbors = 0;

    for (let i = pos.x - 1; i <= pos.x + 1; i++) {
      for (let j = pos.y - 1; j <= pos.y + 1; j++) {
        if (i === pos.x && j === pos.y) {
          continue;
        }

        if (this.isAlive(i + " , " + j)) {
          liveNeighbors++;
        }
      }
    }

    if (liveNeighbors === 3) {
      this.nextGen.set(pos.x + " , " + pos.y, { x: pos.x, y: pos.y });
    }
  }
}

export default Game;
