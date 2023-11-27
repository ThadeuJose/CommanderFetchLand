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

  size(): number {
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

  getAllColor(): Color[] {
    let resp: Color[] = [];
    if (this.colors.has(Color.Green)) {
      resp.push(Color.Green);
    }
    if (this.colors.has(Color.White)) {
      resp.push(Color.White);
    }
    if (this.colors.has(Color.Black)) {
      resp.push(Color.Black);
    }
    if (this.colors.has(Color.Red)) {
      resp.push(Color.Red);
    }
    if (this.colors.has(Color.Blue)) {
      resp.push(Color.Blue);
    }
    return resp;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  isSingleColor(): boolean {
    return this.size() === 1;
  }

  isDualColor(): boolean {
    return this.size() === 2;
  }

  isTriColor(): boolean {
    return this.size() === 3;
  }

  isFourColor(): boolean {
    return this.size() === 4;
  }

  isFiveColor(): boolean {
    return this.size() === 5;
  }
}
