const LandsRepository = require('../LandsRepository');

const COLORS_TO_SCRY_LAND = {
  whiteblue: 'Temple of Enlightenment',
  blueblack: 'Temple of Deceit',
  blackred: 'Temple of Malice',
  redgreen: 'Temple of Abandon',
  greenwhite: 'Temple of Plenty',
  whiteblack: 'Temple of Silence',
  bluered: 'Temple of Epiphany',
  blackgreen: 'Temple of Malady',
  redwhite: 'Temple of Triumph',
  greenblue: 'Temple of Mystery',
};

function getScryLands(colorManager) {
  let landsRepository = new LandsRepository('Scry Land');
  if (colorManager.qtdColor() == 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_SCRY_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getScryLands = getScryLands;
