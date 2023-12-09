import UserColorSelection from "./UserColorSelection";

export interface Land {
  isSameColor(userColorSelection: UserColorSelection): boolean;

  getName(): string;
}
