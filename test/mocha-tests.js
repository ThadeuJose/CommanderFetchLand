const assert = require('assert');
const getFetchs = require('../app/js/lands-code/fetch-lands');
const getDuals = require('../app/js/lands-code/dual-lands');

describe('Fetch Lands', function() {
  it('should return the right lands', function() {
    let expectedText = '//Fetch Land: 3\n1 Bloodstained Mire\n1 Wooded Foothills\n1 Verdant Catacombs\n'
    let colorArrTest = ['black', 'red', 'green']

    assert.equal(getFetchs(colorArrTest),expectedText);
  });
});

describe('Dual Lands', function() {
  it('should return the right 10 lands', function() {
    let expectedText = '//Dual Land: 10\n1 Tundra\n1 Underground Sea\n1 Badlands\n1 Taiga\n1 Savannah\n1 Scrubland\n1 Volcanic Island\n1 Bayou\n1 Plateau\n1 Tropical Island\n'
    let colorArrTest = ['white', 'blue', 'black', 'red', 'green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right BR lands', function() {
    let expectedText = '//Dual Land: 1\n1 Badlands\n'
    let colorArrTest = ['black', 'red'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right WUG lands', function() {
    let expectedText = '//Dual Land: 3\n1 Tundra\n1 Tropical Island\n1 Savannah\n'
    let colorArrTest = ['white', 'blue','green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right WRG lands', function() {
    let expectedText = '//Dual Land: 3\n1 Plateau\n1 Taiga\n1 Savannah\n'
    let colorArrTest = ['white','red','green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right WBG lands', function() {
    let expectedText = '//Dual Land: 3\n1 Scrubland\n1 Bayou\n1 Savannah\n'
    let colorArrTest = ['white','black','green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

  it('should return the right WURG lands', function() {
    let expectedText = '//Dual Land: 4\n1 Tundra\n1 Volcanic Island\n1 Taiga\n1 Savannah\n'
    let colorArrTest = ['white','blue','red','green'];

    assert.equal(getDuals(colorArrTest),expectedText);
  });

});
