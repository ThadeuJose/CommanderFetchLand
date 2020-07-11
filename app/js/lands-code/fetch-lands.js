const LandsRepository = require('../LandsRepository');

function validPair(color1, color2) {
  const allColorPairValid = ['whiteblue', 'blueblack', 'blackred', 'redgreen',
                            'greenwhite', 'whiteblack', 'bluered',
                            'blackgreen', 'redwhite', 'greenblue'];
  if (allColorPairValid.includes(`${color1}${color2}`)) {
    return `${color1}${color2}`;
  } else {
    return `${color2}${color1}`;
  }
}

function getColorPair(colorArr) {
  const qtdColor = colorArr.length;
  if (qtdColor === 3) {
    return [`${validPair(colorArr[0], colorArr[1])}`,
            `${validPair(colorArr[1], colorArr[2])}`,
            `${validPair(colorArr[2], colorArr[0])}`];
  }
  if (qtdColor === 4) {
    return [`${validPair(colorArr[0], colorArr[1])}`,
            `${validPair(colorArr[1], colorArr[2])}`,
            `${validPair(colorArr[2], colorArr[3])}`,
            `${validPair(colorArr[3], colorArr[0])}`];
  }
}

const ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];

const COLORS_TO_FETCH_LAND = {
  whiteblue: 'Flooded Strand',
  blueblack: 'Polluted Delta',
  blackred: 'Bloodstained Mire',
  redgreen: 'Wooded Foothills',
  greenwhite: 'Windswept Heath',
  whiteblack: 'Marsh Flats',
  bluered: 'Scalding Tarn',
  blackgreen: 'Verdant Catacombs',
  redwhite: 'Arid Mesa',
  greenblue: 'Misty Rainforest',
};

function getFetchLands(colorArr) {
  const qtdColor = colorArr.length;

  let resp = '//Fetch Land: ';
  if (qtdColor === 5) {
    resp += '10\n';
    for (c of Object.keys(COLORS_TO_FETCH_LAND)) {
      resp += `1 ${COLORS_TO_FETCH_LAND[c]}\n`;
    }
    return resp
  }
  if (qtdColor === 4) {
    resp += '6\n';
    let excludedColorPair = ORDER_COLOR.filter(value => !colorArr.includes(value));
    for (colorPair of Object.keys(COLORS_TO_FETCH_LAND)) {
      if(!colorPair.includes(excludedColorPair)) {
        resp += `1 ${COLORS_TO_FETCH_LAND[colorPair]}\n`;
      }
    }
    return resp;
  } else if (qtdColor === 3) {
    resp += '3\n';
    let landSet = new Set();
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_FETCH_LAND[cp]);
    }
    for (land of landSet){
      resp += `1 ${land}\n`;
    }
  }else if (qtdColor === 2) {
    resp += '7\n';
    let landSet = new Set();
    for (color of colorArr) {
      for (colorPair of Object.keys(COLORS_TO_FETCH_LAND)){
        if (colorPair.includes(color)) {
            landSet.add(COLORS_TO_FETCH_LAND[colorPair]);
        }
      }
    }
    for(land of landSet){
      resp += `1 ${land}\n`;
    }
  } else if (qtdColor === 1) {
    return '';
  }
  return resp;
}



function getFetchLands_NEW(colorManager) {
  if (colorManager.qtdColor() === 5) {
    let landsRepository = new LandsRepository('Fetch Land');
    for (land of Object.values(COLORS_TO_FETCH_LAND)) {
      landsRepository.addLand(1,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 4) {
    let landsRepository = new LandsRepository('Fetch Land');
    let excludedColor = colorManager.getAllColors().filter(value => !colorManager.colorArr.includes(value));
    let AllValidColorsPairs = Object.keys(COLORS_TO_FETCH_LAND).filter(value => value.indexOf(excludedColor) === -1);
    for (colorPair of AllValidColorsPairs) {
        landsRepository.addLand(1, COLORS_TO_FETCH_LAND[colorPair]);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 3) {
    let landsRepository = new LandsRepository('Fetch Land');
    for (colorPair of colorManager.getAllColorPairs()) {
      landsRepository.addLand(1,COLORS_TO_FETCH_LAND[colorPair]);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 2) {
    let landsRepository = new LandsRepository('Fetch Land');
    let colors = colorManager.colorArr;
    let AllValidColorPairs = Object.keys(COLORS_TO_FETCH_LAND).filter(
      value => value.indexOf(colors[0]) !== -1 || value.indexOf(colors[1]) !== -1);
    for (colorPair of AllValidColorPairs) {
      landsRepository.addLand(1,COLORS_TO_FETCH_LAND[colorPair]);
    }
    return landsRepository;
  }
}

module.exports.getFetchLands = getFetchLands;
module.exports.getFetchLands_NEW = getFetchLands_NEW;
