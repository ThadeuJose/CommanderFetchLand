import Category from "../app/js/Category";
import { it, describe } from "mocha";
import { assert } from "chai";
import UserColorSelection from "../app/js/UserColorSelection";
import { Color } from "../app/js/Color";

describe("UserColorSelection", function () {
  it("Should have 0 elements", function () {
    let color: UserColorSelection = new UserColorSelection();
    const arr = color.getAllColor();
    assert.equal(arr.length, 0);
  });
  it("Should have 1 elements", function () {
    let color: UserColorSelection = new UserColorSelection();
    color.add(Color.Red);
    assert.isTrue(color.has(Color.Red));
  });
  it("Should not have Black color", function () {
    let color: UserColorSelection = new UserColorSelection();
    color.add(Color.Red);
    assert.isFalse(color.has(Color.Black));
  });
});
