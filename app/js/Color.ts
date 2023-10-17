export enum Color {
  White = "white",
  Blue = "blue",
  Black = "black",
  Red = "red",
  Green = "green",
}

export function stringToColor(str: string): Color | undefined {
  switch (str.toLowerCase()) {
    case "white":
      return Color.White;
    case "blue":
      return Color.Blue;
    case "black":
      return Color.Black;
    case "red":
      return Color.Red;
    case "green":
      return Color.Green;
    default:
      return undefined; // Return undefined for unknown colors
  }
}
