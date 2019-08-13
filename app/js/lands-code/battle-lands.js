function getBattleLands(colorArr, qtdColor = colorArr.length) {
  // #TODO Separar battle from fast
  // Because 4 color only need fast
  let resp = '';
  if (qtdColor === 4) {
    resp += '//Battle or Fast Land: 2\n';
    const colorPairs = getColorPair(colorArr).slice(0, 2);
    for (var c of colorPairs) {
      resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[c]}\n`;
    }
  } else if (qtdColor === 2) {
    resp += '//Battle or Fast Land: 1\n';
    const color = `${colorArr[0]}${colorArr[1]}`;
    resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[color]}\n`;
  }
  return resp;
}
