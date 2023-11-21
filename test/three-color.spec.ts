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

describe("3 Color", function () {
  it("9 Fetch Lands", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

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
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Prismatic Vista"), 1);
  });

  it("12 Basic Lands", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: BasicLandProcessor = new BasicLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.getAmount("Mountain"), 4);
    assert.strictEqual(actual.getAmount("Forest"), 4);
    assert.strictEqual(actual.getAmount("Swamp"), 4);
  });

  it("0 Check Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: CheckLandProcessor = new CheckLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("3 Crowd Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: CrowdLandProcessor = new CrowdLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("Luxury Suite"), 1);
    assert.strictEqual(actual.getAmount("Spire Garden"), 1);
    assert.strictEqual(actual.getAmount("Undergrowth Stadium"), 1);
  });

  it("0 Filter Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: FilterLandProcessor = new FilterLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("3 Shock Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: ShockLandProcessor = new ShockLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("Blood Crypt"), 1);
    assert.strictEqual(actual.getAmount("Stomping Ground"), 1);
    assert.strictEqual(actual.getAmount("Overgrown Tomb"), 1);
  });

  it("0 Pain Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: PainLandProcessor = new PainLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Slow Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: SlowLandProcessor = new SlowLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("1 Horizon Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: HorizonLandProcessor = new HorizonLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("City of Brass"), 1);
  });

  it("1 Command Tower", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("Command Tower"), 1);
  });

  it("1 Mana Confluence", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("Mana Confluence"), 1);
  });

  it("1 Exotic Orchard", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("Exotic Orchard"), 1);
  });

  it("1 Reflecting Pool", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: RainbowLandProcessor = new RainbowLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("Reflecting Pool"), 1);
  });

  it("3 Dual Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: DualLandProcessor = new DualLandProcessor();

    const actual = processor.process(colors);

    assert.strictEqual(actual.getAmount("Badlands"), 1);
    assert.strictEqual(actual.getAmount("Taiga"), 1);
    assert.strictEqual(actual.getAmount("Bayou"), 1);
  });

  it("0 Bounce Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: BounceLandProcessor = new BounceLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Pathway Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: PathwayLandProcessor = new PathwayLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("0 Utility Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

    let processor: UtilityLandProcessor = new UtilityLandProcessor();

    const actual = processor.process(colors);
    assert.strictEqual(actual.size(), 0);
  });

  it("1 Triome Land", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);

    let processor: UtilityLandProcessor = new UtilityLandProcessor();

    const actual = processor.process(colors);
    assert.fail("Not Implemented");
  });

  it("38 Lands Total", function () {
    let colors: UserColorSelection = new UserColorSelection();
    colors.add(Color.Red);
    colors.add(Color.Green);
    colors.add(Color.Black);

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
      new UtilityLandProcessor(),
    ];

    const amount: number = ProcessorArray.reduce((sum, current) => {
      return sum + current.process(colors).size();
    }, 0);

    assert.strictEqual(amount, 38);
  });
});

// Basics	12
// Fetch lands 	9
// Prismatic Vista	1
// Command Tower	1
// Dual 	3
// Shock 	3
// Crowd 	3
// horizon	1
// rainbow	3
// 	Reflecting Pool
// 	Exotic Orchard
// 	Mana Confluence
//  City of brass
// Triome 1
// 	37
