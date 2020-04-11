const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];

const COLORS_TO_SHOCK_LAND = {
  whiteblue: 'Hallowed Fountain',
  blueblack: 'Watery Grave',
  blackred: 'Blood Crypt',
  redgreen: 'Stomping Ground ',
  greenwhite: 'Temple Garden',
  whiteblack: 'Godless Shrine',
  bluered: 'Steam Vents',
  blackgreen: 'Overgrown Tomb',
  redwhite: 'Sacred Foundry',
  greenblue: 'Breeding Pool',
};

function getShockLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 4) {
    resp+='//Shock Land: 6\n'
    let result = ORDER_COLOR.filter(value => !colorArr.includes(value))
    for(c of Object.keys(COLORS_TO_SHOCK_LAND)){
      if(!c.includes(result)){
        resp+= `1 ${COLORS_TO_SHOCK_LAND[c]}\n`
      }
    }
  }else if (qtdColor == 3) {
    resp+='//Shock Land: 3\n'
    let landSet = new Set()
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_SHOCK_LAND[cp])
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }
  }else if (qtdColor == 2) {
    resp+='//Shock Land: 1\n'
    let colorPair = validPair(colorArr[0],colorArr[1]);
    resp += `1 ${COLORS_TO_SHOCK_LAND[colorPair]}\n`
  }
  return resp;
}

module.exports = getShockLands;
