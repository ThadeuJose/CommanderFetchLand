const getFetchs = require('../app/js/lands-code/fetch-lands').getFetchLands;
const getDuals = require('../app/js/lands-code/dual-lands').getDualLands;
const getAnyColor = require('../app/js/lands-code/any-color-lands').getAnyColorLand;
const getBasic = require('../app/js/lands-code/basic-lands').getBasicLands;
const getBattle = require('../app/js/lands-code/battle-and-fast-lands').getBattleLands;


describe('Fetch Lands', function() {
  it('should return the right lands', function() {
    let expectedText = '//Fetch Land: 3\n1 Bloodstained Mire\n1 Wooded Foothills\n1 Verdant Catacombs\n';
    let colorArrTest = ['black', 'red', 'green']

    assert.equal(getFetchs(colorArrTest),expectedText);
  });
});

describe('Dual Lands', function() {
  it('should return the right 10 lands', function() {
    let expectedText = '//Dual Land: 10\n1 Tundra\n1 Underground Sea\n1 Badlands\n1 Taiga\n1 Savannah\n1 Scrubland\n1 Volcanic Island\n1 Bayou\n1 Plateau\n1 Tropical Island\n';
    let colorArrTest = ['white', 'blue', 'black', 'red', 'green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right BR lands', function() {
    let expectedText = '//Dual Land: 1\n1 Badlands\n';
    let colorArrTest = ['black', 'red'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right WUG lands', function() {
    let expectedText = '//Dual Land: 3\n1 Tundra\n1 Tropical Island\n1 Savannah\n';
    let colorArrTest = ['white', 'blue','green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right WRG lands', function() {
    let expectedText = '//Dual Land: 3\n1 Plateau\n1 Taiga\n1 Savannah\n';
    let colorArrTest = ['white','red','green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right WBG lands', function() {
    let expectedText = '//Dual Land: 3\n1 Scrubland\n1 Bayou\n1 Savannah\n';
    let colorArrTest = ['white','black','green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right WURG lands', function() {
    let expectedText = '//Dual Land: 4\n1 Tundra\n1 Volcanic Island\n1 Taiga\n1 Savannah\n';
    let colorArrTest = ['white','blue','red','green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

});


describe('Any Color Lands', function() {
  it('1 Color - Green', function() {
    let expectedText = '';
    let colorArrTest = ['green'];

    assert.equal(getAnyColor(colorArrTest),expectedText);
  });

  it('2 Color - Green White', function() {
    let expectedText = '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 Reflecting Pool\n1 Horizon Canopy\n';
    let colorArrTest = ['white', 'green'];

    assert.equal(getAnyColor(colorArrTest),expectedText);
  });

  it('3 Color - Black Red Green', function() {
    let expectedText = '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 Reflecting Pool\n1 Nurturing Peatland\n';
    let colorArrTest = ['black', 'red', 'green'];

    assert.equal(getAnyColor(colorArrTest),expectedText);
  });

  it('4 Color - White Black Red Green', function() {
    let expectedText = '//Any Color Lands: 3\n1 Command Tower\n1 Mana Confluence\n1 Silent Clearing\n';
    let colorArrTest = ['white', 'black', 'red', 'green'];

    assert.equal(getAnyColor(colorArrTest),expectedText);
  });

  it('5 Color', function() {
    let expectedText = '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 Reflecting Pool\n1 Waterlogged Grove\n';
    let colorArrTest = ['white', 'blue', 'black', 'red', 'green'];

    assert.equal(getAnyColor(colorArrTest),expectedText);
  });

});

describe('Basic Lands', function() {
  it('4 Color - White Blue Black Green', function() {
    let expectedText = '//Basic Lands: 9\n3 Forest\n3 Swamp\n2 Island\n1 Plains\n';
    let colorArrTest = ['white', 'blue', 'black', 'green'];

    assert.equal(getBasic(colorArrTest),expectedText);
  });

  it('4 Color - Blue Black Red Green', function() {
    let expectedText = '//Basic Lands: 9\n3 Forest\n3 Swamp\n2 Island\n1 Mountain\n';
    let colorArrTest = ['blue', 'black', 'red', 'green'];

    assert.equal(getBasic(colorArrTest),expectedText);
  });

});


describe('Battle Lands', function() {
  it('4 Color - White Black Red Green', function() {
    let expectedText = '//Fast Land: 2\n1 Smoldering Marsh\n1 Cinder Glade\n';
    let colorArrTest = ['white', 'black', 'red', 'green'];

    assert.equal(getBattle(colorArrTest),expectedText);
  });

  it('4 Color - Blue Black Red Green', function() {
    let expectedText = '//Fast Land: 2\n1 Sunken Hollow\n1 Smoldering Marsh\n';
    let colorArrTest = ['blue', 'black', 'red', 'green'];

    assert.equal(getBattle(colorArrTest),expectedText);
  });
});
