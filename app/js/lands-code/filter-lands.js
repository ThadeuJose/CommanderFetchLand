const LandsRepository = require('../LandsRepository');

const COLORS_TO_LOW_PRIORITY_FILTER_LANDS = {
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

const COLORS_TO_HIGH_PRIORITY_FILTER_LANDS = {
  whiteblue: 'Skycloud Expanse',
  blueblack: 'Darkwater Catacombs',
  blackred: 'Shadowblood Ridge',
  redgreen: 'Mossfire Valley',
  greenwhite: 'Sungrass Prairie',
};

function getFilterLands(colorManager) {
  const landsRepository = new LandsRepository('Filter Lands');
  let colorPairs = '';

  if (colorManager.qtdColor() === 4) {
    colorPairs = colorManager.getAllColorPairs();

    colorPairs
      .filter(item => COLORS_TO_HIGH_PRIORITY_FILTER_LANDS[item])
      .map(item => COLORS_TO_HIGH_PRIORITY_FILTER_LANDS[item])
      .forEach(item => landsRepository.addLand(1, item));
  }

  if (colorManager.qtdColor() === 3) {
    colorPairs = colorManager.getAllColorPairs();
    colorPairs
      .map((colorPair) => {
        if (COLORS_TO_HIGH_PRIORITY_FILTER_LANDS[colorPair]) {
          return COLORS_TO_HIGH_PRIORITY_FILTER_LANDS[colorPair];
        }
        return COLORS_TO_LOW_PRIORITY_FILTER_LANDS[colorPair];
      })
      .forEach(item => landsRepository.addLand(1, item));
  }

  if (colorManager.qtdColor() === 2) {
    const colorPair = colorManager.getAllColorPairs()[0];
    const defaultLand = 'Unknown Shores';
    landsRepository.addLand(1, COLORS_TO_LOW_PRIORITY_FILTER_LANDS[colorPair]);
    if (colorPair in COLORS_TO_HIGH_PRIORITY_FILTER_LANDS) {
      landsRepository.addLand(1, COLORS_TO_HIGH_PRIORITY_FILTER_LANDS[colorPair]);
    } else {
      landsRepository.addLand(1, defaultLand);
    }
  }

  return landsRepository;
}

module.exports.getFilterLands = getFilterLands;
