import Category from "../Category";
import EmptyCategory from "../EmptyCategory";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class UtilityLandProcessor implements Processor {
  private categoryName: string = "Utility Lands";

  constructor() {}

  process(userColorSelection: UserColorSelection): Category {
    if (userColorSelection.isDualColor()) {
      return new EmptyCategory(this.categoryName, 8);
    }
    if (userColorSelection.isTriColor()) {
      return new EmptyCategory(this.categoryName, 0);
    }
    return new EmptyCategory(this.categoryName, 8);
  }
}
