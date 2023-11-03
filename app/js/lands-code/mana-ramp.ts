import Category from "../Category";
import EmptyCategory from "../EmptyCategory";
import UserColorSelection from "../UserColorSelection";
import Processor from "./Processor";

export default class TemplateProcessor implements Processor {
  private categoryName: string;
  private amount: number;

  constructor(categoryName: string, amount: number) {
    this.categoryName = categoryName;
    this.amount = amount;
  }

  process(userColorSelection: UserColorSelection): Category {
    return new EmptyCategory(this.categoryName, this.amount);
  }
}
