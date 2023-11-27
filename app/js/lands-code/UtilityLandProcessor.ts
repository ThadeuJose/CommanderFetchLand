import Category from "../Category";
import EmptyCategory from "../EmptyCategory";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class UtilityLandProcessor implements Processor {
  private categoryName: string = "Utility Lands";

  constructor() {}

  process(userColorSelection: UserColorSelection): Category {
    if (userColorSelection.isTriColor() || userColorSelection.isFiveColor()) {
      return new EmptyCategory(this.categoryName, 0);
    }
    if (userColorSelection.isFourColor()) {
      return new EmptyCategory(this.categoryName, 3);
    }
    return new EmptyCategory(this.categoryName, 8);
  }
}
