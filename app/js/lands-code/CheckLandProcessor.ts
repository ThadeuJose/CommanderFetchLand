import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class CheckLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Check Lands";

  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, "Glacial Fortress"),
      new TwoColorLand(Color.Red, Color.Blue, "Sulfur Falls"),
      new TwoColorLand(Color.Black, Color.Blue, "Drowned Catacomb"),
      new TwoColorLand(Color.Black, Color.Red, "Dragonskull Summit"),
      new TwoColorLand(Color.Red, Color.Green, "Rootbound Crag"),
      new TwoColorLand(Color.Green, Color.White, "Sunpetal Grove"),
      new TwoColorLand(Color.White, Color.Black, "Isolated Chapel"),
      new TwoColorLand(Color.Black, Color.Green, "Woodland Cemetery"),
      new TwoColorLand(Color.Red, Color.White, "Clifftop Retreat"),
      new TwoColorLand(Color.Green, Color.Blue, "Hinterland Harbor"),
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
