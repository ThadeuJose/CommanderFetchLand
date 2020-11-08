const getFilter = require('../app/js/lands-code/filter-lands').getFilterLands;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');


function colorArrayToAllPossibleLandArray(colorArray) {
  let landSet = new Set();

  colorArray.forEach((elem) => {
    let colorManager = new ColorManager();
    colorManager.addColor(elem[0]);
    colorManager.addColor(elem[1]);
    colorManager.addColor(elem[2]);
    colorManager.addColor(elem[3]);

    const arr = getFilter(colorManager).getAllLands2();

    landSet = new Set([ ...landSet, ...arr ]);
  });

  return Array.from(landSet);
}


describe('Filter Lands', function() {

  it('3 Color - Get first from high priorities filter lands', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('black');


    let expected = new LandsRepository('Filter Lands');
    expected.addLand(1, 'Skycloud Expanse');
    expected.addLand(1, 'Darkwater Catacombs');
    expected.addLand(1, 'Fetid Heath');


    assert.deepEqual(getFilter(colorManagerTest),expected);

  });

  it('4 Color - Get first from high priorities filter lands', function() {

    const colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('green');


    const expected = new LandsRepository('Filter Lands');
    expected.addLand(1, 'Skycloud Expanse');
    expected.addLand(1, 'Darkwater Catacombs');
    expected.addLand(1, 'Sungrass Prairie');


    assert.deepEqual(getFilter(colorManagerTest),expected);

  });

  it('4 Color - get all lands from high priorities filter lands', function() {

    const allColorCombinations =[
                          ['white','blue','black','red'],
                          ['blue','black','red','green'],
                          ['black','red','green','white'],
                          ['red','green','white','blue'],
                          ['green','white','blue','black']
                        ];

    const allPriorityLands = [
      'Skycloud Expanse',
      'Darkwater Catacombs',
      'Shadowblood Ridge',
      'Mossfire Valley',
      'Sungrass Prairie'
    ];

    const allPossibleLands = colorArrayToAllPossibleLandArray(allColorCombinations);

    let smallArrayIsInsideBigArray = (smallArray, bigArray) => smallArray.every(elem => bigArray.includes(elem));

    assert.ok(smallArrayIsInsideBigArray(allPossibleLands,allPriorityLands));

  });

});
