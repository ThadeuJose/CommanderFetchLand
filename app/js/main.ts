import Category from "./Category";
import { Color, stringToColor } from "./Color";
import UserColorSelection from "./UserColorSelection";
import BasicLandProcessor from "./lands-code/BasicLandProcessor";
import BounceLandProcessor from "./lands-code/BounceLandProcessor";
import CheckLandProcessor from "./lands-code/CheckLandProcessor";
import CrowdLandProcessor from "./lands-code/CrowdLandProcessor";
import DualLandProcessor from "./lands-code/DualLandProcessor";
import FetchLandProcessor from "./lands-code/FetchLandProcessor";
import FilterLandProcessor from "./lands-code/FilterLandProcessor";
import HorizonLandProcessor from "./lands-code/HorizonLandProcessor";
import PainLandProcessor from "./lands-code/PainLandProcessor";
import Processor from "./lands-code/Processor";
import RainbowLandProcessor from "./lands-code/RainbowLandProcessor";
import ShockLandProcessor from "./lands-code/ShockLandProcessor";
import SlowLandProcessor from "./lands-code/SlowLandProcessor";
import UtilityLandProcessor from "./lands-code/UtilityLandProcessor";
import TemplateProcessor from "./lands-code/TemplateProcessor";
import TriomeProcessor from "./lands-code/TriomeProcessor";
import PathwayLandProcessor from "./lands-code/PathwayLandProcessor";

const userColorSelection: UserColorSelection = new UserColorSelection();

let detail_checked = false;

const ProcessorArray: Processor[] = [
  new BasicLandProcessor(),
  new CrowdLandProcessor(),
  new CheckLandProcessor(),
  new FetchLandProcessor(),
  new FilterLandProcessor(),
  new ShockLandProcessor(),
  new PainLandProcessor(),
  new SlowLandProcessor(),
  new RainbowLandProcessor(),
  new HorizonLandProcessor(),
  new DualLandProcessor(),
  new BounceLandProcessor(),
  new PathwayLandProcessor(),
  new TriomeProcessor(),
  new UtilityLandProcessor(),
  new TemplateProcessor("Mana Ramp", 10),
  new TemplateProcessor("Commander", 1),
  new TemplateProcessor("Burst Card Draw", 5),
  new TemplateProcessor("Repeatable Card Draw", 5),
  new TemplateProcessor("Board Wipe", 4),
  new TemplateProcessor("Target Removal", 6),
  new TemplateProcessor("Theme 1", 10),
  new TemplateProcessor("Theme 2", 10),
  new TemplateProcessor("Theme 3", 10),
];

const LandsProcessors: Processor[] = [
  new BasicLandProcessor(),
  new DualLandProcessor(),
  new CrowdLandProcessor(),
  new CheckLandProcessor(),
  new FetchLandProcessor(),
  new FilterLandProcessor(),
  new ShockLandProcessor(),
  new PainLandProcessor(),
  new SlowLandProcessor(),
  new RainbowLandProcessor(),
  new HorizonLandProcessor(),
  new BounceLandProcessor(),
  new PathwayLandProcessor(),
  new TriomeProcessor(),
];

const TemplateProcessors: Processor[] = [
  new UtilityLandProcessor(),
  new TemplateProcessor("Mana Ramp", 10),
  new TemplateProcessor("Commander", 1),
  new TemplateProcessor("Burst Card Draw", 5),
  new TemplateProcessor("Repeatable Card Draw", 5),
  new TemplateProcessor("Board Wipe", 4),
  new TemplateProcessor("Target Removal", 6),
  new TemplateProcessor("Theme 1", 10),
  new TemplateProcessor("Theme 2", 10),
  new TemplateProcessor("Theme 3", 10),
];

document.addEventListener("DOMContentLoaded", () => {
  const inputList: HTMLCollectionOf<HTMLInputElement> =
    document.getElementsByTagName("input");
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].checked = false;
  }

  const outputElement = document.getElementById(
    "output"
  ) as HTMLTextAreaElement;
  if (outputElement) {
    outputElement.value = "Click to copy the lands";
  }

  outputElement.addEventListener("click", (event: MouseEvent) => {
    const categories: Category[] = ProcessorArray.map((elem) => {
      return elem.process(userColorSelection);
    });

    event.preventDefault();
    if (outputElement.value !== "Click to copy the lands") {
      const value: string = printLandsMoxfield(categories);
      console.log(value);
      navigator.clipboard
        .writeText(value)
        .then(() => {
          showSnackbar();
        })
        .catch((error) => {
          console.error("Clipboard writeText error:", error);
        });
    }
  });

  // Add event listeners for the checkboxes
  const checkboxes = document.querySelectorAll(
    ".checkbox_box input[type='checkbox']"
  );

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event: Event) => {
      const target: HTMLInputElement | null = event.target as HTMLInputElement;
      const checkboxName: string | null = target.getAttribute("data-name");

      if (checkboxName === "details") {
        detail_checked = target.checked;
      } else {
        if (target.checked) {
          console.log(`Checked ${checkboxName}`);
          if (checkboxName) {
            const color: Color | undefined = stringToColor(checkboxName);
            if (color) {
              userColorSelection.add(color);
            }
          }
        } else {
          console.log(`Unchecked ${checkboxName}`);
          if (checkboxName) {
            const color: Color | undefined = stringToColor(checkboxName);
            if (color) {
              userColorSelection.remove(color);
            }
          }
        }
      }

      const categories: Category[] = ProcessorArray.map((elem) => {
        return elem.process(userColorSelection);
      });

      const landsCategories: Category[] = LandsProcessors.map((elem) => {
        return elem.process(userColorSelection);
      });

      const templateCategories: Category[] = TemplateProcessors.map((elem) => {
        return elem.process(userColorSelection);
      });

      const outputElement = document.getElementById(
        "output"
      ) as HTMLTextAreaElement;

      let resp: string;
      if (userColorSelection.size() >= 1) {
        if (detail_checked) {
          resp = printLandsWithTitle(categories);
        } else {
          resp = printLandsNoTitle(landsCategories, templateCategories);
        }
      } else {
        resp = "Click to copy the lands";
      }

      outputElement.value = resp;
    });
  });
});

function printLandsMoxfield(categories: Category[]): string {
  return categories
    .map((elem) => {
      let resp: string = "";

      if (elem.lines.trim()) {
        resp = `${elem.lines}`;
      }

      return resp;
    })
    .join("");
}

function printLandsNoTitle(
  landsCategories: Category[],
  templateCategories: Category[]
) {
  let resp = "";
  let size = landsCategories.reduce((sum, current) => {
    return sum + current.size();
  }, 0);

  resp += `Lands: ${size}\n`;

  resp += landsCategories
    .map((elem) => {
      let resp: string = "";

      if (elem.lines.trim()) {
        resp = `${elem.lines}`;
      }

      return resp;
    })
    .join("");

  resp += "\n";

  resp += templateCategories
    .map((elem) => {
      let resp: string = "";

      if (!elem.isEmpty()) {
        resp = `${elem.title}: ${elem.size()}\n${elem.lines}\n`;
      }

      return resp;
    })
    .join("");

  return resp;
}

function printLandsWithTitle(categories: Category[]): string {
  //Print
  // Category Title: 1
  // 1 Element

  return categories
    .map((elem) => {
      let resp: string = "";

      if (!elem.isEmpty()) {
        resp = `${elem.title}: ${elem.size()}\n${elem.lines}\n`;
      }

      return resp;
    })
    .join("");
}

function showSnackbar() {
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
