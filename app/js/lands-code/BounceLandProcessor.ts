import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class BounceLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Bounce Lands";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Azorius Chancery"),
      new DualLand(Color.Red, Color.Blue, "Izzet Boilerworks"),
      new DualLand(Color.Black, Color.Blue, "Dimir Aqueduct"),
      new DualLand(Color.Black, Color.Red, "Rakdos Carnarium"),
      new DualLand(Color.Red, Color.Green, "Gruul Turf"),
      new DualLand(Color.Green, Color.White, "Selesnya Sanctuary"),
      new DualLand(Color.White, Color.Black, "Orzhov Basilica"),
      new DualLand(Color.Black, Color.Green, "Golgari Rot Farm"),
      new DualLand(Color.Red, Color.White, "Boros Garrison"),
      new DualLand(Color.Green, Color.Blue, "Simic Growth Chamber"),
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
