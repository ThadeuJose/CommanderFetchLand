import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class DualLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Dual Lands";

  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, "Tundra"),
      new TwoColorLand(Color.Red, Color.Blue, "Volcanic Island"),
      new TwoColorLand(Color.Black, Color.Blue, "Underground Sea"),
      new TwoColorLand(Color.Black, Color.Red, "Badlands"),
      new TwoColorLand(Color.Red, Color.Green, "Taiga"),
      new TwoColorLand(Color.Green, Color.White, "Savannah"),
      new TwoColorLand(Color.White, Color.Black, "Scrubland"),
      new TwoColorLand(Color.Black, Color.Green, "Bayou"),
      new TwoColorLand(Color.Red, Color.White, "Plateau"),
      new TwoColorLand(Color.Green, Color.Blue, "Tropical Island"),
    ];
  }

  process(userColorSelection: UserColorSelection): Category {
    const category = new Category(this.categoryName);
    if (
      userColorSelection.isDualColor() ||
      userColorSelection.isTriColor() ||
      userColorSelection.isFourColor() ||
      userColorSelection.isFiveColor()
    ) {
      this.lands
        .filter((element) => element.isSameColor(userColorSelection))
        .forEach((element) => category.add(1, element.getName()));
    }
    return category;
  }
}
