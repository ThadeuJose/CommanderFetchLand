import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import ThreeColorLand from "../ThreeColorLand";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class TriomeProcessor implements Processor {
  private lands: ThreeColorLand[];
  private categoryName: string = "Triome Lands";

  constructor() {
    this.lands = [
      new ThreeColorLand(
        Color.White,
        Color.Blue,
        Color.Green,
        "Spara's Headquarters"
      ),
      new ThreeColorLand(
        Color.White,
        Color.Blue,
        Color.Black,
        "Raffine's Tower"
      ),
      new ThreeColorLand(
        Color.Blue,
        Color.Black,
        Color.Red,
        "Xander's Lounge "
      ),
      new ThreeColorLand(
        Color.Black,
        Color.Red,
        Color.Green,
        "Ziatora's Proving Ground"
      ),
      new ThreeColorLand(
        Color.White,
        Color.Red,
        Color.Green,
        "Jetmir's Garden"
      ),
      new ThreeColorLand(
        Color.White,
        Color.Black,
        Color.Green,
        "Indatha Triome"
      ),
      new ThreeColorLand(Color.White, Color.Blue, Color.Red, "Raugrin Triome"),
      new ThreeColorLand(Color.Blue, Color.Black, Color.Green, "Zagoth Triome"),
      new ThreeColorLand(Color.White, Color.Black, Color.Red, "Savai Triome"),
      new ThreeColorLand(Color.Blue, Color.Red, Color.Green, "Ketria Triome"),
    ];
  }

  process(userColorSelection: UserColorSelection): Category {
    const category = new Category(this.categoryName);
    if (userColorSelection.isTriColor()) {
      this.lands.forEach((element) => {
        if (element.isSameColor(userColorSelection)) {
          category.add(1, element.getName());
        }
      });
    }
    return category;
  }
}
