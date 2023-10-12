const LandsRepository = require("../app/js/LandsRepository");
import { it, describe } from "mocha";
import { assert } from "chai";

describe("Lands Repository", function () {
  it("should be empty", function () {
    let landsRepository = new LandsRepository("Title");

    let expectedAnswer = false;
    let test = landsRepository.isEmpty();

    assert.equal(test, expectedAnswer);
  });

  it("is counting correct", function () {
    let landsRepository = new LandsRepository("Title");
    landsRepository.addLand(1, "Land 1");
    landsRepository.addLand(2, "Land 2");
    landsRepository.addLand(2, "Land 3");
    landsRepository.addLand(2, "Land 3");

    let expectedAnswer = 5;
    let test = landsRepository.qtdLands();

    assert.equal(test, expectedAnswer);
  });

  it("empty dictionary not been add", function () {
    let landsRepository1 = new LandsRepository("Title1");
    let landsRepository2 = new LandsRepository("Title2");
    landsRepository1.addDictLands(landsRepository2.getDictLands());

    let expectedAnswer = 0;
    let test = landsRepository1.qtdLands();

    assert.equal(test, expectedAnswer);

    landsRepository1.addLand(1, "Land 1");

    landsRepository1.addDictLands(landsRepository2.getDictLands());

    expectedAnswer = 1;
    test = landsRepository1.qtdLands();

    assert.equal(test, expectedAnswer);
  });
});
