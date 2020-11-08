const getBasic = require('../app/js/lands-code/basic-lands').getBasicLands;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');


function colorToQtd(color) {
  const qtdDict = {
    white: 21,
    blue: 22,
    black: 22,
    red:21,
    green:21
  }
  return qtdDict[color];
}

describe('Basic Lands', function() {
  it('5 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('green');

    let expected = new LandsRepository('Basic Lands');
    expected.addLand(3, 'Forest');
    expected.addLand(3, 'Swamp');
    expected.addLand(3, 'Island');
    expected.addLand(2, 'Mountain');
    expected.addLand(3, 'Plains');

    assert.deepEqual(getBasic(colorManagerTest),expected);
  });

  it('4 Color - White Blue Black Green', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('green');

    let expected = new LandsRepository('Basic Lands');
    expected.addLand(3, 'Forest');
    expected.addLand(3, 'Swamp');
    expected.addLand(2, 'Island');
    expected.addLand(1, 'Plains');

    assert.deepEqual(getBasic(colorManagerTest),expected);
  });

  it('4 Color - Blue Black Red Green', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('green');

    let expected = new LandsRepository('Basic Lands');
    expected.addLand(3, 'Forest');
    expected.addLand(3, 'Swamp');
    expected.addLand(2, 'Island');
    expected.addLand(1, 'Mountain');

    assert.deepEqual(getBasic(colorManagerTest),expected);

  });

  //1 color manabase
  ['white', 'blue', 'black', 'red', 'green'].forEach(function (color) {
    let title =color.charAt(0).toUpperCase() + color.slice(1);
    it('1 Color - ' + title + ' - Return correct quantity', function() {
      let colorManagerTest = new ColorManager();
      colorManagerTest.addColor(color);

      let expected = colorToQtd(color);

      assert.equal(getBasic(colorManagerTest).qtdLands(),expected);

    });
  });



});
