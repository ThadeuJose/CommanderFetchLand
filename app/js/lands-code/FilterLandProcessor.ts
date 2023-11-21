import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class FilterLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Filter Lands";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Mystic Gate"),
      new DualLand(Color.Red, Color.Blue, "Cascade Bluffs"),
      new DualLand(Color.Black, Color.Blue, "Sunken Ruins"),
      new DualLand(Color.Black, Color.Red, "Graven Cairns"),
      new DualLand(Color.Red, Color.Green, "Fire-lit Thicket"),
      new DualLand(Color.Green, Color.White, "Wooded Bastion"),
      new DualLand(Color.White, Color.Black, "Fetid Heath"),
      new DualLand(Color.Black, Color.Green, "Twilight Mire"),
      new DualLand(Color.Red, Color.White, "Rugged Prairie"),
      new DualLand(Color.Green, Color.Blue, "Flooded Grove"),
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
