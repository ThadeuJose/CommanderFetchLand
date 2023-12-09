import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class SlowLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Slow Lands";

  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, "Deserted Beach"),
      new TwoColorLand(Color.Red, Color.Blue, "Stormcarved Coast"),
      new TwoColorLand(Color.Black, Color.Blue, "Shipwreck Marsh"),
      new TwoColorLand(Color.Black, Color.Red, "Haunted Ridge"),
      new TwoColorLand(Color.Red, Color.Green, "Rockfall Vale"),
      new TwoColorLand(Color.Green, Color.White, "Overgrown Farmland "),
      new TwoColorLand(Color.White, Color.Black, "Shattered Sanctum"),
      new TwoColorLand(Color.Black, Color.Green, "Deathcap Glade"),
      new TwoColorLand(Color.Red, Color.White, "Sundown Pass"),
      new TwoColorLand(Color.Green, Color.Blue, "Dreamroot Cascade"),
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
