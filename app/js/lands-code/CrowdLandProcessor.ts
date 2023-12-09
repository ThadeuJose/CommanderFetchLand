import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class CrowdLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Crowd Lands";

  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, "Sea of Clouds"),
      new TwoColorLand(Color.Red, Color.Blue, "Training Center"),
      new TwoColorLand(Color.Black, Color.Blue, "Morphic Pool"),
      new TwoColorLand(Color.Black, Color.Red, "Luxury Suite"),
      new TwoColorLand(Color.Red, Color.Green, "Spire Garden"),
      new TwoColorLand(Color.Green, Color.White, "Bountiful Promenade"),
      new TwoColorLand(Color.White, Color.Black, "Vault of Champions"),
      new TwoColorLand(Color.Black, Color.Green, "Undergrowth Stadium"),
      new TwoColorLand(Color.Red, Color.White, "Spectator Seating"),
      new TwoColorLand(Color.Green, Color.Blue, "Rejuvenating Springs"),
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
