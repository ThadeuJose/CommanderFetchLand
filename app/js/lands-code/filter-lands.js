const LandsRepository = require('../LandsRepository');

const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const COLORS_TO_FILTER_LAND_1 = {
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

const COLORS_TO_FILTER_LAND_2 = {
  whiteblue: 'Skycloud Expanse',
  blueblack: 'Darkwater Catacombs',
  blackred: 'Shadowblood Ridge',
  redgreen: 'Mossfire Valley',
  greenwhite: 'Sungrass Prairie',
};

function getFilterLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';
  if (qtdColor == 4 || qtdColor == 3) {
    resp +='//Filter Land: 3\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var c of colorPairs) {
      resp += `1 ${COLORS_TO_FILTER_LAND_1[c]}\n`;
    }
  }else if (qtdColor == 2) {
    resp+='//Filter Land: 2\n';
    let colors = validPair(colorArr[0],colorArr[1]);
    resp+=  `1 ${COLORS_TO_FILTER_LAND_1[colors]}\n`;
    if (colors in COLORS_TO_FILTER_LAND_2){
      resp+= `1 ${COLORS_TO_FILTER_LAND_2[colors]}\n`;
    }else {
      resp+= '1 Unknown Shores\n'
    }
  }
  return resp;
}

function getFilterLands_NEW(colorManager) {
  let landsRepository = new LandsRepository('Filter Land');
  if (colorManager.qtdColor() === 4 || colorManager.qtdColor() === 3) {
    const maxQtdLands = 3;
    const colorPairs = colorManager.getAllColorPairs();
    for (var colorPair of colorPairs) {
      if(COLORS_TO_FILTER_LAND_1[colorPair]){
        landsRepository.addLand(1, COLORS_TO_FILTER_LAND_1[colorPair]);
      }
      if(landsRepository.qtdLands() == maxQtdLands){
        break;
      }
    }
  }
  if (colorManager.qtdColor() === 2) {
    const colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, COLORS_TO_FILTER_LAND_1[colorPair]);
    if (colorPair in COLORS_TO_FILTER_LAND_2){
      landsRepository.addLand(1, COLORS_TO_FILTER_LAND_2[colorPair]);
    } else {
      landsRepository.addLand(1, 'Unknown Shores');
    }
  }
  return landsRepository;
}

module.exports.getFilterLands = getFilterLands;
module.exports.getFilterLands_NEW = getFilterLands_NEW;
