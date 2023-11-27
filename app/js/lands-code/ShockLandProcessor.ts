import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class ShockLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Shock Lands";

  constructor() {
    this.lands = [
      new DualLand(Color.White, Color.Blue, "Hallowed Fountain"),
      new DualLand(Color.Red, Color.Blue, "Steam Vents"),
      new DualLand(Color.Black, Color.Blue, "Watery Grave"),
      new DualLand(Color.Black, Color.Red, "Blood Crypt"),
      new DualLand(Color.Red, Color.Green, "Stomping Ground"),
      new DualLand(Color.Green, Color.White, "Temple Garden"),
      new DualLand(Color.White, Color.Black, "Godless Shrine"),
      new DualLand(Color.Black, Color.Green, "Overgrown Tomb"),
      new DualLand(Color.Red, Color.White, "Sacred Foundry"),
      new DualLand(Color.Green, Color.Blue, "Breeding Pool"),
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
