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

describe("5 Color", function () {
  let colors: UserColorSelection;

  beforeEach(function () {
    colors = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);
    colors.add(Color.White);
    colors.add(Color.Blue);
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

  it("10 Basic Lands", function () {
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

  it("1 The World Tree", function () {
    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("The World Tree"), 1);
  });

  it("10 Dual Land", function () {
    let processor: DualLandProcessor = new DualLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("Badlands"), 1);
    assert.strictEqual(actual.getAmount("Taiga"), 1);
    assert.strictEqual(actual.getAmount("Bayou"), 1);
    assert.strictEqual(actual.getAmount("Tundra"), 1);

    assert.strictEqual(actual.getAmount("Volcanic Island"), 1);
    assert.strictEqual(actual.getAmount("Underground Sea"), 1);
    assert.strictEqual(actual.getAmount("Savannah"), 1);
    assert.strictEqual(actual.getAmount("Scrubland"), 1);
    assert.strictEqual(actual.getAmount("Plateau"), 1);
    assert.strictEqual(actual.getAmount("Tropical Island"), 1);
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

  it("0 Utility Land", function () {
    let processor: UtilityLandProcessor = new UtilityLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Triome Land", function () {
    let processor: TriomeProcessor = new TriomeProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("38 Lands Total", function () {
    assert.strictEqual(calculateTotalAmountOfLands(colors), 38);
  });
});

// Basics	10
// Fetch lands 	10
// Prismatic Vista	1
// Dual 	10
// Command Tower	1
// the world tree	1
// rainbow	5
//  Reflecting Pool
// Exotic Orchard
// City of brass
// Mana confluence
// Plaza of Heroes
