const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const COLORS_TO_PAIN_LAND = {
  whiteblue: 'Adarkar Wastes',
  blueblack: 'Underground River',
  blackred: 'Sulfurous Springs',
  redgreen: 'Karplusan Forest',
  greenwhite: 'Brushland ',
  whiteblack: 'Caves of Koilos',
  bluered: 'Shivan Reef',
  blackgreen: 'Llanowar Wastes',
  redwhite: 'Battlefield Forge',
  greenblue: 'Yavimaya Coast',
};

function getPainLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';
  if (qtdColor == 4 || qtdColor == 3) {
    resp = '//Pain Land: 3\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var c of colorPairs) {
      resp+= `1 ${COLORS_TO_PAIN_LAND[c]}\n`;
    }
  }else if (qtdColor == 2) {
    let color = validPair(colorArr[0],colorArr[1]);
    resp = `//Pain Land: 1\n1 ${COLORS_TO_PAIN_LAND[color]}\n`
  }
  return resp;
}

module.exports = getPainLands;
