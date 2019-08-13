function getManLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`;
    return `//Main Land: 1\n1 ${COLORS_TO_MAN_LAND[color]}\n\n`;
  }
  return '';
}
