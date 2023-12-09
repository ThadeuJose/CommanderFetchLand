import Category from "../Category";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class RainbowLandProcessor implements Processor {
  private categoryName: string = "Rainbow Lands";

  constructor() {}

  process(userColorSelection: UserColorSelection): Category {
    const category: Category = new Category(this.categoryName);
    if (userColorSelection.isDualColor()) {
      category.add(1, "Command Tower");
      category.add(1, "Mana Confluence");
    }

    if (userColorSelection.isTriColor() || userColorSelection.isFourColor()) {
      category.add(1, "Command Tower");
      category.add(1, "Mana Confluence");
      category.add(1, "Exotic Orchard");
      category.add(1, "Reflecting Pool");
      category.add(1, "Plaza of Heroes");
    }

    if (userColorSelection.isFiveColor()) {
      category.add(1, "Command Tower");
      category.add(1, "Mana Confluence");
      category.add(1, "Exotic Orchard");
      category.add(1, "Reflecting Pool");
      category.add(1, "Plaza of Heroes");
      category.add(1, "City of Brass");
      category.add(1, "The World Tree");
    }
    return category;
  }
}
