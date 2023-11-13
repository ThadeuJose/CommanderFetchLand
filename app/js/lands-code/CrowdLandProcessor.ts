import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class CrowdLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Crowd Lands";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Sea of Clouds"),
      new DualLand(Color.Red, Color.Blue, "Training Center"),
      new DualLand(Color.Black, Color.Blue, "Morphic Pool"),
      new DualLand(Color.Black, Color.Red, "Luxury Suite"),
      new DualLand(Color.Red, Color.Green, "Spire Garden"),
      new DualLand(Color.Green, Color.White, "Bountiful Promenade"),
      new DualLand(Color.White, Color.Black, "Vault of Champions"),
      new DualLand(Color.Black, Color.Green, "Undergrowth Stadium"),
      new DualLand(Color.Red, Color.White, "Spectator Seating"),
      new DualLand(Color.Green, Color.Blue, "Rejuvenating Springs"),
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
    if (userColorSelection.isTriColor()) {
      const category = new Category(this.categoryName);
      this.lands.forEach((element) => {
        if (element.isSameColor(userColorSelection)) {
          category.add(1, element.getName());
        }
      });
      return category;
    }
    return new Category(this.categoryName);
  }
}
