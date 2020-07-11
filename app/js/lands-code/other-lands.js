const LandsRepository = require('../LandsRepository');

const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

function getOtherLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';
  if (qtdColor == 3) {
    resp += '//Other Lands: 3 (Scry lands)\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var color of colorPairs) {
      resp += `1 ${COLORS_TO_SCRY_LAND[color]}\n`;
    }
  }
  return resp;
}

function getOtherLands_NEW(colorManager) {
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
module.exports.getOtherLands_NEW = getOtherLands_NEW;