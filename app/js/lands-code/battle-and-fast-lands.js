const LandsRepository = require('../LandsRepository');

const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const COLORS_TO_BATTLE_LAND = {
  whiteblue: 'Prairie Stream',
  blueblack: 'Sunken Hollow',
  blackred: 'Smoldering Marsh',
  redgreen: 'Cinder Glade',
  greenwhite: 'Canopy Vista ',
};

const COLORS_TO_BATTLE_AND_FAST_LAND = {
  whiteblue: 'Prairie Stream',
  blueblack: 'Sunken Hollow',
  blackred: 'Smoldering Marsh',
  redgreen: 'Cinder Glade',
  greenwhite: 'Canopy Vista ',
  whiteblack: 'Concealed Courtyard',
  bluered: 'Spirebluff Canal',
  blackgreen: 'Blooming Marsh',
  redwhite: 'Inspiring Vantage',
  greenblue: 'Botanical Sanctum',
};

function getBattleLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';
  if (qtdColor === 4) {
    resp += '//Fast Land: 2\n';
    const colorPairs = getColorPair(colorArr);
    let quantLand = 0;
    for (var c of colorPairs) {
      if(COLORS_TO_BATTLE_LAND[c]){
        resp += `1 ${COLORS_TO_BATTLE_LAND[c]}\n`;
        quantLand++;
      }
      if(quantLand == 2){
        break;
      }
    }
  } else if (qtdColor === 2) {
    resp += '//Battle or Fast Land: 1\n';
    const color = validPair(colorArr[0],colorArr[1]);
    resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[color]}\n`;
  }
  return resp;
}

function getBattleLands_NEW(colorManager) {
  let landsRepository = new LandsRepository('Battle or Fast Land');
  if (colorManager.qtdColor() === 4) {
    landsRepository = new LandsRepository('Fast Land');
    const maxQtdLands = 2;
    const colorPairs = colorManager.getAllColorPairs();
    for (var colorPair of colorPairs) {
      if(COLORS_TO_BATTLE_LAND[colorPair]){
        landsRepository.addLand(1, COLORS_TO_BATTLE_LAND[colorPair]);
      }
      if(landsRepository.qtdLands() == maxQtdLands){
        return landsRepository;
      }
    }
  }
  if (colorManager.qtdColor() === 2) {
    landsRepository = new LandsRepository('Battle or Fast Land');
    const colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, COLORS_TO_BATTLE_AND_FAST_LAND[colorPair]);
    return landsRepository;
  }
  return landsRepository;
}

module.exports.getBattleLands = getBattleLands;
module.exports.getBattleLands_NEW = getBattleLands_NEW;
