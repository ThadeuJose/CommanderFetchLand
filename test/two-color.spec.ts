import { assert } from "chai";
import { Color } from "../app/js/Color";
import UserColorSelection from "../app/js/UserColorSelection";
import CrowdLandProcessor from "../app/js/lands-code/CrowdLandProcessor";
import FilterLandProcessor from "../app/js/lands-code/FilterLandProcessor";
import FetchLandProcessor from "../app/js/lands-code/FetchLandProcessor";

describe("2 Color", function () {
  it("7 Fetch Lands", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.size(), 8);
    assert.isTrue(actual.has("Prismatic Vista"));
  });

  it("1 Prismatic Vista", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: FetchLandProcessor = new FetchLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.size(), 8);
    assert.isTrue(actual.has("Prismatic Vista"));
  });

  it("1 Crowd Land", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: CrowdLandProcessor = new CrowdLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.size(), 1);
    assert.isTrue(actual.has("Training Center"));
  });

  it("1 Filter Land", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: FilterLandProcessor = new FilterLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.size(), 1);
    assert.isTrue(actual.has("Cascade Bluffs"));
  });
});

// Fetch lands 	8 X
// Prismatic Vista	1 X
// Command Tower	1
// Mana Confluence 1
// Utility	5
// Basics	10
// Dual 	1
// Shock 	1
// crowd 	1 X
// slow	1
// pain	1
// check	1
// filter	1 X
// horizon 	1
// bounce	1
// 	35
