function getTriLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 3) {
    color = colorArr.slice(0,3).join('');
    return `//Tri Land: 1\n1 ${COLORS_TO_TRI_LAND[color]}\n`
  }else if (qtdColor == 4) {
    color_1 = colorArr.slice(0,3).join('');
    color_2 = colorArr.slice(1,4).join('');
    return `//Tri Land: 2\n1 ${COLORS_TO_TRI_LAND[color_1]}\n1 ${COLORS_TO_TRI_LAND[color_2]}\n`
  }
  return '';
}
