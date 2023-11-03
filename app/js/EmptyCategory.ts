import Category from "./Category";

export default class EmptyCategory extends Category {
  private _size: number;

  constructor(title: string, size: number) {
    super(title);
    this._size = size;
  }

  size(): number {
    return this._size;
  }

  get lines(): string {
    return "\n";
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
