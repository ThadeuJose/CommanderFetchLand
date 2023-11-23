import Category from "../Category";
import { Color } from "../Color";
import SingleLand from "../SingleLand";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class BasicLandProcessor implements Processor {
  private lands: SingleLand[];
  constructor() {
    this.lands = [
      new SingleLand(Color.White, "Plains"),
      new SingleLand(Color.Blue, "Island"),
      new SingleLand(Color.Black, "Swamp"),
      new SingleLand(Color.Red, "Mountain"),
      new SingleLand(Color.Green, "Forest"),
    ];
  }
  process(userColorSelection: UserColorSelection): Category {
    const category = new Category("Basic Lands");
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

    if (userColorSelection.isFiveColor()) {
      amountOfLand = 2;
    }

    if (amountOfLand === 0) {
      return category;
    }

    this.lands.forEach((element) => {
      if (element.hasSomeColor(userColorSelection)) {
        category.add(amountOfLand, element.getName());
      }
    });

    return category;
  }
}
