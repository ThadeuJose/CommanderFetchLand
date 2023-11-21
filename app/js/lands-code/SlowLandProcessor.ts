import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class SlowLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Slow Lands";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Deserted Beach"),
      new DualLand(Color.Red, Color.Blue, "Stormcarved Coast"),
      new DualLand(Color.Black, Color.Blue, "Shipwreck Marsh"),
      new DualLand(Color.Black, Color.Red, "Haunted Ridge"),
      new DualLand(Color.Red, Color.Green, "Rockfall Vale"),
      new DualLand(Color.Green, Color.White, "Overgrown Farmland "),
      new DualLand(Color.White, Color.Black, "Shattered Sanctum"),
      new DualLand(Color.Black, Color.Green, "Deathcap Glade"),
      new DualLand(Color.Red, Color.White, "Sundown Pass"),
      new DualLand(Color.Green, Color.Blue, "Dreamroot Cascade"),
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
