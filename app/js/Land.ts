import UserColorSelection from "./UserColorSelection";

export interface Land {
  isValid(userColorSelection: UserColorSelection): boolean;

  getName(): string;
}
