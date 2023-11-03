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

describe("2 Color", function () {
  it("7 Fetch Lands", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("Arid Mesa"), 1);
    assert.strictEqual(actual.getAmount("Bloodstained Mire"), 1);
    assert.strictEqual(actual.getAmount("Flooded Strand"), 1);
    assert.strictEqual(actual.getAmount("Misty Rainforest"), 1);
    assert.strictEqual(actual.getAmount("Polluted Delta"), 1);
    assert.strictEqual(actual.getAmount("Scalding Tarn"), 1);
    assert.strictEqual(actual.getAmount("Wooded Foothills"), 1);
  });

  it("1 Prismatic Vista", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("Prismatic Vista"), 1);
  });

  it("10 Basic Lands", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: BasicLandProcessor = new BasicLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("Island"), 5);
    assert.strictEqual(actual.getAmount("Mountain"), 5);
  });

  it("1 Check Land", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: CheckLandProcessor = new CheckLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("Sulfur Falls"), 1);
  });

  it("1 Crowd Land", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: CrowdLandProcessor = new CrowdLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("Training Center"), 1);
  });

  it("1 Filter Land", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: FilterLandProcessor = new FilterLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("Cascade Bluffs"), 1);
  });
  it("1 Shock Land", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: ShockLandProcessor = new ShockLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("Steam Vents"), 1);
  });
  it("1 Pain Land", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: PainLandProcessor = new PainLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("Shivan Reef"), 1);
  });
  it("1 Slow Land", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: SlowLandProcessor = new SlowLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("Stormcarved Coast"), 1);
  });
  it("1 Horizon Land", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: SlowLandProcessor = new SlowLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.getAmount("City of Brass"), 1);
  });
});

// Fetch lands 	8 X
// Prismatic Vista	1 X
// Command Tower	1
// Mana Confluence 1
// Utility	8
// Basics	10 X
// Dual 	1
// Shock 	1 X
// crowd 	1 X
// slow	1 X
// pain	1 X
// check	1 X
// filter	1 X
// horizon 	1 or City of Brass or Mount Doom X
// bounce	1
// 	38 make a size test
