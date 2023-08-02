import { Direction } from "./direction";
import { Plateau } from "./plateau";
import { newPosition } from "./state";

export class Rover {
  state: newPosition;
  plateau: Plateau;

  constructor(state: newPosition, plateau: Plateau) {
    this.state = state;
    this.plateau = plateau;
  }
  //checking the boundary of plateau. If not inside the boundary then it will throw error.
  move(): void {
    if (
      this.state.coordinate.y > this.plateau.n ||
      this.state.coordinate.x > this.plateau.m ||
      this.state.coordinate.y < 0 ||
      this.state.coordinate.x < 0
    ) {
      throw new Error("Obstacles , can't move");
    }
    switch (this.state.direction) {
      case Direction.N:
        this.state.coordinate.y++;
        break;
      case Direction.W:
        this.state.coordinate.x--;
        break;
      case Direction.E:
        this.state.coordinate.x++;
        break;
      case Direction.S:
        this.state.coordinate.y--;
        break;
    }
  }

  turn(turnCommand: string): void {
    switch (turnCommand) {
      case "L":
        {
          switch (this.state.direction) {
            case Direction.E:
              this.state.direction = Direction.N;
              break;
            case Direction.W:
              this.state.direction = Direction.S;
              break;
            case Direction.N:
              this.state.direction = Direction.W;
              break;
            case Direction.S:
              this.state.direction = Direction.E;
              break;
          }
        }
        break;
      case "R":
        {
          switch (this.state.direction) {
            case Direction.E:
              this.state.direction = Direction.S;
              break;
            case Direction.W:
              this.state.direction = Direction.N;
              break;
            case Direction.N:
              this.state.direction = Direction.E;
              break;
            case Direction.S:
              this.state.direction = Direction.W;
              break;
          }
        }
        break;
      default:
        break;
    }
  }
}
