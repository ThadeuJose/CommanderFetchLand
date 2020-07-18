const LandsRepository = require('../LandsRepository');

const COLORS_TO_FILTER_LAND_1 = {
  whiteblue: 'Mystic Gate',
  blueblack: 'Sunken Ruins',
  blackred: 'Graven Cairns',
  redgreen: 'Fire-lit Thicket',
  greenwhite: 'Wooded Bastion',
  whiteblack: 'Fetid Heath',
  bluered: 'Cascade Bluffs',
  blackgreen: 'Twilight Mire',
  redwhite: 'Rugged Prairie',
  greenblue: 'Flooded Grove',
};

const COLORS_TO_FILTER_LAND_2 = {
  whiteblue: 'Skycloud Expanse',
  blueblack: 'Darkwater Catacombs',
  blackred: 'Shadowblood Ridge',
  redgreen: 'Mossfire Valley',
  greenwhite: 'Sungrass Prairie',
};

function getFilterLands(colorManager) {
  let landsRepository = new LandsRepository('Filter Land');
  if (colorManager.qtdColor() === 4 || colorManager.qtdColor() === 3) {
    const maxQtdLands = 3;
    const colorPairs = colorManager.getAllColorPairs();
    for (var colorPair of colorPairs) {
      if(COLORS_TO_FILTER_LAND_1[colorPair]){
        landsRepository.addLand(1, COLORS_TO_FILTER_LAND_1[colorPair]);
      }
      if(landsRepository.qtdLands() == maxQtdLands){
        break;
      }
    }
  }
  if (colorManager.qtdColor() === 2) {
    const colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, COLORS_TO_FILTER_LAND_1[colorPair]);
    if (colorPair in COLORS_TO_FILTER_LAND_2){
      landsRepository.addLand(1, COLORS_TO_FILTER_LAND_2[colorPair]);
    } else {
      landsRepository.addLand(1, 'Unknown Shores');
    }
  }
  return landsRepository;
}

module.exports.getFilterLands = getFilterLands;
