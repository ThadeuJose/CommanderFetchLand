import Category from "../app/js/Category";
import { it, describe } from "mocha";
import { assert } from "chai";

describe("Category", function () {
  it("Should start empty", function () {
    let landsRepository = new Category("Title");
    assert.isTrue(landsRepository.isEmpty());
  });

  it("All land should be unique", function () {
    let landsRepository = new Category("Title");
    landsRepository.add(1, "Land 1");
    landsRepository.add(2, "Land 2");
    landsRepository.add(2, "Land 3");
    landsRepository.add(2, "Land 3");

    assert.equal(landsRepository.size(), 5);
  });
});
