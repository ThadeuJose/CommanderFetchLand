let ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green']

let COLOR_TO_LAND = {
  'white': 'Plains',
  'blue':  'Island',
  'black': 'Swamp',
  'red':   'Mountain',
  'green': 'Florest'
}

let COLORS_TO_FETCH_LAND = {
  'whiteblue':  'Flooded Strand',
  'blueblack':  'Polluted Delta',
  'blackred':   'Bloodstained Mire',
  'redgreen':   'Wooded Foothills',
  'greenwhite': 'Windswept Heath',
  'whiteblack': 'Marsh Flats',
  'bluered':    'Scalding Tarn',
  'blackgreen': 'Verdant Catacombs',
  'redwhite':   'Arid Mesa',
  'greenblue':  'Misty Rainforest',
}

let COLORS_TO_ORIGINAL_LAND = {
  'whiteblue':  'Tundra',
  'blueblack':  'Underground Sea',
  'blackred':   'Badlands',
  'redgreen':   'Taiga',
  'greenwhite': 'Savannah',
  'whiteblack': 'Scrubland',
  'bluered':    'Volcanic Island',
  'blackgreen': 'Bayou',
  'redwhite':   'Plateau',
  'greenblue':  'Tropical Island',
}

let COLORS_TO_SHOCK_LAND = {
  'whiteblue':  'Hallowed Fountain',
  'blueblack':  'Watery Grave',
  'blackred':   'Blood Crypt',
  'redgreen':   'Stomping Ground ',
  'greenwhite': 'Temple Garden',
  'whiteblack': 'Godless Shrine',
  'bluered':    'Steam Vents',
  'blackgreen': 'Overgrown Tomb',
  'redwhite':   'Sacred Foundry',
  'greenblue':  'Breeding Pool',
}

let COLORS_TO_SCRY_LAND = {
  'whiteblue':  'Temple of Enlightenment',
  'blueblack':  'Temple of Deceit',
  'blackred':   'Temple of Malice',
  'redgreen':   'Temple of Abandon',
  'greenwhite': 'Temple of Plenty',
  'whiteblack': 'Temple of Silence',
  'bluered':    'Temple of Epiphany',
  'blackgreen': 'Temple of Malady',
  'redwhite':   'Temple of Triumph',
  'greenblue':  'Temple of Mystery',
}

let COLORS_TO_PAIN_LAND = {
  'whiteblue':  'Adarkar Wastes',
  'blueblack':  'Underground River',
  'blackred':   'Sulfurous Springs',
  'redgreen':   'Karplusan Forest',
  'greenwhite': 'Brushland ',
  'whiteblack': 'Caves of Koilos',
  'bluered':    'Shivan Reef',
  'blackgreen': 'Llanowar Wastes',
  'redwhite':   'Battlefield Forge',
  'greenblue':  'Yavimaya Coast',
}

let COLORS_TO_BATTLE_AND_FAST_LAND = {
  'whiteblue':  'Prairie Stream',
  'blueblack':  'Sunken Hollow',
  'blackred':   'Smoldering Marsh',
  'redgreen':   'Cinder Glade',
  'greenwhite': 'Canopy Vista ',
  'whiteblack': 'Concealed Courtyard',
  'bluered':    'Spirebluff Canal',
  'blackgreen': 'Blooming Marsh',
  'redwhite':   'Inspiring Vantage',
  'greenblue':  'Botanical Sanctum',
}

let COLORS_TO_MAN_LAND = {
  'whiteblue':  'Celestial Colonnade',
  'blueblack':  'Creeping Tar Pit',
  'blackred':   'Lavaclaw Reaches',
  'redgreen':   'Raging Ravine',
  'greenwhite': 'Stirring Wildwood',
  'whiteblack': 'Shambling Vent',
  'bluered':    'Spirebluff Canal',
  'blackgreen': 'Hissing Quagmire',
  'redwhite':   'Needle Spires',
  'greenblue':  'Lumbering Falls',
}

let COLORS_TO_CHECK_LAND = {
  'whiteblue':  'Glacial Fortress',
  'blueblack':  'Drowned Catacomb',
  'blackred':   'Dragonskull Summit',
  'redgreen':   'Rootbound Crag',
  'greenwhite': 'Sunpetal Grove',
  'whiteblack': 'Isolated Chapel',
  'bluered':    'Sulfur Falls',
  'blackgreen': 'Woodland Cemetery',
  'redwhite':   'Clifftop Retreat',
  'greenblue':  'Hinterland Harbor',
}

