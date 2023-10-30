import Category from "../Category";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";

export function DualColorSpecialCase(
  categoryName: string,
  userColorSelection: UserColorSelection,
  lands: DualLand[]
) {
  const category = new Category(categoryName);
  lands.forEach((element) => {
    if (element.isSameColor(userColorSelection)) {
      category.add(1, element.getName());
    }
  });
  return category;
}
