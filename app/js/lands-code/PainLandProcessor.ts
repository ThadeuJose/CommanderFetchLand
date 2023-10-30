import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class PainLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Pain Lands";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Adarkar Wastes"),
      new DualLand(Color.Red, Color.Blue, "Shivan Reef"),
      new DualLand(Color.Black, Color.Blue, "Underground River"),
      new DualLand(Color.Black, Color.Red, "Sulfurous Springs"),
      new DualLand(Color.Red, Color.Green, "Karplusan Forest"),
      new DualLand(Color.Green, Color.White, "Brushland"),
      new DualLand(Color.White, Color.Black, "Caves of Koilos"),
      new DualLand(Color.Black, Color.Green, "Llanowar Wastes"),
      new DualLand(Color.Red, Color.White, "Battlefield Forge"),
      new DualLand(Color.Green, Color.Blue, "Yavimaya Coast"),
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
