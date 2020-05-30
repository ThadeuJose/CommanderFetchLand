(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const validPair = require('../utility-functions').validPair;


const COLORS_TO_CANOPY_LAND = {
  greenwhite: 'Horizon Canopy',
  whiteblack: 'Silent Clearing',
  bluered: 'Fiery Islet',
  blackgreen: 'Nurturing Peatland',
  redwhite: 'Sunbaked Canyon',
  greenblue: 'Waterlogged Grove',
};

function getAnyColorLand(colorArr) {
  let qtdColor = colorArr.length;

  if (qtdColor === 1) {
    return '';
  }

  if (qtdColor === 4) {
    return '//Any Color Lands: 3\n1 Command Tower\n1 Mana Confluence\n'+getCanopyLand(colorArr);
  }

  return '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 Reflecting Pool\n'+getCanopyLand(colorArr);

}

function getCanopyLand(colorArr) {
  let qtdColor = colorArr.length;
  let cityOfBrass = '1 City of Brass\n';

  if(qtdColor === 2) {
      let colorPair = validPair(colorArr[0], colorArr[1]);
      if(colorPair in COLORS_TO_CANOPY_LAND) {
        return `1 ${COLORS_TO_CANOPY_LAND[colorPair]}\n`;
      }
  }

  if(qtdColor === 3) {
      let validPairs = [validPair(colorArr[0], colorArr[1]), validPair(colorArr[0], colorArr[2]),
                        validPair(colorArr[1], colorArr[2]),
                      ];
      for (var pair of validPairs) {
        if(pair in COLORS_TO_CANOPY_LAND) {
          return `1 ${COLORS_TO_CANOPY_LAND[pair]}\n`;
        }
      }
  }

  if(qtdColor === 4) {
      let validPairs = [validPair(colorArr[0], colorArr[1]), validPair(colorArr[0], colorArr[2]),validPair(colorArr[0], colorArr[3]),
                        validPair(colorArr[1], colorArr[2]),validPair(colorArr[1], colorArr[3]),
                        validPair(colorArr[2], colorArr[3]),
                      ];
      for (var pair of validPairs) {
        if(pair in COLORS_TO_CANOPY_LAND) {
          return `1 ${COLORS_TO_CANOPY_LAND[pair]}\n`;
        }
      }


  }

  if(qtdColor === 5){
    return '1 Waterlogged Grove\n'; // The Simic one (Green Blue);
  }

  return cityOfBrass;

}

module.exports = getAnyColorLand;

},{"../utility-functions":18}],2:[function(require,module,exports){
const COLOR_TO_BASIC_LAND = {
  white: 'Plains',
  blue: 'Island',
  black: 'Swamp',
  red: 'Mountain',
  green: 'Forest',
};

function getBasicLands(colorArr) {
  const qtdColor = colorArr.length;
  if (qtdColor === 5) {
    let resp = '//Basic Lands: 14\n';
    const qtdArr = [3, 3, 3, 2, 3];
    for (const [index, color]  of colorArr.entries()) {
      let land = COLOR_TO_BASIC_LAND[color];
      resp += `${qtdArr[index]} ${land}\n`;
    }
    return resp;
  }

  if (qtdColor === 4) {
    return '//Basic Lands: 9\n' + fourColorBase(colorArr);
  }

  if (qtdColor === 3) {
    let resp = '//Basic Lands: 9\n';
    for (color of colorArr) {
      const land = COLOR_TO_BASIC_LAND[color];
      resp += `3 ${land}\n`;
    }
    return resp;
  }

  if (qtdColor === 2) {
    let resp = '//Basic Lands: 14\n';
    for (color of colorArr) {
      const land = COLOR_TO_BASIC_LAND[color];
      resp += `7 ${land}\n`;
    }
    return resp;
  }

  if (qtdColor === 1) {
    return monoBase(colorArr);
  }

}

function fourColorBase(colorArr){
  let resp = ''
  const qtdArr = [3, 3, 2, 1];
  let priorityQueue = ['green', 'black', 'blue', 'white', 'red']
  let intersection = priorityQueue.filter(function(n) {
                                    return colorArr.indexOf(n) !== -1;
                                  });
  for (const [index, color]  of intersection.entries()) {
      const land = COLOR_TO_BASIC_LAND[color];
      resp += `${qtdArr[index]} ${land}\n`;
  }

  return resp;
}

function monoBase(colorArr) {
  let resp = '//Lands: 38\n';
  resp += "1 Arch of Orazca\n1 Dust Bowl\n1 Strip Mine\n1 Scavenger Grounds\n1 Myriad Landscape\n1 Rogue's Passage\n1 Nykthos, Shrine to Nyx\n";
  if(colorArr == 'white'){
    resp +='1 Sea Gate Wreckage\n1 Mikokoro, Center of the Sea\n1 Endless Sands\n1 Terrain Generator\n1 Emeria, the Sky Ruin\n1 Secluded Steppe\n1 Desert of the True \n1 Drifting Meadow\n1 Mistveil Plains\n1 Castle Ardenvale\n20 Plains';
  }
  if(colorArr == 'blue'){
    resp +='1 Reliquary Tower\n1 Blast Zone\n1 Winding Canyons\n1 Mirrorpool\n1 Lonely Sandbar\n1 Desert of The Mindful\n1 Remote Isle\n1 Castle Vantress\n1 Mystic Sanctuary\n23 Island';
  }
  if(colorArr == 'black'){
    resp +="1 Vesuva\n1 Thespian's Stage\n1 Blast Zone\n1 Westvale Abbey\n1 Phyrexian Tower\n1 Bojuka Bog\n1 Cabal Stronghold\n1 Cabal Coffers\n1 Castle Lochtwain\n23 Swamp";
  }
  if(colorArr == 'red'){
    resp +="1 Sea Gate Wreckage\n1 Mikokoro, Center of the Sea\n1 Blast Zone\n1 Kheer Keep\n1 Thespian's Stage\n1 Vesuva\n1 Desert of The Fervent\n1 Forgotten Cave\n1 Smoldering Crater\n1 Castle Embereth\n1 Valakut, the Molten Pinnacle\n1 Flamekin Village\n1 Shinka, the Bloodsoaked Keep\n21 Mountain";
  }
  if(colorArr == 'green'){
    resp +='1 Blighted Woodland\n1 Endless Sands\n1 Miren, the Moaning Well\n1 Winding Canyons\n1 Treetop Village\n1 Desert of the Indomitable\n1 Slippery Karst\n1 Tranquil Thicket\n1 Castle Garenbrig\n1 Oran-rief, the Vastwood\n21 Forest	';
  }
  return resp;
}
module.exports = getBasicLands;

},{}],3:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

