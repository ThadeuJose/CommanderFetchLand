export default class Category {
  private title: string;
  private lines: Map<string, number>;

  constructor(title: string) {
    this.title = title;
    this.lines = new Map<string, number>();
  }

  add(amount: number, name: string) {
    this.lines.set(name, amount);
  }

  size() {
    if (this.isEmpty()) {
      return 0;
    }
    let sum = 0;
    this.lines.forEach((value) => {
      sum += value;
    });
    return sum;
  }

  isEmpty(): boolean {
    return this.lines.size === 0;
  }

  equals(category: Category): boolean {
    if (
      this.title !== category.title ||
      this.lines.size !== category.lines.size
    ) {
      return false;
    }

    for (const [key, value] of this.lines) {
      if (!category.lines.has(key) || category.lines.get(key) !== value) {
        return false;
      }
    }

    return true;
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
