//Return pair of valid color
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
//Return all valid pair of 3 or 4 color 
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

module.exports.validPair = function (color1, color2) {
  const allColorPairValid = ['whiteblue', 'blueblack', 'blackred', 'redgreen',
                            'greenwhite', 'whiteblack', 'bluered',
                            'blackgreen', 'redwhite', 'greenblue'];
  if (allColorPairValid.includes(`${color1}${color2}`)) {
    return `${color1}${color2}`;
  } else {
    return `${color2}${color1}`;
  }
};

module.exports.getColorPair = function (colorArr) {
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
};
