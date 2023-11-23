import Category from "./Category";

export function printLandsMoxfield(categories: Category[]): string {
  return printWithoutTitle(categories);
}

export function printWithoutDetails(
  landsCategories: Category[],
  templateCategories: Category[]
) {
  return `Lands: ${calculateSize(landsCategories)}\n${printWithoutTitle(
    landsCategories
  )}\n${printWithTitle(templateCategories)}`;
}

function calculateSize(categories: Category[]) {
  return categories.reduce((sum, current) => {
    return sum + current.size();
  }, 0);
}

function printWithoutTitle(categories: Category[]) {
  return categories
    .filter((elem) => elem.lines.trim())
    .map((elem) => `${elem.lines}`)
    .join("");
}

export function printWithDetails(categories: Category[]): string {
  //Print
  // Category Title: 1
  // 1 Element
  return categories
    .filter((elem) => !elem.isEmpty())
    .map((elem) => `${elem.title}: ${elem.size()}\n${elem.lines}\n`)
    .join("");
}

function printWithTitle(categories: Category[]): string {
  return categories
    .filter((elem) => !elem.isEmpty())
    .map((elem) => `${elem.title}: ${elem.size()}\n${elem.lines}\n`)
    .join("");
}
