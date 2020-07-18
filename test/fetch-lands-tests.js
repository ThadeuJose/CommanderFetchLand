const getFetchs = require('../app/js/lands-code/fetch-lands').getFetchLands;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');


describe('Fetch Lands', function() {

  it('4 Color', function() {

    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('green');

    let expected = new LandsRepository('Fetch Land');
    expected.addLand(1, 'Arid Mesa');
    expected.addLand(1, 'Bloodstained Mire');
    expected.addLand(1, 'Marsh Flats');
    expected.addLand(1, 'Wooded Foothills');
    expected.addLand(1, 'Windswept Heath');
    expected.addLand(1, 'Verdant Catacombs');

    assert.deepEqual(getFetchs(colorManagerTest),expected);
  });

  it('3 Color', function() {

    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('green');

    let expected = new LandsRepository('Fetch Land');
    expected.addLand(1, 'Bloodstained Mire');
    expected.addLand(1, 'Wooded Foothills');
    expected.addLand(1, 'Verdant Catacombs');

    assert.deepEqual(getFetchs(colorManagerTest),expected);
  });

  it('2 Color', function() {

    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('green');

    let expected = new LandsRepository('Fetch Land');
    expected.addLand(1, 'Arid Mesa');
    expected.addLand(1, 'Bloodstained Mire');
    expected.addLand(1, 'Misty Rainforest');
    expected.addLand(1, 'Scalding Tarn');
    expected.addLand(1, 'Wooded Foothills');
    expected.addLand(1, 'Windswept Heath');
    expected.addLand(1, 'Verdant Catacombs');

    assert.deepEqual(getFetchs(colorManagerTest),expected);
  });


});
