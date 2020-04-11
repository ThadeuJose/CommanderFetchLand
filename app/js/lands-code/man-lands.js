const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const COLORS_TO_MAN_LAND = {
  whiteblue: 'Celestial Colonnade',
  blueblack: 'Creeping Tar Pit',
  blackred: 'Lavaclaw Reaches',
  redgreen: 'Raging Ravine',
  greenwhite: 'Stirring Wildwood',
  whiteblack: 'Shambling Vent',
  bluered: 'Spirebluff Canal',
  blackgreen: 'Hissing Quagmire',
  redwhite: 'Needle Spires',
  greenblue: 'Lumbering Falls',
};

function getManLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`;
    return `//Man Land: 1\n1 ${COLORS_TO_MAN_LAND[color]}\n`;
  }
  return '';
}

module.exports = getManLands;
