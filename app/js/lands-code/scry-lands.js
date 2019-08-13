function getScryLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`
    return `//Scry Land: 1\n1 ${COLORS_TO_SCRY_LAND[color]}\n`;
  }
  return '';
}
