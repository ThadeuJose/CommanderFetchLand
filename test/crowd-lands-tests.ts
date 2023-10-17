import { assert } from "chai";
import Category from "../app/js/Category";
import { Color } from "../app/js/Color";
import UserColorSelection from "../app/js/UserColorSelection";
import CrowdLandProcessor from "../app/js/lands-code/CrowdLandProcessor";

describe("Crowd Lands", function () {
  it("2 Color", function () {
    let colorManagerTest: UserColorSelection = new UserColorSelection();
    colorManagerTest.add(Color.Red);
    colorManagerTest.add(Color.Blue);

    let processor: CrowdLandProcessor = new CrowdLandProcessor();

    const actual = processor.process(colorManagerTest);
    assert.strictEqual(actual.size(), 1);
    assert.isTrue(actual.has("Training Center"));
  });
});
