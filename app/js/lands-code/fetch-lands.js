function getFetchLands(colorArr, qtdColor = colorArr.length) {
  let resp = '//Fetch Land: ';
  if (qtdColor === 5) {
    resp += '10\n';
    for (c of Object.keys(COLORS_TO_FETCH_LAND)) {
      resp += `1 ${COLORS_TO_FETCH_LAND[c]}\n`;
    }
  } else if (qtdColor === 4) {
    resp += '6\n';
    let excludedColorPair = ORDER_COLOR.filter(value => !colorArr.includes(value));
    for (colorPair of Object.keys(COLORS_TO_FETCH_LAND)) {
      if(!colorPair.includes(excludedColorPair)) {
        resp += `1 ${COLORS_TO_FETCH_LAND[colorPair]}\n`;
      }
    }
  } else if (qtdColor === 3) {
    resp += '3\n';
    let landSet = new Set();
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_FETCH_LAND[cp]);
    }
    for (land of landSet){
      resp += `1 ${land}\n`;
    }
  }else if (qtdColor === 2) {
    resp += '7\n';
    let landSet = new Set();
    for (color of colorArr) {
      for (colorPair of Object.keys(COLORS_TO_FETCH_LAND)){
        if (colorPair.includes(color)) {
            landSet.add(COLORS_TO_FETCH_LAND[colorPair]);
        }
      }
    }
    for(land of landSet){
      resp += `1 ${land}\n`;
    }
  }
  return resp;
}
