import { Color } from "./Color";
import { Land } from "./Land";
import UserColorSelection from "./UserColorSelection";

export default class DualLand implements Land {
  private color1: Color;
  private color2: Color;
  private landname: string;

  constructor(color1: Color, color2: Color, landname: string) {
    this.color1 = color1;
    this.color2 = color2;
    this.landname = landname;
  }

  isValid(userColorSelection: UserColorSelection): boolean {
    return (
      userColorSelection.has(this.color1) && userColorSelection.has(this.color2)
    );
  }

  getName(): string {
    return this.landname;
  }
}
