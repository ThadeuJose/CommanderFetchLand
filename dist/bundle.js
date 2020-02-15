const ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];

const COLOR_TO_LAND = {
  white: 'Plains',
  blue: 'Island',
  black: 'Swamp',
  red: 'Mountain',
  green: 'Forest',
};

const COLORS_TO_FETCH_LAND = {
  whiteblue: 'Flooded Strand',
  blueblack: 'Polluted Delta',
  blackred: 'Bloodstained Mire',
  redgreen: 'Wooded Foothills',
  greenwhite: 'Windswept Heath',
  whiteblack: 'Marsh Flats',
  bluered: 'Scalding Tarn',
  blackgreen: 'Verdant Catacombs',
  redwhite: 'Arid Mesa',
  greenblue: 'Misty Rainforest',
};

const COLORS_TO_ORIGINAL_LAND = {
  whiteblue: 'Tundra',
  blueblack: 'Underground Sea',
  blackred: 'Badlands',
  redgreen: 'Taiga',
  greenwhite: 'Savannah',
  whiteblack: 'Scrubland',
  bluered: 'Volcanic Island',
  blackgreen: 'Bayou',
  redwhite: 'Plateau',
  greenblue: 'Tropical Island',
};

const COLORS_TO_SHOCK_LAND = {
  whiteblue: 'Hallowed Fountain',
  blueblack: 'Watery Grave',
  blackred: 'Blood Crypt',
  redgreen: 'Stomping Ground ',
  greenwhite: 'Temple Garden',
  whiteblack: 'Godless Shrine',
  bluered: 'Steam Vents',
  blackgreen: 'Overgrown Tomb',
  redwhite: 'Sacred Foundry',
  greenblue: 'Breeding Pool',
};

const COLORS_TO_SCRY_LAND = {
  whiteblue: 'Temple of Enlightenment',
  blueblack: 'Temple of Deceit',
  blackred: 'Temple of Malice',
  redgreen: 'Temple of Abandon',
  greenwhite: 'Temple of Plenty',
  whiteblack: 'Temple of Silence',
  bluered: 'Temple of Epiphany',
  blackgreen: 'Temple of Malady',
  redwhite: 'Temple of Triumph',
  greenblue: 'Temple of Mystery',
};

const COLORS_TO_PAIN_LAND = {
  whiteblue: 'Adarkar Wastes',
  blueblack: 'Underground River',
  blackred: 'Sulfurous Springs',
  redgreen: 'Karplusan Forest',
  greenwhite: 'Brushland ',
  whiteblack: 'Caves of Koilos',
  bluered: 'Shivan Reef',
  blackgreen: 'Llanowar Wastes',
  redwhite: 'Battlefield Forge',
  greenblue: 'Yavimaya Coast',
};

const COLORS_TO_BATTLE_AND_FAST_LAND = {
  whiteblue: 'Prairie Stream',
  blueblack: 'Sunken Hollow',
  blackred: 'Smoldering Marsh',
  redgreen: 'Cinder Glade',
  greenwhite: 'Canopy Vista ',
  whiteblack: 'Concealed Courtyard',
  bluered: 'Spirebluff Canal',
  blackgreen: 'Blooming Marsh',
  redwhite: 'Inspiring Vantage',
  greenblue: 'Botanical Sanctum',
};

const COLORS_TO_MAN_LAND = {
  whiteblue: 'Celestial Colonnade',
  blueblack: 'Creeping Tar Pit',
  blackred: 'Lavaclaw Reaches',
  redgreen: 'Raging Ravine',
  greenwhite: 'Stirring Wildwood',
  whiteblack: 'Shambling Vent',
  bluered: 'Spirebluff Canal',
  blackgreen: 'Hissing Quagmire',
  redwhite: 'Needle Spires',
  greenblue: 'Lumbering Falls',
};

const COLORS_TO_CHECK_LAND = {
  whiteblue: 'Glacial Fortress',
  blueblack: 'Drowned Catacomb',
  blackred: 'Dragonskull Summit',
  redgreen: 'Rootbound Crag',
  greenwhite: 'Sunpetal Grove',
  whiteblack: 'Isolated Chapel',
  bluered: 'Sulfur Falls',
  blackgreen: 'Woodland Cemetery',
  redwhite: 'Clifftop Retreat',
  greenblue: 'Hinterland Harbor',
};

const COLORS_TO_FILTER_LAND_1 = {
  whiteblue: 'Mystic Gate',
  blueblack: 'Sunken Ruins',
  blackred: 'Graven Cairns',
  redgreen: 'Fire-lit Thicket',
  greenwhite: 'Wooded Bastion',
  whiteblack: 'Fetid Heath',
  bluered: 'Cascade Bluffs',
  blackgreen: 'Twilight Mire',
  redwhite: 'Rugged Prairie',
  greenblue: 'Flooded Grove',
};

