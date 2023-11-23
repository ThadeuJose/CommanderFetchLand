export function showSnackbar() {
  // Get the snackbar DIV
  const snackbar: HTMLElement | null = document.getElementById("snackbar");

  if (snackbar) {
    // Add the "show" class to DIV
    snackbar.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(() => {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
  }
}
