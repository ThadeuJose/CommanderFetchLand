import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class ShockLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Shock Lands";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Hallowed Fountain"),
      new DualLand(Color.Red, Color.Blue, "Steam Vents"),
      new DualLand(Color.Black, Color.Blue, "Watery Grave"),
      new DualLand(Color.Black, Color.Red, "Blood Crypt"),
      new DualLand(Color.Red, Color.Green, "Stomping Ground"),
      new DualLand(Color.Green, Color.White, "Temple Garden"),
      new DualLand(Color.White, Color.Black, "Godless Shrine"),
      new DualLand(Color.Black, Color.Green, "Overgrown Tomb"),
      new DualLand(Color.Red, Color.White, "Sacred Foundry"),
      new DualLand(Color.Green, Color.Blue, "Breeding Pool"),
    ];
  }

  process(userColorSelection: UserColorSelection): Category {
    const category = new Category(this.categoryName);
    if (userColorSelection.isDualColor() || userColorSelection.isTriColor()) {
      this.lands
        .filter((element) => element.isSameColor(userColorSelection))
        .forEach((element) => category.add(1, element.getName()));
    }
    return category;
  }
}
