const COLOR_TO_BASIC_LAND = {
  white: 'Plains',
  blue: 'Island',
  black: 'Swamp',
  red: 'Mountain',
  green: 'Forest',
};

function getBasicLands(colorArr) {
  let resp = '//Basic Lands: ';
  let qtdColor = colorArr.length
  let qtdArr = [];
  if (qtdColor === 5) {
    resp += '14 (2-3-3-3-3)\n';
    qtdArr = [2, 3, 3, 3, 3];
    for (let i = 0; i < qtdColor; i += 1) {
      const color = colorArr[i];
      const land = COLOR_TO_BASIC_LAND[color];
      resp += `${qtdArr[i]} ${land}\n`;
    }
  } else if (qtdColor === 4) {
    resp += '9 (3-3-2-1 or 4-4-1-1)\n';
    qtdArr = [3, 3, 2, 1];
    for (let i = 0; i < qtdColor; i += 1) {
      const color = colorArr[i];
      const land = COLOR_TO_BASIC_LAND[color];
      resp += `${qtdArr[i]} ${land}\n`;
    }
  } else if (qtdColor === 3) {
    resp += '9\n';
    for (c of colorArr) {
      const land = COLOR_TO_BASIC_LAND[c];
      resp += `3 ${land}\n`;
    }
  } else if (qtdColor === 2) {
    resp += '8-20 (14 land in Average)\n';
    for (c of colorArr) {
      const land = COLOR_TO_BASIC_LAND[c];
      resp += `7 ${land}\n`;
    }
  }
  return resp;
}

module.exports = getBasicLands;
