const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const LandsRepository = require('../LandsRepository');

const COLORS_TO_DUAL_LAND = {
  whiteblue: 'Tundra',
  blueblack: 'Underground Sea',
  blackred: 'Badlands',
  redgreen: 'Taiga',
  greenwhite: 'Savannah',
  whiteblack: 'Scrubland',
  bluered: 'Volcanic Island',
  blackgreen: 'Bayou',
  redwhite: 'Plateau',
  greenblue: 'Tropical Island',
};

function getDuals(colorArr) {
  let qtdColor = colorArr.length;
  if (qtdColor == 5) {
    let resp ='//Dual Land: 10\n';
    for(land of Object.values(COLORS_TO_DUAL_LAND)){
      resp+= `1 ${land}\n`
    }
    return resp;
  }
  if (qtdColor == 4) {
    let resp ='//Dual Land: 4\n';
    let landSet = new Set()
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_DUAL_LAND[cp])
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }
    return resp;
  }
  if (qtdColor == 3) {
    let resp = '//Dual Land: 3\n'
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      resp+= `1 ${COLORS_TO_DUAL_LAND[cp]}\n`;
    }
    return resp;
  }
  if (qtdColor == 2) {
    let color = validPair(colorArr[0],colorArr[1]);
    return `//Dual Land: 1\n1 ${COLORS_TO_DUAL_LAND[color]}\n`;
  }
}



function getDualLands_NEW(colorManager) {
  if (colorManager.qtdColor() > 1) {
    let landsRepository = new LandsRepository('Dual Land');
    if (colorManager.qtdColor() === 4) {
      for (pair of colorManager.getAllColorPairs()) {
        landsRepository.addLand(1, COLORS_TO_DUAL_LAND[pair]);
        if (landsRepository.qtdLands() === 4) {
          return landsRepository;
        }
      }
    }

    for (pair of colorManager.getAllColorPairs()) {
      landsRepository.addLand(1, COLORS_TO_DUAL_LAND[pair]);
    }
    return landsRepository;
  }

}

module.exports.getDualLands = getDuals;
module.exports.getDualLands_NEW = getDualLands_NEW;
