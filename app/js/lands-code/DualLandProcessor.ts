import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class DualLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Dual Lands";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Tundra"),
      new DualLand(Color.Red, Color.Blue, "Volcanic Island"),
      new DualLand(Color.Black, Color.Blue, "Underground Sea"),
      new DualLand(Color.Black, Color.Red, "Badlands"),
      new DualLand(Color.Red, Color.Green, "Taiga"),
      new DualLand(Color.Green, Color.White, "Savannah"),
      new DualLand(Color.White, Color.Black, "Scrubland"),
      new DualLand(Color.Black, Color.Green, "Bayou"),
      new DualLand(Color.Red, Color.White, "Plateau"),
      new DualLand(Color.Green, Color.Blue, "Tropical Island"),
    ];
  }

  process(userColorSelection: UserColorSelection): Category {
    if (userColorSelection.isDualColor()) {
      return DualColorSpecialCase(
        this.categoryName,
        userColorSelection,
        this.lands
      );
    }
    return new Category(this.categoryName);
  }
}
