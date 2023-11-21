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
import { calculateTotalAmountOfLands } from "./CustomAssertion";
import TriomeProcessor from "../app/js/lands-code/TriomeProcessor";

describe("1 Color", function () {
  let colors: UserColorSelection;

  beforeEach(function () {
    colors = new UserColorSelection();
    colors.add(Color.Red);
  });

  it("0 Fetch Lands", function () {
    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Prismatic Vista", function () {
    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("30 Basic Lands", function () {
    let processor: BasicLandProcessor = new BasicLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Mountain"), 30);
  });

  it("0 Check Land", function () {
    let processor: CheckLandProcessor = new CheckLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Crowd Land", function () {
    let processor: CrowdLandProcessor = new CrowdLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Filter Land", function () {
    let processor: FilterLandProcessor = new FilterLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Shock Land", function () {
    let processor: ShockLandProcessor = new ShockLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Pain Land", function () {
    let processor: PainLandProcessor = new PainLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Slow Land", function () {
    let processor: SlowLandProcessor = new SlowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Horizon Land", function () {
    let processor: HorizonLandProcessor = new HorizonLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Command Tower", function () {
    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Mana Confluence", function () {
    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Dual Land", function () {
    let processor: DualLandProcessor = new DualLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Bounce Land", function () {
    let processor: BounceLandProcessor = new BounceLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });
  it("0 Pathway Land", function () {
    let processor: PathwayLandProcessor = new PathwayLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
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
