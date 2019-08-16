function getOriginalLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 5) {
    resp+='//Original Land: 10\n'
    for(c of Object.keys(COLORS_TO_ORIGINAL_LAND)){
      resp+= `1 ${COLORS_TO_ORIGINAL_LAND[c]}\n`
    }
  }else if (qtdColor == 4) {
    resp+='//Original Land: 4\n'
    let landSet = new Set()
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_ORIGINAL_LAND[cp])
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }
  }else if (qtdColor == 3) {
    resp+='//Original Land: 3\n'
    let landSet = new Set()
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_ORIGINAL_LAND[cp])
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }
  }else if (qtdColor == 2) {
    resp+='//Original Land: 1\n'
    let color = validPair(colorArr[0],colorArr[1]);
    resp+= `1 ${COLORS_TO_ORIGINAL_LAND[color]}\n`
  }
  return resp;
}