function getBattleLands(colorArr, qtdColor = colorArr.length) {
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

module.exports = getBattleLands;

},{"../utility-functions":18}],4:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

function getBounceLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor === 2) {
    const color = validPair(colorArr[0],colorArr[1]);
    return `//Bounce Land: 1\n1 ${COLORS_TO_BOUNCE_LAND[color]}\n`;
  }
  return '';
}

module.exports = getBounceLands;

},{"../utility-functions":18}],5:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

function getCheckLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor === 2) {
    const color = validPair(colorArr[0],colorArr[1]);
    return `//Check Land: 1\n1 ${COLORS_TO_CHECK_LAND[color]}\n`;
  }
  return '';
}

module.exports = getCheckLands;

},{"../utility-functions":18}],6:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const COLORS_TO_DUAL_LAND = {
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

function getDuals(colorArr) {
  let qtdColor = colorArr.length;
  if (qtdColor == 5) {
    let resp ='//Dual Land: 10\n';
    for(land of Object.values(COLORS_TO_DUAL_LAND)){
      resp+= `1 ${land}\n`
    }
    return resp;
  }
  if (qtdColor == 4) {
    let resp ='//Dual Land: 4\n';
    let landSet = new Set()
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      landSet.add(COLORS_TO_DUAL_LAND[cp])
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }
    return resp;
  }
  if (qtdColor == 3) {
    let resp = '//Dual Land: 3\n'
    let colorPairs = getColorPair(colorArr);
    for (cp of colorPairs) {
      resp+= `1 ${COLORS_TO_DUAL_LAND[cp]}\n`;
    }
    return resp;
  }
  if (qtdColor == 2) {
    let color = validPair(colorArr[0],colorArr[1]);
    return `//Dual Land: 1\n1 ${COLORS_TO_DUAL_LAND[color]}\n`;
  }
}

module.exports = getDuals;

},{"../utility-functions":18}],7:[function(require,module,exports){
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

const ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];

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

function getFetchLands(colorArr) {
  const qtdColor = colorArr.length;

  let resp = '//Fetch Land: ';
  if (qtdColor === 5) {
    resp += '10\n';
    for (c of Object.keys(COLORS_TO_FETCH_LAND)) {
      resp += `1 ${COLORS_TO_FETCH_LAND[c]}\n`;
    }
    return resp
  }
  if (qtdColor === 4) {
    resp += '6\n';
    let excludedColorPair = ORDER_COLOR.filter(value => !colorArr.includes(value));
    for (colorPair of Object.keys(COLORS_TO_FETCH_LAND)) {
      if(!colorPair.includes(excludedColorPair)) {
        resp += `1 ${COLORS_TO_FETCH_LAND[colorPair]}\n`;
      }
    }
    return resp;
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
  } else if (qtdColor === 1) {
    return '';
  }
  return resp;
}


module.exports = getFetchLands;

},{}],8:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

module.exports = getFilterLands;

},{"../utility-functions":18}],9:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

function getManLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`;
    return `//Man Land: 1\n1 ${COLORS_TO_MAN_LAND[color]}\n`;
  }
  return '';
}

module.exports = getManLands;

},{"../utility-functions":18}],10:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

module.exports = getManaRamp;

},{"../utility-functions":18}],11:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

