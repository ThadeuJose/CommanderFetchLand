import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class BounceLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Bounce Lands";

  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, "Azorius Chancery"),
      new TwoColorLand(Color.Red, Color.Blue, "Izzet Boilerworks"),
      new TwoColorLand(Color.Black, Color.Blue, "Dimir Aqueduct"),
      new TwoColorLand(Color.Black, Color.Red, "Rakdos Carnarium"),
      new TwoColorLand(Color.Red, Color.Green, "Gruul Turf"),
      new TwoColorLand(Color.Green, Color.White, "Selesnya Sanctuary"),
      new TwoColorLand(Color.White, Color.Black, "Orzhov Basilica"),
      new TwoColorLand(Color.Black, Color.Green, "Golgari Rot Farm"),
      new TwoColorLand(Color.Red, Color.White, "Boros Garrison"),
      new TwoColorLand(Color.Green, Color.Blue, "Simic Growth Chamber"),
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
