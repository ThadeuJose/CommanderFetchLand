import { showSnackbar } from "./showSnackbar";

export function copyToClipboard(value: string) {
  navigator.clipboard
    .writeText(value)
    .then(() => {
      showSnackbar();
    })
    .catch((error) => {
      console.error("Clipboard writeText error:", error);
    });
}
