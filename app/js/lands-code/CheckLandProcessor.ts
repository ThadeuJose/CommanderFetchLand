import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class CheckLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Check Lands";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Glacial Fortress"),
      new DualLand(Color.Red, Color.Blue, "Sulfur Falls"),
      new DualLand(Color.Black, Color.Blue, "Drowned Catacomb"),
      new DualLand(Color.Black, Color.Red, "Dragonskull Summit"),
      new DualLand(Color.Red, Color.Green, "Rootbound Crag"),
      new DualLand(Color.Green, Color.White, "Sunpetal Grove"),
      new DualLand(Color.White, Color.Black, "Isolated Chapel"),
      new DualLand(Color.Black, Color.Green, "Woodland Cemetery"),
      new DualLand(Color.Red, Color.White, "Clifftop Retreat"),
      new DualLand(Color.Green, Color.Blue, "Hinterland Harbor"),
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
