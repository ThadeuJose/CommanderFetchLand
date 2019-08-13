function getCheckLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor === 2) {
    const color = `${colorArr[0]}${colorArr[1]}`;
    return `//Check Land: 1\n1 ${COLORS_TO_CHECK_LAND[color]}\n`;
  }
  return '';
}
