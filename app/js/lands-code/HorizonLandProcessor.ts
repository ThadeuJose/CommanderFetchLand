import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class HorizonLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Horizon Lands";

  private defaultForMissingLand: string = "City of Brass";
  private strictlyBetterRedBlack: string = "Mount Doom";

  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, this.defaultForMissingLand),
      new TwoColorLand(Color.Red, Color.Blue, "Fiery Islet"),
      new TwoColorLand(Color.Black, Color.Blue, this.defaultForMissingLand),
      new TwoColorLand(Color.Black, Color.Red, this.strictlyBetterRedBlack),
      new TwoColorLand(Color.Red, Color.Green, this.defaultForMissingLand),
      new TwoColorLand(Color.Green, Color.White, "Horizon Canopy"),
      new TwoColorLand(Color.White, Color.Black, "Silent Clearing"),
      new TwoColorLand(Color.Black, Color.Green, "Nurturing Peatland"),
      new TwoColorLand(Color.Red, Color.White, "Sunbaked Canyon"),
      new TwoColorLand(Color.Green, Color.Blue, "Waterlogged Grove"),
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