let COLORS_TO_FILTER_LAND_1 = {
  'whiteblue':  'Mystic Gate',
  'blueblack':  'Sunken Ruins',
  'blackred':   'Graven Cairns',
  'redgreen':   'Fire-lit Thicket',
  'greenwhite': 'Wooded Bastion',
  'whiteblack': 'Fetid Heath',
  'bluered':    'Cascade Bluffs',
  'blackgreen': 'Twilight Mire',
  'redwhite':   'Rugged Prairie',
  'greenblue':  'Flooded Grove',
}

let COLORS_TO_FILTER_LAND_2 = {
  'whiteblue':  'Skycloud Expanse',
  'blueblack':  'Darkwater Catacombs',
  'blackred':   'Shadowblood Ridge',
  'redgreen':   'Mossfire Valley',
  'greenwhite': 'Sungrass Prairie',

}

let COLORS_TO_BOUNCE_LAND = {
  'whiteblue':  'Azorius Chancery',
  'blueblack':  'Dimir Aqueduct',
  'blackred':   'Rakdos Carnarium',
  'redgreen':   'Gruul Turf',
  'greenwhite': 'Selesnya Sanctuary',
  'whiteblack': 'Orzhov Basilica',
  'bluered':    'Izzet Boilerworks',
  'blackgreen': 'Golgari Rot Farm',
  'redwhite':   'Boros Garrison',
  'greenblue':  'Simic Growth Chamber',
}

let COLORS_TO_GUILD = {
  'whiteblue':  'Azorius',
  'blueblack':  'Dimir',
  'blackred':   'Rakdos',
  'redgreen':   'Gruul',
  'greenwhite': 'Selesnya',
  'whiteblack': 'Orzhov',
  'bluered':    'Izzet',
  'blackgreen': 'Golgari',
  'redwhite':   'Boros',
  'greenblue':  'Simic',
}

let COLORS_TO_PAIN_TALISMAN = {
  'whiteblue':  'Progress',
  'blueblack':  'Dominance',
  'blackred':   'Indulgence',
  'redgreen':   'Impulse',
  'greenwhite': 'Unity',
  'whiteblack': 'Hierarchy',
  'bluered':    'Creativity ',
  'blackgreen': 'Resilience',
  'redwhite':   'Conviction',
  'greenblue':  'Curiosity',
}

let COLORS_TO_TRI_LAND = {
  'whitebluegreen':'Seaside Citadel',
  'whiteblueblack':'Arcane Sanctum',
  'blueblackred':'Crumbling Necropolis',
  'blackredgreen':'Savage Lands',
  'whiteredgreen':'Jungle Shrine',
  'whiteblackgreen':'Sandsteppe Citadel',
  'whitebluered':'Mystic Monastery',
  'blueblackgreen':'Opulent Palace',
  'whiteblackred':'Nomad Outpost',
  'blueredgreen':'Frontier Bivouac',
}

