import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class FetchLandProcessor implements Processor {
  private lands: DualLand[];
  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Flooded Strand"),
      new DualLand(Color.Red, Color.Blue, "Scalding Tarn"),
      new DualLand(Color.Black, Color.Blue, "Polluted Delta"),
      new DualLand(Color.Black, Color.Red, "Bloodstained Mire"),
      new DualLand(Color.Red, Color.Green, "Wooded Foothills"),
      new DualLand(Color.Green, Color.White, "Windswept Heath"),
      new DualLand(Color.White, Color.Black, "Marsh Flats"),
      new DualLand(Color.Black, Color.Green, "Verdant Catacombs"),
      new DualLand(Color.Red, Color.White, "Arid Mesa"),
      new DualLand(Color.Green, Color.Blue, "Misty Rainforest"),
    ];
  }
  process(userColorSelection: UserColorSelection): Category {
    const category = new Category("Filter Lands");
    if (userColorSelection.isDualColor()) {
      category.add(1, "Prismatic Vista");
      this.lands.forEach((element) => {
        if (element.hasSomeColor(userColorSelection)) {
          category.add(1, element.getName());
        }
      });
      return category;
    }
    return category;
  }
}
