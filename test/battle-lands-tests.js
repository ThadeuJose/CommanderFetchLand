const getBattle = require('../app/js/lands-code/battle-and-fast-lands').getBattleLands_NEW;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Dual Lands', function() {
  it('2 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');

    let expected = new LandsRepository('Battle or Fast Land');
    expected.addLand(1, 'Spirebluff Canal');

    assert.deepEqual(getBattle(colorManagerTest),expected);
  });

  it('4 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('black');

    let expected = new LandsRepository('Fast Land');
    expected.addLand(1, 'Prairie Stream');
    expected.addLand(1, 'Sunken Hollow');

    assert.deepEqual(getBattle(colorManagerTest),expected);
  });

  it('Any other color should be empty', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('green');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('white');

    let expected = new LandsRepository('Battle or Fast Land');

    assert.deepEqual(getBattle(colorManagerTest),expected);
  });


});

//2 4 5
