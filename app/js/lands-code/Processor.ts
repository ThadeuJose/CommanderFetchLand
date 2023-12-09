import Category from "../Category";
import UserColorSelection from "../UserColorSelection";

export default interface Processor {
  process(userColorSelection: UserColorSelection): Category;
}
