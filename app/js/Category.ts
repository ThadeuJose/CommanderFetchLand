export default class Category {
  private _title: string;
  private _lines: Map<string, number>;

  constructor(title: string) {
    this._title = title;
    this._lines = new Map<string, number>();
  }

  get title(): string {
    return this._title;
  }

  add(amount: number, name: string): void {
    this._lines.set(name, amount);
  }

  has(key: string): boolean {
    return this._lines.has(key);
  }

  size(): number {
    if (this.isEmpty()) {
      return 0;
    }
    let sum = 0;
    this._lines.forEach((value) => {
      sum += value;
    });
    return sum;
  }

  isEmpty(): boolean {
    return this._lines.size === 0;
  }

  get lines(): string {
    let resp: string = "";

    if (!this.isEmpty()) {
      for (const [key, value] of this._lines) {
        resp += `${value} ${key}\n`;
      }
    }

    return resp;
  }

  // getAllLands() {
  //   let resp = [];
  //   for (let [key, value] of Object.entries(this.lands)) {
  //     resp.push([value, key]);
  //   }
  //   return resp;
  // }

  // getAllLands2() {
  //   let resp = [];
  //   for (let key of Object.keys(this.lands)) {
  //     resp.push(key);
  //   }
  //   return resp;
  // }
}