module.exports = getOtherLands;

},{"../utility-functions":18}],12:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

module.exports = getPainLands;

},{"../utility-functions":18}],13:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

function getScryLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = validPair(colorArr[0],colorArr[1]);
    return `//Scry Land: 1\n1 ${COLORS_TO_SCRY_LAND[color]}\n`;
  }
  return '';
}

module.exports = getScryLands;

},{"../utility-functions":18}],14:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];

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

module.exports = getShockLands;

},{"../utility-functions":18}],15:[function(require,module,exports){
const COLORS_TO_TRI_LAND = {
  whitebluegreen: 'Seaside Citadel',
  whiteblueblack: 'Arcane Sanctum',
  blueblackred: 'Crumbling Necropolis',
  blackredgreen: 'Savage Lands',
  whiteredgreen: 'Jungle Shrine',
  whiteblackgreen: 'Indatha Triome',
  whitebluered: 'Raugrin Triome',
  blueblackgreen: 'Zagoth Triome',
  whiteblackred: 'Savai Triome',
  blueredgreen: 'Ketria Triome',
};

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

module.exports = getTriLands;

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
const getBasicLands = require('./lands-code/basic-lands');
const getFetchLands = require('./lands-code/fetch-lands');
const getDuals = require('./lands-code/dual-lands');
const getShockLands = require('./lands-code/shock-lands');
const getPainLands = require('./lands-code/pain-lands');
const getManLands = require('./lands-code/man-lands');
const getFilterLands = require('./lands-code/filter-lands');
const getOtherLands = require('./lands-code/other-lands');
const getTriLands = require('./lands-code/tri-lands');
const getScryLands = require('./lands-code/scry-lands');
const getBattleLands = require('./lands-code/battle-lands');
const getCheckLands = require('./lands-code/check-lands');
const getBounceLands = require('./lands-code/bounce-lands');
const getAnyColorLand = require('./lands-code/any-color-lands');
const getUtilityLand = require('./lands-code/utility-lands');
const getManaRamp = require('./lands-code/mana-ramp');

document.addEventListener('DOMContentLoaded', function resetView() {
  const inputList = document.getElementsByTagName('input');
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].checked = false;
  }
  document.getElementById('output').value = 'Click to copy the lands';
});

window.copyToClipboard = function (obj) {

  event.preventDefault();

  const copyText = document.getElementById('output');

  if (copyText.value !== 'Click to copy the lands') {
    navigator.clipboard.writeText(copyText.value);
    console.log("Copied the text: " + copyText.value);
    showSnackbar();
  }
}

const checked = {
  white: false, blue: false, black: false, green: false, red: false
};

const ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];

window.onChecked = function (obj) {
  const key = obj.name;
  const value = obj.checked;
  const colorArr = [];
  checked[key] = value;
  for (const c of ORDER_COLOR) {
    if (checked[c]) {
      colorArr.push(c);
    }
  }
  if (colorArr.length >= 1) {
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
    getFetchLands(colorArr),
    getDuals(colorArr),
    getShockLands(colorArr),
    getPainLands(colorArr),
    getManLands(colorArr),
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

  //const qtdRows = resp.split(/\r\n|\r|\n/).length;
  //document.getElementById('output').rows = qtdRows;
  document.getElementById('output').value = resp;

}

let detail_checked = false;

window.check_icon = function () {
  detail_checked = !detail_checked;
  if(detail_checked){
    document.getElementById('detail').style.backgroundColor = "green";
  }else{
    document.getElementById('detail').style.backgroundColor = "red";
  }
}


function showSnackbar() {
  // Get the snackbar DIV
  var snackbar = document.getElementById("snackbar");

  // Add the "show" class to DIV
  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

},{"./lands-code/any-color-lands":1,"./lands-code/basic-lands":2,"./lands-code/battle-lands":3,"./lands-code/bounce-lands":4,"./lands-code/check-lands":5,"./lands-code/dual-lands":6,"./lands-code/fetch-lands":7,"./lands-code/filter-lands":8,"./lands-code/man-lands":9,"./lands-code/mana-ramp":10,"./lands-code/other-lands":11,"./lands-code/pain-lands":12,"./lands-code/scry-lands":13,"./lands-code/shock-lands":14,"./lands-code/tri-lands":15,"./lands-code/utility-lands":16}],18:[function(require,module,exports){
//Return pair of valid color
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
//Return all valid pair of 3 or 4 color 
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

module.exports.validPair = function (color1, color2) {
  const allColorPairValid = ['whiteblue', 'blueblack', 'blackred', 'redgreen',
                            'greenwhite', 'whiteblack', 'bluered',
                            'blackgreen', 'redwhite', 'greenblue'];
  if (allColorPairValid.includes(`${color1}${color2}`)) {
    return `${color1}${color2}`;
  } else {
    return `${color2}${color1}`;
  }
};

module.exports.getColorPair = function (colorArr) {
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
};

},{}]},{},[17]);
