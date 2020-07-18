const getAny = require('../app/js/lands-code/any-color-lands').getAnyColorLand;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Any Color Lands', function() {
  it('1 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');

    let expected = new LandsRepository('Any Color Lands');

    assert.deepEqual(getAny(colorManagerTest),expected);
  });

  it('2 Color - Black Red', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('black');

    let expected = new LandsRepository('Any Color Lands');
    expected.addLand(1, 'Command Tower');
    expected.addLand(1, 'Mana Confluence');
    expected.addLand(1, 'Reflecting Pool');
    expected.addLand(1, 'City of Brass');

    assert.deepEqual(getAny(colorManagerTest),expected);
  });

  it('2 Color - White Black', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('black');

    let expected = new LandsRepository('Any Color Lands');
    expected.addLand(1, 'Command Tower');
    expected.addLand(1, 'Mana Confluence');
    expected.addLand(1, 'Reflecting Pool');
    expected.addLand(1, 'Silent Clearing');

    assert.deepEqual(getAny(colorManagerTest),expected);
  });

  it('4 Color - White Blue Black Red', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('red');

    let expected = new LandsRepository('Any Color Lands');
    expected.addLand(1, 'Command Tower');
    expected.addLand(1, 'Mana Confluence');
    expected.addLand(1, 'Silent Clearing');

    assert.deepEqual(getAny(colorManagerTest),expected);
  });

  it('5 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('green');

    let expected = new LandsRepository('Any Color Lands');
    expected.addLand(1, 'Command Tower');
    expected.addLand(1, 'Mana Confluence');
    expected.addLand(1, 'Reflecting Pool');
    expected.addLand(1, 'Waterlogged Grove');

    assert.deepEqual(getAny(colorManagerTest),expected);
  });


});
