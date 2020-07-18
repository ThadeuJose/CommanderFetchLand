const LandsRepository = require('../LandsRepository');

const COLORS_TO_DUAL_LAND = {
  whiteblue: 'Tundra',
  blueblack: 'Underground Sea',
  blackred: 'Badlands',
  redgreen: 'Taiga',
  greenwhite: 'Savannah',
  whiteblack: 'Scrubland',
  bluered: 'Volcanic Island',
  blackgreen: 'Bayou',
  redwhite: 'Plateau',
  greenblue: 'Tropical Island',
};

function getDualLands(colorManager) {
  if (colorManager.qtdColor() > 1) {
    let landsRepository = new LandsRepository('Dual Land');
    if (colorManager.qtdColor() === 4) {
      for (pair of colorManager.getAllColorPairs()) {
        landsRepository.addLand(1, COLORS_TO_DUAL_LAND[pair]);
        if (landsRepository.qtdLands() === 4) {
          return landsRepository;
        }
      }
    }

    for (pair of colorManager.getAllColorPairs()) {
      landsRepository.addLand(1, COLORS_TO_DUAL_LAND[pair]);
    }
    return landsRepository;
  }

}

module.exports.getDualLands = getDualLands;
