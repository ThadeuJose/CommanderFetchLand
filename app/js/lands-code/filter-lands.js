function getFilterLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';
  if (qtdColor == 4 || qtdColor == 3) {
    resp +='//Filter Land: 3\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var c of colorPairs) {
      resp += `1 ${COLORS_TO_FILTER_LAND_1[c]}\n`;
    }
  }else if (qtdColor == 2) {
    resp+='//Filter Land: 2\n';
    let colors = validPair(colorArr[0],colorArr[1]);
    resp+=  `1 ${COLORS_TO_FILTER_LAND_1[colors]}\n`;
    if (colors in COLORS_TO_FILTER_LAND_2){
      resp+= `1 ${COLORS_TO_FILTER_LAND_2[colors]}\n`;
    }else {
      resp+= '1 Unknown Shores\n'
    }
  }
  return resp;
}
