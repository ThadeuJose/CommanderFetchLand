const getBounce = require('../app/js/lands-code/bounce-lands').getBounceLands_NEW;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Man Lands', function() {
  it('2 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');

    let expected = new LandsRepository('Bounce Land');
    expected.addLand(1, 'Izzet Boilerworks');

    assert.deepEqual(getBounce(colorManagerTest),expected);
  });
});
