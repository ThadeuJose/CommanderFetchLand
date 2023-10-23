import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class FilterLandProcessor implements Processor {
  private lands: DualLand[];
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
    const category = new Category("Filter Lands");
    if (userColorSelection.isDualColor()) {
      this.lands.forEach((element) => {
        if (element.isSameColor(userColorSelection)) {
          category.add(1, element.getName());
        }
      });
      return category;
    }
    return category;
  }
}
