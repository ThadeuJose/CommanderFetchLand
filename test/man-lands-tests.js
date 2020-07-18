const getMan = require('../app/js/lands-code/man-lands').getManLands;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Man Lands', function() {
  it('2 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('white');

    let expected = new LandsRepository('Man Land');
    expected.addLand(1, 'Needle Spires');

    assert.deepEqual(getMan(colorManagerTest),expected);
  });
});
