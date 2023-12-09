import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class FilterLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Filter Lands";

  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, "Mystic Gate"),
      new TwoColorLand(Color.Red, Color.Blue, "Cascade Bluffs"),
      new TwoColorLand(Color.Black, Color.Blue, "Sunken Ruins"),
      new TwoColorLand(Color.Black, Color.Red, "Graven Cairns"),
      new TwoColorLand(Color.Red, Color.Green, "Fire-lit Thicket"),
      new TwoColorLand(Color.Green, Color.White, "Wooded Bastion"),
      new TwoColorLand(Color.White, Color.Black, "Fetid Heath"),
      new TwoColorLand(Color.Black, Color.Green, "Twilight Mire"),
      new TwoColorLand(Color.Red, Color.White, "Rugged Prairie"),
      new TwoColorLand(Color.Green, Color.Blue, "Flooded Grove"),
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
