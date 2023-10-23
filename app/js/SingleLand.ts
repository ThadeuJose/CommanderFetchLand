import { Color } from "./Color";
import { Land } from "./Land";
import UserColorSelection from "./UserColorSelection";

export default class SingleLand {
  private color1: Color;
  private landname: string;

  constructor(color1: Color, landname: string) {
    this.color1 = color1;
    this.landname = landname;
  }

  hasSomeColor(userColorSelection: UserColorSelection): boolean {
    return userColorSelection.has(this.color1);
  }

  getName(): string {
    return this.landname;
  }
}
