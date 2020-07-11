const getPain = require('../app/js/lands-code/pain-lands').getPainLands_NEW;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

// TODO: Refazer isso direito
describe('Pain Lands', function() {

  it('3 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('green');

    let expected = 3;

    assert.equal(getPain(colorManagerTest).qtdLands(),expected);
  });




});
