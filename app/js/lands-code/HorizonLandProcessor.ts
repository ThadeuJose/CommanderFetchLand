import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class HorizonLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Horizon Lands";

  private defaultForMissingLand: string = "City of Brass";
  private strictlyBetterRedBlack: string = "Mount Doom";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, this.defaultForMissingLand),
      new DualLand(Color.Red, Color.Blue, "Fiery Islet"),
      new DualLand(Color.Black, Color.Blue, this.defaultForMissingLand),
      new DualLand(Color.Black, Color.Red, this.strictlyBetterRedBlack),
      new DualLand(Color.Red, Color.Green, this.defaultForMissingLand),
      new DualLand(Color.Green, Color.White, "Horizon Canopy"),
      new DualLand(Color.White, Color.Black, "Silent Clearing"),
      new DualLand(Color.Black, Color.Green, "Nurturing Peatland"),
      new DualLand(Color.Red, Color.White, "Sunbaked Canyon"),
      new DualLand(Color.Green, Color.Blue, "Waterlogged Grove"),
    ];
  }

  process(userColorSelection: UserColorSelection): Category {
    const category: Category = new Category(this.categoryName);
    if (userColorSelection.isDualColor()) {
      this.lands
        .filter((element) => element.isSameColor(userColorSelection))
        .forEach((element) => category.add(1, element.getName()));
    }
    if (userColorSelection.isTriColor()) {
      category.add(1, this.defaultForMissingLand);
    }
    return category;
  }
}
