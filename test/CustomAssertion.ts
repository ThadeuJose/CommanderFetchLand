import { assert } from "chai";
import UserColorSelection from "../app/js/UserColorSelection";
import BasicLandProcessor from "../app/js/lands-code/BasicLandProcessor";
import BounceLandProcessor from "../app/js/lands-code/BounceLandProcessor";
import CheckLandProcessor from "../app/js/lands-code/CheckLandProcessor";
import CrowdLandProcessor from "../app/js/lands-code/CrowdLandProcessor";
import DualLandProcessor from "../app/js/lands-code/DualLandProcessor";
import FetchLandProcessor from "../app/js/lands-code/FetchLandProcessor";
import FilterLandProcessor from "../app/js/lands-code/FilterLandProcessor";
import HorizonLandProcessor from "../app/js/lands-code/HorizonLandProcessor";
import PainLandProcessor from "../app/js/lands-code/PainLandProcessor";
import PathwayLandProcessor from "../app/js/lands-code/PathwayLandProcessor";
import Processor from "../app/js/lands-code/Processor";
import RainbowLandProcessor from "../app/js/lands-code/RainbowLandProcessor";
import ShockLandProcessor from "../app/js/lands-code/ShockLandProcessor";
import SlowLandProcessor from "../app/js/lands-code/SlowLandProcessor";
import TriomeProcessor from "../app/js/lands-code/TriomeProcessor";
import UtilityLandProcessor from "../app/js/lands-code/UtilityLandProcessor";

export function calculateTotalAmountOfLands(
  colors: UserColorSelection
): number {
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
  ];

  return ProcessorArray.reduce((sum, current) => {
    return sum + current.process(colors).size();
  }, 0);
}
