import Category from "../Category";
import { Color } from "../Color";
import OneColorLand from "../OneColorLand";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class BasicLandProcessor implements Processor {
  private lands: OneColorLand[];
  constructor() {
    this.lands = [
      new OneColorLand(Color.White, "Plains"),
      new OneColorLand(Color.Blue, "Island"),
      new OneColorLand(Color.Black, "Swamp"),
      new OneColorLand(Color.Red, "Mountain"),
      new OneColorLand(Color.Green, "Forest"),
    ];
  }
  process(userColorSelection: UserColorSelection): Category {
    const category = new Category("Basic Lands");

    this.lands
      .filter((element) => element.hasSomeColor(userColorSelection))
      .forEach((element) =>
        category.add(
          this.getAmountOfLand(userColorSelection),
          element.getName()
        )
      );

    return category;
  }

  private getAmountOfLand(userColorSelection: UserColorSelection): number {
    let amountOfLand = 0;

    if (userColorSelection.isSingleColor()) {
      amountOfLand = 30;
    }

    if (userColorSelection.isDualColor()) {
      amountOfLand = 5;
    }

    if (userColorSelection.isTriColor()) {
      amountOfLand = 4;
    }

    if (userColorSelection.isFourColor() || userColorSelection.isFiveColor()) {
      amountOfLand = 2;
    }

    return amountOfLand;
  }
}
