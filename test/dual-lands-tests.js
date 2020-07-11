const getDual = require('../app/js/lands-code/dual-lands').getDualLands_NEW;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Dual Lands', function() {
  it('2 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');

    let expected = new LandsRepository('Dual Land');
    expected.addLand(1, 'Volcanic Island');

    assert.deepEqual(getDual(colorManagerTest),expected);
  });

  it('3 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('green');


    let expected = new LandsRepository('Dual Land');
    expected.addLand(1, 'Taiga');
    expected.addLand(1, 'Tropical Island');
    expected.addLand(1, 'Volcanic Island');

    assert.deepEqual(getDual(colorManagerTest),expected);
  });

  it('4 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('green');
    colorManagerTest.addColor('black');

    let expected = new LandsRepository('Dual Land');
    expected.addLand(1, 'Volcanic Island');
    expected.addLand(1, 'Tropical Island');
    expected.addLand(1, 'Underground Sea');
    expected.addLand(1, 'Badlands');

    assert.deepEqual(getDual(colorManagerTest),expected);
  });

  it('5 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('green');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('white');

    let expected = new LandsRepository('Dual Land');
    expected.addLand(1, 'Volcanic Island');
    expected.addLand(1, 'Tundra');
    expected.addLand(1, 'Underground Sea');
    expected.addLand(1, 'Badlands');
    expected.addLand(1, 'Taiga');
    expected.addLand(1, 'Savannah');
    expected.addLand(1, 'Scrubland');
    expected.addLand(1, 'Volcanic Island');
    expected.addLand(1, 'Bayou');
    expected.addLand(1, 'Plateau');
    expected.addLand(1, 'Tropical Island');

    assert.deepEqual(getDual(colorManagerTest),expected);
  });


});
