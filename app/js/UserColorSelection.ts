import { Color } from "./Color";

export default class UserColorSelection {
  private colors: Map<Color, boolean>;
  constructor() {
    this.colors = new Map<Color, boolean>();
    this.colors.set(Color.Black, false);
    this.colors.set(Color.White, false);
    this.colors.set(Color.Red, false);
    this.colors.set(Color.Green, false);
    this.colors.set(Color.Blue, false);
  }

  add(color: Color): void {
    this.colors.set(color, true);
  }

  remove(color: Color): void {
    this.colors.set(color, false);
  }

  private size(): number {
    let count = 0;
    this.colors.forEach((value) => {
      if (value) {
        count++;
      }
    });
    return count;
  }

  has(color: Color): boolean {
    return this.colors.get(color) === true;
  }

  isDualColor(): boolean {
    return this.size() === 2;
  }
}
