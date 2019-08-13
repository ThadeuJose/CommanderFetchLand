function getPainLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';
  if (qtdColor == 4 || qtdColor == 3) {
    resp = '//Pain Land: 3\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var c of colorPairs) {
      resp+= `1 ${COLORS_TO_PAIN_LAND[c]}\n`;
    }    
  }else if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`
    resp = `//Pain Land: 1\n1 ${COLORS_TO_PAIN_LAND[color]}\n`
  }
  return resp;
}
