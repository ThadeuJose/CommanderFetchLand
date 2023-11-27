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

describe("4 Color", function () {
  let colors: UserColorSelection;

  beforeEach(function () {
    colors = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);
    colors.add(Color.White);
  });

  it("10 Fetch Lands", function () {
    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Arid Mesa"), 1);
    assert.strictEqual(actual.getAmount("Scalding Tarn"), 1);
    assert.strictEqual(actual.getAmount("Polluted Delta"), 1);
    assert.strictEqual(actual.getAmount("Bloodstained Mire"), 1);
    assert.strictEqual(actual.getAmount("Wooded Foothills"), 1);
    assert.strictEqual(actual.getAmount("Windswept Heath"), 1);
    assert.strictEqual(actual.getAmount("Marsh Flats"), 1);
    assert.strictEqual(actual.getAmount("Verdant Catacombs"), 1);
    assert.strictEqual(actual.getAmount("Arid Mesa"), 1);
    assert.strictEqual(actual.getAmount("Misty Rainforest"), 1);
  });

  it("1 Prismatic Vista", function () {
    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Prismatic Vista"), 1);
  });

  it("8 Basic Lands", function () {
    let processor: BasicLandProcessor = new BasicLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Mountain"), 2);
    assert.strictEqual(actual.getAmount("Forest"), 2);
    assert.strictEqual(actual.getAmount("Swamp"), 2);
    assert.strictEqual(actual.getAmount("Mountain"), 2);
    assert.strictEqual(actual.getAmount("Plains"), 2);
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

  it("3 Shock Land", function () {
    let processor: ShockLandProcessor = new ShockLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Stomping Ground"), 1);
    assert.strictEqual(actual.getAmount("Overgrown Tomb"), 1);
    assert.strictEqual(actual.getAmount("Temple Garden"), 1);
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

  it("1 Exotic Orchard", function () {
    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Exotic Orchard"), 1);
  });

  it("1 Reflecting Pool", function () {
    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Reflecting Pool"), 1);
  });

  it("1 Plaza of Heroes", function () {
    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Plaza of Heroes"), 1);
  });

  it("6 Dual Land", function () {
    let processor: DualLandProcessor = new DualLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("Badlands"), 1);
    assert.strictEqual(actual.getAmount("Taiga"), 1);
    assert.strictEqual(actual.getAmount("Bayou"), 1);
    assert.strictEqual(actual.getAmount("Tundra"), 1);
    assert.strictEqual(actual.getAmount("Savannah"), 1);
    assert.strictEqual(actual.getAmount("Scrubland"), 1);
    assert.strictEqual(actual.getAmount("Plateau"), 1);
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

  it("3 Utility Land", function () {
    let processor: UtilityLandProcessor = new UtilityLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 3);
  });

  it("2 Triome Land", function () {
    let processor: TriomeProcessor = new TriomeProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Ziatora's Proving Ground"), 1);
    assert.strictEqual(actual.getAmount("Indatha Triome"), 1);
  });

  it("38 Lands Total", function () {
    assert.strictEqual(calculateTotalAmountOfLands(colors), 38);
  });
});

// Basics	8
// Triome	2
// abc bcd
// Fetch lands 	10
// Prismatic Vista	1
// Dual 	6
//Remove the color who doesnot show
// Command Tower	1
// rainbow	4
// Shock	3
// Let's say your colors are A, B, C, and D. You want to create three pairs from these colors.

// Pair 1: AB
// Pair 2: AC
// Pair 3: AD

// This way, you've used each color once with each of the other colors to form three distinct pairs.
// Utility	3
// 38
