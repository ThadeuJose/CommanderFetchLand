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
    if (userColorSelection.isDualColor()) {
      const category = new Category("Basic Lands");
      this.lands.forEach((element) => {
        if (element.hasSomeColor(userColorSelection)) {
          category.add(5, element.getName());
        }
      });
      return category;
    }
    return new Category("Basic Lands");
  }
}
