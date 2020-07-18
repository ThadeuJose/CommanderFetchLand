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

function getOtherLands(colorManager) {
  let landsRepository = new LandsRepository('Other Lands(Scry lands)');
  if (colorManager.qtdColor() == 3) {
    let colorPairs = colorManager.getAllColorPairs();
    for (var colorPair of colorPairs) {
      landsRepository.addLand(1,COLORS_TO_SCRY_LAND[colorPair]);
    }
  }
  return landsRepository;
}

module.exports.getOtherLands = getOtherLands;
