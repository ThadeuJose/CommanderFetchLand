import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
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
    if (userColorSelection.isFourColor()) {
      const colors = this.combinate(userColorSelection);
      this.lands.forEach((element) => {
        if (element.isSameColor(colors[0]) || element.isSameColor(colors[1])) {
          category.add(1, element.getName());
        }
      });
    }
    return category;
  }

  combinate(
    colors: UserColorSelection
  ): [UserColorSelection, UserColorSelection] {
    const arr: Color[] = colors.getAllColor();
    const color1 = new UserColorSelection();
    color1.add(arr[0]);
    color1.add(arr[1]);
    color1.add(arr[2]);
    const color2 = new UserColorSelection();
    color2.add(arr[0]);
    color2.add(arr[2]);
    color2.add(arr[3]);
    return [color1, color2];
  }
}
