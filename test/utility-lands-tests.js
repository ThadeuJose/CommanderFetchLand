const { getUtilityLand } = require('../app/js/lands-code/utility-lands');
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Utility Lands', function() {

  it('1 Color - Blue', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('blue');

    let expected = new LandsRepository('Utility Lands');
    expected.addLand(1, 'Arch of Orazca');
    expected.addLand(1, 'Dust Bowl');
    expected.addLand(1, 'Strip Mine');
    expected.addLand(1, 'Scavenger Grounds');
    expected.addLand(1, 'Myriad Landscape');
    expected.addLand(1, "Rogue's Passage");
    expected.addLand(1, 'Nykthos, Shrine to Nyx');
    expected.addLand(1, 'Reliquary Tower');
    expected.addLand(1, 'Blast Zone');
    expected.addLand(1, 'Winding Canyons');
    expected.addLand(1, 'Mirrorpool');
    expected.addLand(1, 'Mystic Sanctuary');
    expected.addLand(1, 'Lonely Sandbar');
    expected.addLand(1, 'Remote Isle');
    expected.addLand(1, 'Desert of The Mindful');
    expected.addLand(1, 'Castle Vantress');

    assert.deepEqual(getUtilityLand(colorManagerTest),expected);
  });

});
