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

    let expected = new Category("Crowd Lands");
    expected.add(1, "Training Center");

    assert.isTrue(processor.process(colorManagerTest).equals(expected));
  });
});
