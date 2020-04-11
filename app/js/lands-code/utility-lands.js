function getUtilityLand(colorArr, qtdColor = colorArr.length){
  let resp = '';
  if(qtdColor == 4){
    resp = '//Utility Land or Mono Color: 4\n4 [UTILITY LAND]\n'
  } else if (qtdColor == 3 || qtdColor == 2 ) {
    resp = '//Utility Land or Mono Color: 6\n6 [UTILITY LAND]\n'
  }
  return resp;
}

module.exports = getUtilityLand;
