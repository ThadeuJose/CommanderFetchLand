const LandsRepository = require('../LandsRepository');

const COLORS_TO_FETCH_LAND = {
  whiteblue: 'Flooded Strand',
  blueblack: 'Polluted Delta',
  blackred: 'Bloodstained Mire',
  redgreen: 'Wooded Foothills',
  greenwhite: 'Windswept Heath',
  whiteblack: 'Marsh Flats',
  bluered: 'Scalding Tarn',
  blackgreen: 'Verdant Catacombs',
  redwhite: 'Arid Mesa',
  greenblue: 'Misty Rainforest',
};

function getFetchLands(colorManager) {
  if (colorManager.qtdColor() === 5) {
    let landsRepository = new LandsRepository('Fetch Land');
    for (land of Object.values(COLORS_TO_FETCH_LAND)) {
      landsRepository.addLand(1,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 4) {
    let landsRepository = new LandsRepository('Fetch Land');
    let excludedColor = colorManager.getAllColors().filter(value => !colorManager.colorArr.includes(value));
    let AllValidColorsPairs = Object.keys(COLORS_TO_FETCH_LAND).filter(value => value.indexOf(excludedColor) === -1);
    for (colorPair of AllValidColorsPairs) {
        landsRepository.addLand(1, COLORS_TO_FETCH_LAND[colorPair]);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 3) {
    let landsRepository = new LandsRepository('Fetch Land');
    for (colorPair of colorManager.getAllColorPairs()) {
      landsRepository.addLand(1,COLORS_TO_FETCH_LAND[colorPair]);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 2) {
    let landsRepository = new LandsRepository('Fetch Land');
    let colors = colorManager.colorArr;
    let AllValidColorPairs = Object.keys(COLORS_TO_FETCH_LAND).filter(
      value => value.indexOf(colors[0]) !== -1 || value.indexOf(colors[1]) !== -1);
    for (colorPair of AllValidColorPairs) {
      landsRepository.addLand(1,COLORS_TO_FETCH_LAND[colorPair]);
    }
    return landsRepository;
  }
}

module.exports.getFetchLands = getFetchLands;
