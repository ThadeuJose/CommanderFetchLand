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
import {
  printLandsMoxfield,
  printWithDetails,
  printWithoutDetails,
} from "./print";
import { copyToClipboard } from "./copyToClipboard";

const userColorSelection: UserColorSelection = new UserColorSelection();

let detail_checked = false;

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
  const outputElement = document.getElementById(
    "output"
  ) as HTMLTextAreaElement;

  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].checked = false;
  }

  if (outputElement) {
    outputElement.value = "Click to copy the lands";
  }

  outputElement.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    if (!userColorSelection.isEmpty()) {
      const value: string = printLandsMoxfield(
        processorToCategory(LandsProcessors, userColorSelection)
      );
      console.log(value);
      copyToClipboard(value);
    }
  });

  document
    .getElementById("details")
    ?.addEventListener("change", (event: Event) => {
      const target: HTMLInputElement | null = event.target as HTMLInputElement;
      detail_checked = target.checked;

      const landsCategories: Category[] = processorToCategory(
        LandsProcessors,
        userColorSelection
      );

      const templateCategories: Category[] = processorToCategory(
        TemplateProcessors,
        userColorSelection
      );

      outputElement.value = print(landsCategories, templateCategories);
    });

  // Add event listeners for the checkboxes
  const checkboxes = document.querySelectorAll(".color");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event: Event) => {
      const target: HTMLInputElement | null = event.target as HTMLInputElement;
      const checkboxName: string | null = target.getAttribute("data-name");

      if (checkboxName) {
        const color: Color | undefined = stringToColor(checkboxName);
        if (!color) {
          return;
        }
        toggle(color, target.checked);
      }

      const landsCategories: Category[] = processorToCategory(
        LandsProcessors,
        userColorSelection
      );

      const templateCategories: Category[] = processorToCategory(
        TemplateProcessors,
        userColorSelection
      );

      outputElement.value = print(landsCategories, templateCategories);
    });
  });
});

function toggle(color: Color, checked: boolean) {
  if (checked) {
    userColorSelection.add(color);
  } else {
    userColorSelection.remove(color);
  }
}

function print(landsCategories: Category[], templateCategories: Category[]) {
  if (userColorSelection.isEmpty()) {
    return "Click to copy the lands";
  }
  if (detail_checked) {
    return printWithDetails([...landsCategories, ...templateCategories]);
  }

  return printWithoutDetails(landsCategories, templateCategories);
}

function processorToCategory(
  processors: Processor[],
  color: UserColorSelection
) {
  return processors.map((elem) => elem.process(color));
}