document.addEventListener("DOMContentLoaded", function(event) {
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
  let key = obj.name
  let value = obj.checked
  checked[key] = value
  let colorArr = [];
  for (var c of ORDER_COLOR) {
    if(checked[c])
      colorArr.push(c);
  }
  if(colorArr.length == 5){
      printLands(colorArr);
  } else if(colorArr.length == 4){
      printLands(colorArr);
  } else if(colorArr.length == 3){
      printLands(colorArr);
  } else if(colorArr.length == 2){
      printLands(colorArr);
  } else {
      document.getElementById('output').value = 'Click to copy the lands';
      document.getElementById('output').rows = 1;
  }

}

function printLands(colorArr) {
    let qtdColor = colorArr.length;
    let resp = "";
    if (qtdColor == 2){
       resp = "".concat(getBasicLands(colorArr),'\n',
                           getFetchLands(colorArr),'\n',
                           getShockLands(colorArr),'\n',
                           getOriginalLands(colorArr),'\n',
                           getScryLands(colorArr),'\n',
                           getPainLands(colorArr),'\n',
                           getBattleLands(colorArr),'\n',
                           getCheckLands(colorArr),'\n',
                           getFilterLands(colorArr),'\n',
                           getBounceLands(colorArr),'\n',
                           getAnyColorLand(colorArr),'\n',
                           getUtilityLand(colorArr),'\n',
                           getManaRocks(colorArr));

    }
    if (qtdColor == 3){
      resp = "".concat(getBasicLands(colorArr),'\n',
                       getFetchLands(colorArr),'\n',
                       getShockLands(colorArr),'\n',
                       getOriginalLands(colorArr),'\n',
                       '//Other Lands: 3\n3 [OTHER LAND]\n\n',
                       getAnyColorLand(colorArr),'\n',
                       getUtilityLand(colorArr),'\n',
                       getManaRocks(colorArr));
    }
    if (qtdColor == 4){
      resp = "".concat(getBasicLands(colorArr),'\n',
                       getFetchLands(colorArr),'\n',
                       getShockLands(colorArr),'\n',
                       getOriginalLands(colorArr),'\n',
                       getBattleLands(colorArr),'\n',
                       getFilterLands(colorArr),'\n',
                       getTriLands(colorArr),'\n',
                       getAnyColorLand(colorArr),'\n',
                       getUtilityLand(colorArr),'\n',
                       getManaRocks(colorArr));
    }
    if (qtdColor == 5){
      resp = "".concat(getBasicLands(colorArr),'\n',
                       getFetchLands(colorArr),'\n',
                       getOriginalLands(colorArr),'\n',
                       getAnyColorLand(colorArr),'\n',
                       getManaRocks(colorArr));
    }



    let qtdRows = resp.split(/\r\n|\r|\n/).length;

    document.getElementById('output').rows = qtdRows;
    document.getElementById('output').value = resp

}

function getBasicLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 5) {
    resp+='//Basic Lands:14 (2-3-3-3-3)\n'
    qtdArr = [2,3,3,3,3];
    for (i = 0; i < qtdColor; i++) {
      let color = colorArr[i];
      let land = COLOR_TO_LAND[color]
      resp += `${qtdArr[i]} ${land}\n`;
    }
    return resp;
  }else if (qtdColor == 4) {
    resp+='//Basic Lands: 9 (3-3-2-1 or 4-4-1-1)\n'
    qtdArr = [3,3,2,1];
    for (i = 0; i < qtdColor; i++) {
      let color = colorArr[i];
      let land = COLOR_TO_LAND[color]
      resp += `${qtdArr[i]} ${land}\n`;
    }
    return resp;
  }else if (qtdColor == 3) {
    resp+='//Basic Lands: 9\n'
    for (c of colorArr) {
      let land = COLOR_TO_LAND[c]
      resp += `3 ${land}\n`;
    }
    return resp;
  }else if (qtdColor == 2) {
    resp+='//Basic Lands: 8-20 (14 land in Average)\n'
    for (c of colorArr) {
      let land = COLOR_TO_LAND[c]
      resp += `7 ${land}\n`;
    }
    return resp;
  }
}

function getFetchLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 5) {
    resp+='//Fetch Land: 10\n'
    for(c of Object.keys(COLORS_TO_FETCH_LAND)){
      resp+= `1 ${COLORS_TO_FETCH_LAND[c]}\n`
    }
    return resp;
  }else if (qtdColor == 4) {
    resp+='//Fetch Land: 6\n'
    let result = ORDER_COLOR.filter(value => !colorArr.includes(value))
    for(c of Object.keys(COLORS_TO_FETCH_LAND)){
      if(!c.includes(result)){
        resp+= `1 ${COLORS_TO_FETCH_LAND[c]}\n`
      }
    }
    return resp;
  }else if (qtdColor == 3) {
    resp+='//Fetch Land: 3\n'
    let landSet = new Set()
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_FETCH_LAND[cp])
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }
    return resp;
  }else if (qtdColor == 2) {
    resp+='//Fetch Land: 3\n'
    let landSet = new Set()
    for (c of colorArr) {
      for(k of Object.keys(COLORS_TO_FETCH_LAND))
        if(k.includes(c)){
            landSet.add(COLORS_TO_FETCH_LAND[k])
        }
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }
    return resp;
  }
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
    return resp;
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
    return resp;
  }else if (qtdColor == 2) {
    resp+='//Shock Land: 1\n'
    let colorPair = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_SHOCK_LAND[colorPair]}\n`
    return resp
  }
}

function getOriginalLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 5) {
    resp+='//Original Land: 10\n'
    for(c of Object.keys(COLORS_TO_ORIGINAL_LAND)){
      resp+= `1 ${COLORS_TO_ORIGINAL_LAND[c]}\n`
    }
    return resp;
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
    return resp;
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
    return resp;
  }else if (qtdColor == 2) {
    resp+='//Original Land: 1\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp+= `1 ${COLORS_TO_ORIGINAL_LAND[color]}\n`
    return resp
  }
}

function getScryLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//Scry Land: 1\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_SCRY_LAND[color]}\n`
    return resp;
  }
}

function getPainLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//Pain Land: 1\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_PAIN_LAND[color]}\n`
    return resp;
  }
}

function getBattleLands(colorArr) {
  //#TODO Separar battle from fast
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 4) {
    resp+='//Battle or Fast Land: 2\n'
    let colorPairs = getColorPair(colorArr).slice(0,2);
    for (var c of colorPairs) {
      resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[c]}\n`
    }
    return resp;
  }else if (qtdColor == 2) {
    resp+='//Battle or Fast Land: 1\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[color]}\n`
    return resp;
  }
}

function getManLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//Main Land: 1\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_MAN_LAND[color]}\n`
    return resp;
  }
}

function getCheckLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//Check Land: 1\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp+= `1 ${COLORS_TO_CHECK_LAND[color]}\n`
    return resp;
  }
}

function getFilterLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 4) {
    resp+='//Filter Land: 3\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var c of colorPairs) {
      resp+= `1 ${COLORS_TO_FILTER_LAND_1[c]}\n`;
    }
    return resp;
  }else if (qtdColor == 2) {
    resp+='//Filter Land: 2\n';
    let colors =`${colorArr[0]}${colorArr[1]}`;
    resp+=  `1 ${COLORS_TO_FILTER_LAND_1[colors]}\n`;
    if (colors in COLORS_TO_FILTER_LAND_2){
      resp+= `1 ${COLORS_TO_FILTER_LAND_2[colors]}\n`;
    }else {
      resp+= '1 Unknown Shores\n'
    }
    return resp;
  }
}

function getBounceLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//Bounce Land: 1\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp +=`1 ${COLORS_TO_BOUNCE_LAND[color]}\n`
    return resp;
  }
}

function getTriLands(colorArr) {
  let resp = '';
  let colors = '';
  resp+='//Tri Land: 2\n'
  colors = colorArr.slice(0,3).join('');
  resp+= `1 ${COLORS_TO_TRI_LAND[colors]}\n`
  colors = colorArr.slice(1,4).join('');
  resp+= `1 ${COLORS_TO_TRI_LAND[colors]}\n`
  return resp;
}

function getAnyColorLand(colorArr){
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 5) {
    resp = "//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n"
  }else if (qtdColor == 4 ) {
    resp = "//Any Color Lands: 3\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n"
  }else if (qtdColor == 2 || qtdColor == 3 ) {
    resp = "//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n"
  }
  return resp
}

function getUtilityLand(colorArr){
  let qtdColor = colorArr.length;
  if(qtdColor == 4){
    return '//Utility Land or Mono Color: 4\n4 [UTILITY LAND]'
  }
  return '//Utility Land or Mono Color: 6\n6 [UTILITY LAND]'
}

function getManaRocks(colorArr){
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 5) {
    let colorPair = `${colorArr[0]}${colorArr[1]}`
    resp = `//Mana Ramp: 10
1 Sol Ring
1 Chromatic Lantern
1 Spectral Searchlight
1 Vessel of Endless Rest
1 Coalition Relic
1 Fellwar Stone
1 Mana Geode
1 Manalith
1 Commander's Sphere
1 Darksteel Ingot
  `;
}else if (qtdColor == 4 || qtdColor == 3) {
    let colorPairs =getColorPair(colorArr);
    resp = `\n//Mana Ramp: 10
1 Sol Ring
1 Chromatic Lantern
1 ${COLORS_TO_GUILD[colorPairs[0]]} Locket
1 ${COLORS_TO_GUILD[colorPairs[1]]} Locket
1 ${COLORS_TO_GUILD[colorPairs[2]]} Locket
1 Fellwar Stone
1 Mana Geode
1 Manalith
1 Commander's Sphere
1 Darksteel Ingot
`;
  }else if (qtdColor == 2) {
    let colorPair = `${colorArr[0]}${colorArr[1]}`
    resp = `\n//Mana Ramp: 10
1 ${COLORS_TO_GUILD[colorPair]} Signet
1 ${COLORS_TO_GUILD[colorPair]} Keyrune
1 ${COLORS_TO_GUILD[colorPair]} Cluestone
1 ${COLORS_TO_GUILD[colorPair]} Locket
1 Talisman of ${COLORS_TO_PAIN_TALISMAN[colorPair]}
1 Commander's Sphere
1 Darksteel Ingot
1 Chromatic Lantern
1 Gilded Lotus
1 Sol Ring
  `;
  }
  return resp
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
