const getShock = require('../app/js/lands-code/shock-lands').getShockLands_NEW;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Shock Lands', function() {

  it('3 Color', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('green');


    let expected = new LandsRepository('Shock Land');
    expected.addLand(1,'Breeding Pool');
    expected.addLand(1,'Steam Vents');
    expected.addLand(1,'Stomping Ground');


    assert.deepEqual(getShock(colorManagerTest),expected);
  });

  it('Test if boundaries came empty', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');

    let expected = new LandsRepository('Shock Land');

    assert.deepEqual(getShock(colorManagerTest),expected);

    colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('green');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('white');

    expected = new LandsRepository('Shock Land');

    assert.deepEqual(getShock(colorManagerTest),expected);
  });


});
