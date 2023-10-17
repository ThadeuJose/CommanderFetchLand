import UserColorSelection from "./UserColorSelection";

export interface Land {
  isValid(userColorSelection: UserColorSelection);

  getName(): string;
}
