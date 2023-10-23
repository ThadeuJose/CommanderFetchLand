import { assert } from "chai";
import { Color } from "../app/js/Color";
import UserColorSelection from "../app/js/UserColorSelection";
import CrowdLandProcessor from "../app/js/lands-code/CrowdLandProcessor";
import FilterLandProcessor from "../app/js/lands-code/FilterLandProcessor";
import FetchLandProcessor from "../app/js/lands-code/FetchLandProcessor";
import CheckLandProcessor from "../app/js/lands-code/CheckLandProcessor";
import BasicLandProcessor from "../app/js/lands-code/BasicLandProcessor";

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
});

// Fetch lands 	8 X
// Prismatic Vista	1 X
// Command Tower	1
// Mana Confluence 1
// Utility	5
// Basics	10 X
// Dual 	1
// Shock 	1
// crowd 	1 X
// slow	1
// pain	1
// check	1 X
// filter	1 X
// horizon 	1
// bounce	1
// 	35
