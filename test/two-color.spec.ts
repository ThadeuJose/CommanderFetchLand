import { assert } from "chai";
import { Color } from "../app/js/Color";
import UserColorSelection from "../app/js/UserColorSelection";
import CrowdLandProcessor from "../app/js/lands-code/CrowdLandProcessor";
import FilterLandProcessor from "../app/js/lands-code/FilterLandProcessor";
import FetchLandProcessor from "../app/js/lands-code/FetchLandProcessor";
import CheckLandProcessor from "../app/js/lands-code/CheckLandProcessor";
import BasicLandProcessor from "../app/js/lands-code/BasicLandProcessor";
import ShockLandProcessor from "../app/js/lands-code/ShockLandProcessor";
import PainLandProcessor from "../app/js/lands-code/PainLandProcessor";
import SlowLandProcessor from "../app/js/lands-code/SlowLandProcessor";
import RainbowLandProcessor from "../app/js/lands-code/RainbowLandProcessor";
import HorizonLandProcessor from "../app/js/lands-code/HorizonLandProcessor";
import DualLandProcessor from "../app/js/lands-code/DualLandProcessor";
import BounceLandProcessor from "../app/js/lands-code/BounceLandProcessor";
import UtilityLandProcessor from "../app/js/lands-code/UtilityLandProcessor";
import Processor from "../app/js/lands-code/Processor";
import PathwayLandProcessor from "../app/js/lands-code/PathwayLandProcessor";
import TriomeProcessor from "../app/js/lands-code/TriomeProcessor";
import { calculateTotalAmountOfLands } from "./CustomAssertion";

describe("2 Color", function () {
  let colors: UserColorSelection;

  beforeEach(function () {
    colors = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Blue);
  });

  it("7 Fetch Lands", function () {
    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Arid Mesa"), 1);
    assert.strictEqual(actual.getAmount("Bloodstained Mire"), 1);
    assert.strictEqual(actual.getAmount("Flooded Strand"), 1);
    assert.strictEqual(actual.getAmount("Misty Rainforest"), 1);
    assert.strictEqual(actual.getAmount("Polluted Delta"), 1);
    assert.strictEqual(actual.getAmount("Scalding Tarn"), 1);
    assert.strictEqual(actual.getAmount("Wooded Foothills"), 1);
  });

  it("1 Prismatic Vista", function () {
    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Prismatic Vista"), 1);
  });

  it("10 Basic Lands", function () {
    let processor: BasicLandProcessor = new BasicLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Island"), 5);
    assert.strictEqual(actual.getAmount("Mountain"), 5);
  });

  it("1 Check Land", function () {
    let processor: CheckLandProcessor = new CheckLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Sulfur Falls"), 1);
  });

  it("1 Crowd Land", function () {
    let processor: CrowdLandProcessor = new CrowdLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Training Center"), 1);
  });

  it("1 Filter Land", function () {
    let processor: FilterLandProcessor = new FilterLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Cascade Bluffs"), 1);
  });
  it("1 Shock Land", function () {
    let processor: ShockLandProcessor = new ShockLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Steam Vents"), 1);
  });
  it("1 Pain Land", function () {
    let processor: PainLandProcessor = new PainLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Shivan Reef"), 1);
  });
  it("1 Slow Land", function () {
    let processor: SlowLandProcessor = new SlowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Stormcarved Coast"), 1);
  });
  it("1 Horizon Land", function () {
    let processor: HorizonLandProcessor = new HorizonLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Fiery Islet"), 1);
  });
  it("1 Command Tower", function () {
    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Command Tower"), 1);
  });
  it("1 Mana Confluence", function () {
    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Mana Confluence"), 1);
  });
  it("1 Dual Land", function () {
    let processor: DualLandProcessor = new DualLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Volcanic Island"), 1);
  });
  it("1 Bounce Land", function () {
    let processor: BounceLandProcessor = new BounceLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Izzet Boilerworks"), 1);
  });
  it("1 Pathway Land", function () {
    let processor: PathwayLandProcessor = new PathwayLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(
      actual.getAmount("Riverglide Pathway / Lavaglide Pathway"),
      1
    );
  });

  it("0 Triome Land", function () {
    let processor: TriomeProcessor = new TriomeProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("8 Utility Land", function () {
    let processor: UtilityLandProcessor = new UtilityLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 8);
  });

  it("38 Lands Total", function () {
    assert.strictEqual(calculateTotalAmountOfLands(colors), 38);
  });
});
