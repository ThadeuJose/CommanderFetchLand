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
    return category;
  }
}
