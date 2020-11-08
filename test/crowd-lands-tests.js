const getCrowd = require('../app/js/lands-code/crowd-lands').getCrowdLands;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Crowd Lands', function() {
  it('2 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');

    let expected = new LandsRepository('Crowd Lands');
    expected.addLand(1, 'Training Center');

    assert.deepEqual(getCrowd(colorManagerTest),expected);
  });
});
