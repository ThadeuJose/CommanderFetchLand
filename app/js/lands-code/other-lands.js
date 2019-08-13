function getOtherLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';
  if (qtdColor == 3) {
    resp += '//Other Lands: 3 (Scry lands)\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var color of colorPairs) {
      resp += `1 ${COLORS_TO_SCRY_LAND[color]}\n`;
    }
  }
  return resp;
}