const COLORS_TO_FILTER_LAND_2 = {
  whiteblue: 'Skycloud Expanse',
  blueblack: 'Darkwater Catacombs',
  blackred: 'Shadowblood Ridge',
  redgreen: 'Mossfire Valley',
  greenwhite: 'Sungrass Prairie',
};

const COLORS_TO_BOUNCE_LAND = {
  whiteblue: 'Azorius Chancery',
  blueblack: 'Dimir Aqueduct',
  blackred: 'Rakdos Carnarium',
  redgreen: 'Gruul Turf',
  greenwhite: 'Selesnya Sanctuary',
  whiteblack: 'Orzhov Basilica',
  bluered: 'Izzet Boilerworks',
  blackgreen: 'Golgari Rot Farm',
  redwhite: 'Boros Garrison',
  greenblue: 'Simic Growth Chamber',
};

const COLORS_TO_GUILD = {
  whiteblue: 'Azorius',
  blueblack: 'Dimir',
  blackred: 'Rakdos',
  redgreen: 'Gruul',
  greenwhite: 'Selesnya',
  whiteblack: 'Orzhov',
  bluered: 'Izzet',
  blackgreen: 'Golgari',
  redwhite: 'Boros',
  greenblue: 'Simic',
};

const COLORS_TO_PAIN_TALISMAN = {
  whiteblue: 'Progress',
  blueblack: 'Dominance',
  blackred: 'Indulgence',
  redgreen: 'Impulse',
  greenwhite: 'Unity',
  whiteblack: 'Hierarchy',
  bluered: 'Creativity ',
  blackgreen: 'Resilience',
  redwhite: 'Conviction',
  greenblue: 'Curiosity',
};

const COLORS_TO_TRI_LAND = {
  whitebluegreen: 'Seaside Citadel',
  whiteblueblack: 'Arcane Sanctum',
  blueblackred: 'Crumbling Necropolis',
  blackredgreen: 'Savage Lands',
  whiteredgreen: 'Jungle Shrine',
  whiteblackgreen: 'Sandsteppe Citadel',
  whitebluered: 'Mystic Monastery',
  blueblackgreen: 'Opulent Palace',
  whiteblackred: 'Nomad Outpost',
  blueredgreen: 'Frontier Bivouac',
};

function validPair(color1, color2) {
  const allColorPairValid = ['whiteblue', 'blueblack', 'blackred', 'redgreen',
                            'greenwhite', 'whiteblack', 'bluered',
                            'blackgreen', 'redwhite', 'greenblue'];
  if (allColorPairValid.includes(`${color1}${color2}`)) {
    return `${color1}${color2}`;
  } else {
    return `${color2}${color1}`;
  }
}

function getColorPair(colorArr) {
  const qtdColor = colorArr.length;
  if (qtdColor === 3) {
    return [`${validPair(colorArr[0], colorArr[1])}`,
            `${validPair(colorArr[1], colorArr[2])}`,
            `${validPair(colorArr[2], colorArr[0])}`];
  }
  if (qtdColor === 4) {
    return [`${validPair(colorArr[0], colorArr[1])}`,
            `${validPair(colorArr[1], colorArr[2])}`,
            `${validPair(colorArr[2], colorArr[3])}`,
            `${validPair(colorArr[3], colorArr[0])}`];
  }
}

function getAnyColorLand(colorArr, qtdColor = colorArr.length) {
  if (qtdColor === 5) {
    return '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n';
  } else if (qtdColor === 4) {
    return '//Any Color Lands: 3\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n';
  } else if (qtdColor === 3 || qtdColor === 2) {
    return '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n';
  }
  return '';
}

function getBasicLands(colorArr, qtdColor = colorArr.length) {
  let resp = '//Basic Lands: ';
  let qtdArr = [];
  if (qtdColor === 5) {
    resp += '14 (2-3-3-3-3)\n';
    qtdArr = [2, 3, 3, 3, 3];
    for (let i = 0; i < qtdColor; i += 1) {
      const color = colorArr[i];
      const land = COLOR_TO_LAND[color];
      resp += `${qtdArr[i]} ${land}\n`;
    }
  } else if (qtdColor === 4) {
    resp += '9 (3-3-2-1 or 4-4-1-1)\n';
    qtdArr = [3, 3, 2, 1];
    for (let i = 0; i < qtdColor; i += 1) {
      const color = colorArr[i];
      const land = COLOR_TO_LAND[color];
      resp += `${qtdArr[i]} ${land}\n`;
    }
  } else if (qtdColor === 3) {
    resp += '9\n';
    for (c of colorArr) {
      const land = COLOR_TO_LAND[c];
      resp += `3 ${land}\n`;
    }
  } else if (qtdColor === 2) {
    resp += '8-20 (14 land in Average)\n';
    for (c of colorArr) {
      const land = COLOR_TO_LAND[c];
      resp += `7 ${land}\n`;
    }
  }
  return resp;
}

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
    const color = validPair(colorArr[0],colorArr[1]);
    resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[color]}\n`;
  }
  return resp;
}

function getBounceLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor === 2) {
    const color = validPair(colorArr[0],colorArr[1]);
    return `//Bounce Land: 1\n1 ${COLORS_TO_BOUNCE_LAND[color]}\n`;
  }
  return '';
}

function getCheckLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor === 2) {
    const color = validPair(colorArr[0],colorArr[1]);
    return `//Check Land: 1\n1 ${COLORS_TO_CHECK_LAND[color]}\n`;
  }
  return '';
}

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

function getManLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`;
    return `//Main Land: 1\n1 ${COLORS_TO_MAN_LAND[color]}\n\n`;
  }
  return '';
}

function getManaRamp(colorArr, qtdColor = colorArr.length){
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
1 Darksteel Ingot\n`;
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
1 Darksteel Ingot\n`;
  }else if (qtdColor == 2) {
    let colorPair = validPair(colorArr[0],colorArr[1]);
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
1 Sol Ring\n`;
  }
  return '';
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
    let color = validPair(colorArr[0],colorArr[1]);
    resp+= `1 ${COLORS_TO_ORIGINAL_LAND[color]}\n`
  }
  return resp;
}

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

function getPainLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';
  if (qtdColor == 4 || qtdColor == 3) {
    resp = '//Pain Land: 3\n';
    let colorPairs = getColorPair(colorArr).slice(0,3);
    for (var c of colorPairs) {
      resp+= `1 ${COLORS_TO_PAIN_LAND[c]}\n`;
    }
  }else if (qtdColor == 2) {
    let color = validPair(colorArr[0],colorArr[1]);
    resp = `//Pain Land: 1\n1 ${COLORS_TO_PAIN_LAND[color]}\n`
  }
  return resp;
}

function getScryLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = validPair(colorArr[0],colorArr[1]);
    return `//Scry Land: 1\n1 ${COLORS_TO_SCRY_LAND[color]}\n`;
  }
  return '';
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
    let colorPair = validPair(colorArr[0],colorArr[1]);
    resp += `1 ${COLORS_TO_SHOCK_LAND[colorPair]}\n`
  }
  return resp;
}

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

function getUtilityLand(colorArr, qtdColor = colorArr.length){
  let resp = '';
  if(qtdColor == 4){
    resp = '//Utility Land or Mono Color: 4\n4 [UTILITY LAND]\n'
  } else if (qtdColor == 3 || qtdColor == 2 ) {
    resp = '//Utility Land or Mono Color: 6\n6 [UTILITY LAND]\n'
  }
  return resp;
}

document.addEventListener('DOMContentLoaded', function resetView() {
  const inputList = document.getElementsByTagName('input');
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].checked = false;
  }
  document.getElementById('output').value = 'Click to copy the lands';
});

function copyToClipboard(event) {
  event.preventDefault();

  const copyText = document.getElementById('output');

  if (copyText.value !== 'Click to copy the lands') {
    navigator.clipboard.writeText(copyText.value);
    console.log("Copied the text: " + copyText.value);
  }
}

const checked = {
  white: false, blue: false, black: false, green: false, red: false
};

function onChecked(obj) {
  const key = obj.name;
  const value = obj.checked;
  const colorArr = [];
  checked[key] = value;
  for (const c of ORDER_COLOR) {
    if (checked[c]) {
      colorArr.push(c);
    }
  }
  if (colorArr.length >= 2) {
    printLands(colorArr);
  } else {
    document.getElementById('output').value = 'Click to copy the lands';
    document.getElementById('output').rows = 1;
  }
}

function printLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';

  resp = [
    getBasicLands(colorArr),
    getOriginalLands(colorArr),
    getFetchLands(colorArr),
    getShockLands(colorArr),
    getPainLands(colorArr),
    getFilterLands(colorArr),
    getOtherLands(colorArr),
    getTriLands(colorArr),
    getScryLands(colorArr),
    getBattleLands(colorArr),
    getCheckLands(colorArr),
    getBounceLands(colorArr),
    getAnyColorLand(colorArr),
    getUtilityLand(colorArr),
    getManaRamp(colorArr),
  ].map((elem) => {
    if (elem) {
      return `${elem}\n`;
    } else {
      return '';
    }
  }).join('');

  const qtdRows = resp.split(/\r\n|\r|\n/).length;

  document.getElementById('output').rows = qtdRows;
  document.getElementById('output').value = resp;

}
