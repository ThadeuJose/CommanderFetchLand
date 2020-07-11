const LandsRepository = require('../LandsRepository');

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

function getManLands_NEW(colorManager) {
  let landsRepository = new LandsRepository('Man Land');
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_MAN_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getManLands = getManLands;
module.exports.getManLands_NEW = getManLands_NEW;
