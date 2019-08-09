document.addEventListener("DOMContentLoaded", function resetView(event) {
  var inputList = document.getElementsByTagName("input");
  for (var i = 0; i < inputList.length; ++i) {
    inputList[i].checked = false;
  }
  document.getElementById('output').value = 'Click to copy the lands';
});

function copyToClipboard(e) {
  e.preventDefault();
  var copyText = document.getElementById("output");
  copyText.select();
  if (copyText.value != 'Click to copy the lands'){
    document.execCommand("copy");
  }
}

let checked = { 'white':false, 'blue':false,'black':false,'green':false,'red':false }

function onChecked(obj) {
  let key = obj.name;
  let value = obj.checked;
  let colorArr = [];
  checked[key] = value;
  for (var c of ORDER_COLOR) {
    if(checked[c])
      colorArr.push(c);
  }

  if(colorArr.length >= 2){
      printLands(colorArr);
  } else {
      document.getElementById('output').value = 'Click to copy the lands';
      document.getElementById('output').rows = 1;
  }

}

function printLands(colorArr, qtdColor = colorArr.length) {
    let resp = "";
    resp = resp.concat(getBasicLands(colorArr));
    resp = resp.concat(getOriginalLands(colorArr));
    resp = resp.concat(getFetchLands(colorArr));

    if (qtdColor == 2){
       resp = resp.concat( getShockLands(colorArr),
                           getScryLands(colorArr),
                           getPainLands(colorArr),
                           getBattleLands(colorArr),
                           getCheckLands(colorArr),
                           getFilterLands(colorArr),
                           getBounceLands(colorArr),
                           getAnyColorLand(colorArr),
                           getUtilityLand(colorArr));

    }
    if (qtdColor == 3){
      resp = resp.concat(getShockLands(colorArr),
                         getPainLands(colorArr),
                         getFilterLands(colorArr),
                         getOtherLands(colorArr),
                         getTriLands(colorArr),
                         getAnyColorLand(colorArr),
                         getUtilityLand(colorArr));
    }
    if (qtdColor == 4){
      resp = resp.concat(getShockLands(colorArr),
                       getBattleLands(colorArr),
                       getFilterLands(colorArr),
                       getTriLands(colorArr),
                       getAnyColorLand(colorArr),
                       getUtilityLand(colorArr));
    }
    if (qtdColor == 5){
      resp = resp.concat(getAnyColorLand(colorArr));
    }
    resp = resp.concat(getManaRocks(colorArr));

    let qtdRows = resp.split(/\r\n|\r|\n/).length;

    document.getElementById('output').rows = qtdRows;
    document.getElementById('output').value = resp

}

function getBasicLands(colorArr, qtdColor = colorArr.length) {
  let resp = '//Basic Lands: ';
  if (qtdColor == 5) {
    resp+='14 (2-3-3-3-3)\n'
    qtdArr = [2,3,3,3,3];
    for (i = 0; i < qtdColor; i++) {
      let color = colorArr[i];
      let land = COLOR_TO_LAND[color]
      resp += `${qtdArr[i]} ${land}\n`;
    }
  }else if (qtdColor == 4) {
    resp+='9 (3-3-2-1 or 4-4-1-1)\n'
    qtdArr = [3,3,2,1];
    for (i = 0; i < qtdColor; i++) {
      let color = colorArr[i];
      let land = COLOR_TO_LAND[color]
      resp += `${qtdArr[i]} ${land}\n`;
    }
  }else if (qtdColor == 3) {
    resp+='9\n'
    for (c of colorArr) {
      let land = COLOR_TO_LAND[c]
      resp += `3 ${land}\n`;
    }
  }else if (qtdColor == 2) {
    resp+='8-20 (14 land in Average)\n'
    for (c of colorArr) {
      let land = COLOR_TO_LAND[c]
      resp += `7 ${land}\n`;
    }
  }
  return resp+'\n';
}

