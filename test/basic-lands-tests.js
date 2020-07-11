const getBasic = require('../app/js/lands-code/basic-lands').getBasicLands_NEW;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Basic Lands', function() {
  it('5 Color - Return correct quantity', function() {
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



  it('4 Color - Return correct quantity', function() {
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

    colorManagerTest = new ColorManager();
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('green');

    expected = new LandsRepository('Basic Lands');
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

      let expected = 38;

      assert.equal(getBasic(colorManagerTest).qtdLands(),expected);

    });
  });



});
