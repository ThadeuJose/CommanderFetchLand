import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class ShockLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Shock Lands";

  constructor() {
    this.lands = [
      new TwoColorLand(Color.White, Color.Blue, "Hallowed Fountain"),
      new TwoColorLand(Color.Red, Color.Blue, "Steam Vents"),
      new TwoColorLand(Color.Black, Color.Blue, "Watery Grave"),
      new TwoColorLand(Color.Black, Color.Red, "Blood Crypt"),
      new TwoColorLand(Color.Red, Color.Green, "Stomping Ground"),
      new TwoColorLand(Color.Green, Color.White, "Temple Garden"),
      new TwoColorLand(Color.White, Color.Black, "Godless Shrine"),
      new TwoColorLand(Color.Black, Color.Green, "Overgrown Tomb"),
      new TwoColorLand(Color.Red, Color.White, "Sacred Foundry"),
      new TwoColorLand(Color.Green, Color.Blue, "Breeding Pool"),
    ];
  }

  process(userColorSelection: UserColorSelection): Category {
    const category = new Category(this.categoryName);
    if (userColorSelection.isDualColor() || userColorSelection.isTriColor()) {
      this.lands
        .filter((element) => element.isSameColor(userColorSelection))
        .forEach((element) => category.add(1, element.getName()));
    }
    if (userColorSelection.isFourColor()) {
      const colors = this.combinate(userColorSelection);
      this.lands.forEach((element) => {
        if (
          element.isSameColor(colors[0]) ||
          element.isSameColor(colors[1]) ||
          element.isSameColor(colors[2])
        ) {
          category.add(1, element.getName());
        }
      });
    }
    return category;
  }

  combinate(
    colors: UserColorSelection
  ): [UserColorSelection, UserColorSelection, UserColorSelection] {
    const arr: Color[] = colors.getAllColor();
    const color1 = new UserColorSelection();
    color1.add(arr[0]);
    color1.add(arr[1]);
    const color2 = new UserColorSelection();
    color2.add(arr[0]);
    color2.add(arr[2]);
    const color3 = new UserColorSelection();
    color3.add(arr[0]);
    color3.add(arr[3]);
    return [color1, color2, color3];
  }
}
