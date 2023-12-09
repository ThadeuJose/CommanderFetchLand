import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class FetchLandProcessor implements Processor {
  private lands: TwoColorLand[];
  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, "Flooded Strand"),
      new TwoColorLand(Color.Red, Color.Blue, "Scalding Tarn"),
      new TwoColorLand(Color.Black, Color.Blue, "Polluted Delta"),
      new TwoColorLand(Color.Black, Color.Red, "Bloodstained Mire"),
      new TwoColorLand(Color.Red, Color.Green, "Wooded Foothills"),
      new TwoColorLand(Color.Green, Color.White, "Windswept Heath"),
      new TwoColorLand(Color.White, Color.Black, "Marsh Flats"),
      new TwoColorLand(Color.Black, Color.Green, "Verdant Catacombs"),
      new TwoColorLand(Color.Red, Color.White, "Arid Mesa"),
      new TwoColorLand(Color.Green, Color.Blue, "Misty Rainforest"),
    ];
  }
  process(userColorSelection: UserColorSelection): Category {
    const category = new Category("Fetch Lands");
    if (
      userColorSelection.isDualColor() ||
      userColorSelection.isTriColor() ||
      userColorSelection.isFourColor() ||
      userColorSelection.isFiveColor()
    ) {
      category.add(1, "Prismatic Vista");
      this.lands.forEach((element) => {
        if (element.hasSomeColor(userColorSelection)) {
          category.add(1, element.getName());
        }
      });
    }
    return category;
  }
}
