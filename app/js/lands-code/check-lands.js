const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const COLORS_TO_CHECK_LAND = {
  whiteblue: 'Glacial Fortress',
  blueblack: 'Drowned Catacomb',
  blackred: 'Dragonskull Summit',
  redgreen: 'Rootbound Crag',
  greenwhite: 'Sunpetal Grove',
  whiteblack: 'Isolated Chapel',
  bluered: 'Sulfur Falls',
  blackgreen: 'Woodland Cemetery',
  redwhite: 'Clifftop Retreat',
  greenblue: 'Hinterland Harbor',
};

function getCheckLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor === 2) {
    const color = validPair(colorArr[0],colorArr[1]);
    return `//Check Land: 1\n1 ${COLORS_TO_CHECK_LAND[color]}\n`;
  }
  return '';
}

module.exports = getCheckLands;
