const LandsRepository = require('../LandsRepository');

const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const COLORS_TO_BOUNCE_LAND = {
  whiteblue: 'Azorius Chancery',
  blueblack: 'Dimir Aqueduct',
  blackred: 'Rakdos Carnarium',
  redgreen: 'Gruul Turf',
  greenwhite: 'Selesnya Sanctuary',
  whiteblack: 'Orzhov Basilica',
  bluered: 'Izzet Boilerworks',
  blackgreen: 'Golgari Rot Farm',
  redwhite: 'Boros Garrison',
  greenblue: 'Simic Growth Chamber',
};

function getBounceLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor === 2) {
    const color = validPair(colorArr[0],colorArr[1]);
    return `//Bounce Land: 1\n1 ${COLORS_TO_BOUNCE_LAND[color]}\n`;
  }
  return '';
}

function getBounceLands_NEW(colorManager) {
  let landsRepository = new LandsRepository('Bounce Land');
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_BOUNCE_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getBounceLands = getBounceLands;
module.exports.getBounceLands_NEW = getBounceLands_NEW;
