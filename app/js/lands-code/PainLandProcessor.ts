import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class PainLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Pain Lands";

  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, "Adarkar Wastes"),
      new TwoColorLand(Color.Red, Color.Blue, "Shivan Reef"),
      new TwoColorLand(Color.Black, Color.Blue, "Underground River"),
      new TwoColorLand(Color.Black, Color.Red, "Sulfurous Springs"),
      new TwoColorLand(Color.Red, Color.Green, "Karplusan Forest"),
      new TwoColorLand(Color.Green, Color.White, "Brushland"),
      new TwoColorLand(Color.White, Color.Black, "Caves of Koilos"),
      new TwoColorLand(Color.Black, Color.Green, "Llanowar Wastes"),
      new TwoColorLand(Color.Red, Color.White, "Battlefield Forge"),
      new TwoColorLand(Color.Green, Color.Blue, "Yavimaya Coast"),
    ];
  }

  process(userColorSelection: UserColorSelection): Category {
    return DualColorSpecialCase(
      this.categoryName,
      userColorSelection,
      this.lands
    );
  }
}
