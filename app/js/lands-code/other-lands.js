const LandsRepository = require('../LandsRepository');

const COLORS_TO_BATTLE_LAND = {
  whiteblue: 'Prairie Stream',
  blueblack: 'Sunken Hollow',
  blackred: 'Smoldering Marsh',
  redgreen: 'Cinder Glade',
  greenwhite: 'Canopy Vista ',
};

const COLORS_TO_CHECK_LAND = {
  whiteblack: 'Isolated Chapel',
  bluered: 'Sulfur Falls',
  blackgreen: 'Woodland Cemetery',
  redwhite: 'Clifftop Retreat',
  greenblue: 'Hinterland Harbor',
};

function getOtherLands(colorManager) {
  const landsRepository = new LandsRepository('Other Lands (Battle and Check Lands)');
  if (colorManager.qtdColor() === 3) {
    const colorPairs = colorManager.getAllColorPairs();
    colorPairs.forEach((colorPair) => {
      if (COLORS_TO_BATTLE_LAND[colorPair]) {
        landsRepository.addLand(1, COLORS_TO_BATTLE_LAND[colorPair]);
      }
      if (COLORS_TO_CHECK_LAND[colorPair]) {
        landsRepository.addLand(1, COLORS_TO_CHECK_LAND[colorPair]);
      }
    });
  }

  return landsRepository;
}

module.exports.getOtherLands = getOtherLands;
