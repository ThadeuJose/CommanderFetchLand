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