function getFetchLands(colorArr, qtdColor = colorArr.length) {
  let resp = '//Fetch Land: ';
  if (qtdColor == 5) {
    resp+='10\n'
    for(c of Object.keys(COLORS_TO_FETCH_LAND)){
      resp+= `1 ${COLORS_TO_FETCH_LAND[c]}\n`
    }
  }else if (qtdColor == 4) {
    resp+='6\n'
    let excludedColorPair = ORDER_COLOR.filter(value => !colorArr.includes(value))
    for(colorPair of Object.keys(COLORS_TO_FETCH_LAND)){
      if(!colorPair.includes(excludedColorPair)){
        resp+= `1 ${COLORS_TO_FETCH_LAND[colorPair]}\n`
      }
    }
  }else if (qtdColor == 3) {
    resp+='3\n'
    let landSet = new Set()
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_FETCH_LAND[cp])
    }
    for(land of landSet){
      resp+= `1 ${land}\n`;
    }
  }else if (qtdColor == 2) {
    resp+='3\n'
    let landSet = new Set()
    for (color of colorArr) {
      for(colorPair of Object.keys(COLORS_TO_FETCH_LAND))
        if(colorPair.includes(color)){
            landSet.add(COLORS_TO_FETCH_LAND[colorPair])
        }
    }
    for(land of landSet){
      resp+= `1 ${land}\n`;
    }
  }
  return resp+'\n';
}

function getShockLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 4) {
    resp+='//Shock Land: 6\n'
    let result = ORDER_COLOR.filter(value => !colorArr.includes(value))
    for(c of Object.keys(COLORS_TO_SHOCK_LAND)){
      if(!c.includes(result)){
        resp+= `1 ${COLORS_TO_SHOCK_LAND[c]}\n`
      }
    }
  }else if (qtdColor == 3) {
    resp+='//Shock Land: 3\n'
    let landSet = new Set()
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_SHOCK_LAND[cp])
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }
  }else if (qtdColor == 2) {
    resp+='//Shock Land: 1\n'
    let colorPair = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_SHOCK_LAND[colorPair]}\n`
  }
  return resp+'\n';
}

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
    let color = `${colorArr[0]}${colorArr[1]}`
    resp+= `1 ${COLORS_TO_ORIGINAL_LAND[color]}\n`
  }
  return resp+'\n';
}

function getScryLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`
    return `//Scry Land: 1\n1 ${COLORS_TO_SCRY_LAND[color]}\n\n`;
  }
  return '';
}

function getPainLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 4 || qtdColor == 3) {
    let resp='//Pain Land: 3\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var c of colorPairs) {
      resp+= `1 ${COLORS_TO_PAIN_LAND[c]}\n`;
    }
    return resp+'\n';
  }else if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`
    return `//Pain Land: 1\n1 ${COLORS_TO_PAIN_LAND[color]}\n\n`
  }
  return '';
}

function getBattleLands(colorArr) {
  //#TODO Separar battle from fast
  //Because 4 color only need fast
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 4) {
    resp+='//Battle or Fast Land: 2\n'
    let colorPairs = getColorPair(colorArr).slice(0,2);
    for (var c of colorPairs) {
      resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[c]}\n`
    }
  }else if (qtdColor == 2) {
    resp+='//Battle or Fast Land: 1\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[color]}\n`
  }
  return resp+'\n';
}

function getManLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`
    return `//Main Land: 1\n1 ${COLORS_TO_MAN_LAND[color]}\n\n`
  }
  return '';
}

function getCheckLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`
    return `//Check Land: 1\n1 ${COLORS_TO_CHECK_LAND[color]}\n\n`
  }
  return '\n';
}

function getFilterLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 4 || qtdColor == 3) {
    resp+='//Filter Land: 3\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var c of colorPairs) {
      resp+= `1 ${COLORS_TO_FILTER_LAND_1[c]}\n`;
    }
  }else if (qtdColor == 2) {
    resp+='//Filter Land: 2\n';
    let colors =`${colorArr[0]}${colorArr[1]}`;
    resp+=  `1 ${COLORS_TO_FILTER_LAND_1[colors]}\n`;
    if (colors in COLORS_TO_FILTER_LAND_2){
      resp+= `1 ${COLORS_TO_FILTER_LAND_2[colors]}\n`;
    }else {
      resp+= '1 Unknown Shores\n'
    }
  }
  return resp+'\n';
}

function getBounceLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`
    return `//Bounce Land: 1\n1 ${COLORS_TO_BOUNCE_LAND[color]}\n\n`
  }
  return '';
}

function getOtherLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 3) {
    let resp = '//Other Lands: 3(ScryLands)\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var color of colorPairs) {
      resp += `1 ${COLORS_TO_SCRY_LAND[color]}\n`;
    }
    return resp+'\n';
  }
  return '';
}

function getTriLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 3) {
    color = colorArr.slice(0,3).join('');
    return `//Tri Land: 1\n1 ${COLORS_TO_TRI_LAND[color]}\n\n`
  }else if (qtdColor == 4) {
    color_1 = colorArr.slice(0,3).join('');
    color_2 = colorArr.slice(1,4).join('');
    return `//Tri Land: 2\n1 ${COLORS_TO_TRI_LAND[color_1]}\n1 ${COLORS_TO_TRI_LAND[color_2]}\n\n`
  }
  return '';
}

function getAnyColorLand(colorArr, qtdColor = colorArr.length){
  if (qtdColor == 5) {
    return "//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n\n"
  }else if (qtdColor == 4 ) {
    return "//Any Color Lands: 3\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n"
  }else if (qtdColor == 3 || qtdColor == 2 ) {
    return "//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n\n"
  }
  return '';
}

function getUtilityLand(colorArr, qtdColor = colorArr.length){
  if (qtdColor == 5){
    return '';
  }else if(qtdColor == 4){
    return '//Utility Land or Mono Color: 4\n4 [UTILITY LAND]\n\n'
  } else if (qtdColor == 3 || qtdColor == 2 ) {
    return '//Utility Land or Mono Color: 6\n6 [UTILITY LAND]\n\n'
  }
}

function getManaRocks(colorArr, qtdColor = colorArr.length){
  if (qtdColor == 5) {
    return `//Mana Ramp: 10
1 Sol Ring
1 Chromatic Lantern
1 Spectral Searchlight
1 Vessel of Endless Rest
1 Coalition Relic
1 Fellwar Stone
1 Mana Geode
1 Manalith
1 Commander's Sphere
1 Darksteel Ingot\n\n`;
  }else if (qtdColor == 4 || qtdColor == 3) {
    let colorPairs =getColorPair(colorArr);
    return `//Mana Ramp: 10
1 Sol Ring
1 Chromatic Lantern
1 ${COLORS_TO_GUILD[colorPairs[0]]} Locket
1 ${COLORS_TO_GUILD[colorPairs[1]]} Locket
1 ${COLORS_TO_GUILD[colorPairs[2]]} Locket
1 Fellwar Stone
1 Mana Geode
1 Manalith
1 Commander's Sphere
1 Darksteel Ingot\n\n`;
  }else if (qtdColor == 2) {
    let colorPair = `${colorArr[0]}${colorArr[1]}`
    return `//Mana Ramp: 10
1 ${COLORS_TO_GUILD[colorPair]} Signet
1 ${COLORS_TO_GUILD[colorPair]} Keyrune
1 ${COLORS_TO_GUILD[colorPair]} Cluestone
1 ${COLORS_TO_GUILD[colorPair]} Locket
1 Talisman of ${COLORS_TO_PAIN_TALISMAN[colorPair]}
1 Commander's Sphere
1 Darksteel Ingot
1 Chromatic Lantern
1 Gilded Lotus
1 Sol Ring\n\n`;
  }
  return '';
}

function getColorPair(colorArr) {
  let qtdColor = colorArr.length;
  if (qtdColor == 3){
      return [`${validPair(colorArr[0],colorArr[1])}`,`${validPair(colorArr[1],colorArr[2])}`,`${validPair(colorArr[2],colorArr[0])}`]
  }
  if (qtdColor == 4){
      return [`${validPair(colorArr[0],colorArr[1])}`,`${validPair(colorArr[1],colorArr[2])}`,
              `${validPair(colorArr[2],colorArr[3])}`,`${validPair(colorArr[3],colorArr[0])}`]
  }
}
function validPair(color1, color2) {
    let allColorPairValid = [ "whiteblue", "blueblack", "blackred", "redgreen",
                              "greenwhite", "whiteblack", "bluered", "blackgreen",
                              "redwhite", "greenblue" ];
    if(allColorPairValid.includes(`${color1}${color2}`)){
      return `${color1}${color2}`
    } else {
      return `${color2}${color1}`
    }

}
