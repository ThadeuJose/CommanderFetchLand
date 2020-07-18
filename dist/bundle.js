(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports =  class ColorManager {
  constructor() {
    this.colorArr = [];
    this.ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];
    this.allValidColorPair = ['whiteblue', 'blueblack', 'blackred', 'redgreen',
                              'greenwhite', 'whiteblack', 'bluered',
                              'blackgreen', 'redwhite', 'greenblue'];
  }

  addColor(name){
    if(!this.colorArr.includes(name)) {
      this.colorArr.push(name);
      if(this.qtdColor() >= 2) {
        this.colorArr = this.orderArrayByColor(this.colorArr, this.ORDER_COLOR);
      }
    }
  }

  orderArrayByColor(arr, order_array){
    let auxArr = arr;
    let resp = [];
    for (var elem of order_array) {
      if(auxArr.includes(elem)){
        resp.push(elem);
      }
    }
    return resp
  }

  removeColor(name){
    this.colorArr = this.colorArr.filter(item => item !== name)
  }

  qtdColor(){
    return this.colorArr.length
  }

  hasColor(color){
    return this.colorArr.indexOf(color) !== -1;
  }

  //return Valid pairs
  fixPair(color1, color2) {
    if (this.allValidColorPair.includes(`${color1}${color2}`)) {
      return `${color1}${color2}`;
    }

    return `${color2}${color1}`;

  }

  getAllColors(){
    return this.ORDER_COLOR;
  }

  //Return all valid pair
  getAllColorPairs() {
    if (this.qtdColor() === 1) {
      return [this.colorArr[0]];
    }

    if (this.qtdColor() === 2) {
      return [this.fixPair(this.colorArr[0], this.colorArr[1])];
    }

    if (this.qtdColor() === 3) {
      return [this.fixPair(this.colorArr[0], this.colorArr[1]), this.fixPair(this.colorArr[0], this.colorArr[2]),
              this.fixPair(this.colorArr[1], this.colorArr[2]),
              ];
    }

    if (this.qtdColor() === 4) {
      return [this.fixPair(this.colorArr[0], this.colorArr[1]),this.fixPair(this.colorArr[0], this.colorArr[2]), this.fixPair(this.colorArr[0], this.colorArr[3]),
              this.fixPair(this.colorArr[1], this.colorArr[2]), this.fixPair(this.colorArr[1], this.colorArr[3]),
              this.fixPair(this.colorArr[2], this.colorArr[3])];
    }

    if (this.qtdColor() === 5) {
      return this.allValidColorPair;
    }

  }



}

},{}],2:[function(require,module,exports){
module.exports =  class LandsRepository {
  constructor(title) {
    this.title = title;
    this.lands = {};
  }

  addLand(name,qtd) {
    this.lands[qtd] = name;
  }

  addDictLands(dict){
    this.lands = Object.assign({}, this.lands, dict);
  }

  getDictLands() {
    return this.lands;
  }

  qtdLands() {
    if(this.isEmpty()){
      return 0;
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return Object.values(this.lands).reduce(reducer);
  }

  isEmpty() {
    let obj = this.lands;
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }

  getAllLands() {
    let resp = [];
    for (let [key, value] of Object.entries(this.lands)) {
      resp.push([value,key]);
    }
    return resp;
  }

}

},{}],3:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

const COLORS_TO_CANOPY_LAND = {
  greenwhite: 'Horizon Canopy',
  whiteblack: 'Silent Clearing',
  bluered: 'Fiery Islet',
  blackgreen: 'Nurturing Peatland',
  redwhite: 'Sunbaked Canyon',
  greenblue: 'Waterlogged Grove',
};

function getAnyColorLand(colorManager) {
  let landsRepository = new LandsRepository('Any Color Lands');
  if (colorManager.qtdColor() === 1) {
    return landsRepository;
  }

  if (colorManager.qtdColor() === 4) {
    landsRepository.addLand(1, 'Command Tower');
    landsRepository.addLand(1, 'Mana Confluence');
    landsRepository.addLand(1, getCanopyLand(colorManager));
    return landsRepository;
  } else {
    landsRepository.addLand(1, 'Command Tower');
    landsRepository.addLand(1, 'Mana Confluence');
    landsRepository.addLand(1, 'Reflecting Pool');
    landsRepository.addLand(1, getCanopyLand(colorManager));
    return landsRepository;
  }
}

function getCanopyLand(colorManager) {
  const cityOfBrass = 'City of Brass';

  if(colorManager.qtdColor() === 5) {
    return COLORS_TO_CANOPY_LAND['greenblue'];
  }

  let validPairs = colorManager.getAllColorPairs();
  for (var pair of validPairs) {
    if(pair in COLORS_TO_CANOPY_LAND) {
      return COLORS_TO_CANOPY_LAND[pair];
    }
  }

  return cityOfBrass;

}

module.exports.getAnyColorLand = getAnyColorLand;

},{"../LandsRepository":2}],4:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

const COLOR_TO_BASIC_LAND = {
  white: 'Plains',
  blue: 'Island',
  black: 'Swamp',
  red: 'Mountain',
  green: 'Forest',
};

function getBasicLands(colorManager) {
  if (colorManager.qtdColor() === 5) {
    let landsRepository = new LandsRepository('Basic Lands');
    const qtdArr = [3, 3, 3, 2, 3];
    const colorArr = colorManager.getAllColors();
    for (const [index, color]  of colorArr.entries()) {
      let qtd = qtdArr[index]
      let land = COLOR_TO_BASIC_LAND[color];
      landsRepository.addLand(qtd, land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 4) {
    let landsRepository = new LandsRepository('Basic Lands');
    const qtdArr = [3, 3, 2, 1];
    let priorityQueue = ['green', 'black', 'blue', 'white', 'red']
    let intersection = priorityQueue.filter(function(color) {
                                      return colorManager.hasColor(color);
                                    });
    for (const [index, color]  of intersection.entries()) {
        const qtd = qtdArr[index]
        const land = COLOR_TO_BASIC_LAND[color];
        landsRepository.addLand(qtd,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 3) {
    let landsRepository = new LandsRepository('Basic Lands');
    for (color of colorManager.colorArr) {
      const qtd = 3
      const land = COLOR_TO_BASIC_LAND[color];
      landsRepository.addLand(qtd,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 2) {
    let landsRepository = new LandsRepository('Basic Lands');
    for (color of colorManager.colorArr) {
      const qtd = 6
      const land = COLOR_TO_BASIC_LAND[color];
      landsRepository.addLand(qtd,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 1) {
    return monoBase(colorManager.colorArr[0]);
  }

}

function monoBase(color) {
  let landsRepository = new LandsRepository('Lands');
  landsRepository.addLand(1,'Arch of Orazca');
  landsRepository.addLand(1,'Dust Bowl');
  if(color !== 'red'){
      landsRepository.addLand(1,'Strip Mine');
    }
  landsRepository.addLand(1,'Scavenger Grounds');
  landsRepository.addLand(1,'Myriad Landscape');
  landsRepository.addLand(1,"Rogue's Passage");
  if(color !== 'red'){
    landsRepository.addLand(1,'Nykthos, Shrine to Nyx');
  }

  if(color == 'white'){
    landsRepository.addLand(1,'Sea Gate Wreckage');
    landsRepository.addLand(1,'Mikokoro, Center of the Sea');
    landsRepository.addLand(1,'Endless Sands');
    landsRepository.addLand(1,'Terrain Generator');
    landsRepository.addLand(1,'Emeria, the Sky Ruin');
    landsRepository.addLand(1,'Secluded Steppe');
    landsRepository.addLand(1,'Mistveil Plains');
    landsRepository.addLand(1,'Drifting Meadow');
    landsRepository.addLand(1,'Desert of the True');
    landsRepository.addLand(1,'Castle Ardenvale');
    landsRepository.addLand(21,'Plains');
  }

  if(color == 'blue'){
    landsRepository.addLand(1,'Reliquary Tower');
    landsRepository.addLand(1,'Blast Zone');
    landsRepository.addLand(1,'Winding Canyons');
    landsRepository.addLand(1,'Mirrorpool');
    landsRepository.addLand(1,'Mystic Sanctuary');
    landsRepository.addLand(1,'Lonely Sandbar');
    landsRepository.addLand(1,'Remote Isle');
    landsRepository.addLand(1,'Desert of The Mindful');
    landsRepository.addLand(1,'Castle Vantress');
    landsRepository.addLand(22,'Island');

  }
  if(color == 'black'){
    landsRepository.addLand(1,'Vesuva');
    landsRepository.addLand(1,"Thespian's Stage");
    landsRepository.addLand(1,'Blast Zone');
    landsRepository.addLand(1,'Westvale Abbey');
    landsRepository.addLand(1,'Phyrexian Tower');
    landsRepository.addLand(1,'Bojuka Bog');
    landsRepository.addLand(1,'Cabal Stronghold');
    landsRepository.addLand(1,'Cabal Coffers');
    landsRepository.addLand(1,'Castle Lochtwain');
    landsRepository.addLand(22,'Swamp');
  }
  if(color == 'red'){
    landsRepository.addLand(1,'Sea Gate Wreckage');
    landsRepository.addLand(1,'Mikokoro, Center of the Sea');
    landsRepository.addLand(1,'Blast Zone');
    landsRepository.addLand(1,'Kheer Keep');
    landsRepository.addLand(1,"Thespian's Stage");
    landsRepository.addLand(1,'Valakut, the Molten Pinnacle');
    landsRepository.addLand(1,'Flamekin Village');
    landsRepository.addLand(1,'Shinka, the Bloodsoaked Keep');
    landsRepository.addLand(1,'Forgotten Cave');
    landsRepository.addLand(1,'Smoldering Crater');
    landsRepository.addLand(1,'Desert of The Fervent');
    landsRepository.addLand(1,'Castle Embereth');
    landsRepository.addLand(21,'Mountain');
  }
  if(color == 'green'){
    landsRepository.addLand(1,'Endless Sands');
    landsRepository.addLand(1,'Blighted Woodland');
    landsRepository.addLand(1,'Miren, the Moaning Well');
    landsRepository.addLand(1,'Winding Canyons');
    landsRepository.addLand(1,'Treetop Village');
    landsRepository.addLand(1,'Oran-rief, the Vastwood');
    landsRepository.addLand(1,'Tranquil Thicket');
    landsRepository.addLand(1,'Slippery Karst');
    landsRepository.addLand(1,"Desert of the Indomitable");
    landsRepository.addLand(1,'Castle Garenbrig');
    landsRepository.addLand(21,'Forest');
  }
  return landsRepository;
}


module.exports.getBasicLands = getBasicLands;

},{"../LandsRepository":2}],5:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

const COLORS_TO_BATTLE_LAND = {
  whiteblue: 'Prairie Stream',
  blueblack: 'Sunken Hollow',
  blackred: 'Smoldering Marsh',
  redgreen: 'Cinder Glade',
  greenwhite: 'Canopy Vista ',
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

function getBattleLands(colorManager) {
  let landsRepository = new LandsRepository('Battle or Fast Land');
  if (colorManager.qtdColor() === 4) {
    landsRepository = new LandsRepository('Fast Land');
    const maxQtdLands = 2;
    const colorPairs = colorManager.getAllColorPairs();
    for (var colorPair of colorPairs) {
      if(COLORS_TO_BATTLE_LAND[colorPair]){
        landsRepository.addLand(1, COLORS_TO_BATTLE_LAND[colorPair]);
      }
      if(landsRepository.qtdLands() == maxQtdLands){
        return landsRepository;
      }
    }
  }
  if (colorManager.qtdColor() === 2) {
    landsRepository = new LandsRepository('Battle or Fast Land');
    const colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, COLORS_TO_BATTLE_AND_FAST_LAND[colorPair]);
    return landsRepository;
  }
  return landsRepository;
}

module.exports.getBattleLands = getBattleLands;

},{"../LandsRepository":2}],6:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getBounceLands(colorManager) {
  let landsRepository = new LandsRepository('Bounce Land');
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_BOUNCE_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getBounceLands = getBounceLands;

},{"../LandsRepository":2}],7:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getCheckLands(colorManager) {
  let landsRepository = new LandsRepository('Check Land');
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_CHECK_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getCheckLands = getCheckLands;

},{"../LandsRepository":2}],8:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getDualLands(colorManager) {
  if (colorManager.qtdColor() > 1) {
    let landsRepository = new LandsRepository('Dual Land');
    if (colorManager.qtdColor() === 4) {
      for (pair of colorManager.getAllColorPairs()) {
        landsRepository.addLand(1, COLORS_TO_DUAL_LAND[pair]);
        if (landsRepository.qtdLands() === 4) {
          return landsRepository;
        }
      }
    }

    for (pair of colorManager.getAllColorPairs()) {
      landsRepository.addLand(1, COLORS_TO_DUAL_LAND[pair]);
    }
    return landsRepository;
  }

}

module.exports.getDualLands = getDualLands;

},{"../LandsRepository":2}],9:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getFetchLands(colorManager) {
  if (colorManager.qtdColor() === 5) {
    let landsRepository = new LandsRepository('Fetch Land');
    for (land of Object.values(COLORS_TO_FETCH_LAND)) {
      landsRepository.addLand(1,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 4) {
    let landsRepository = new LandsRepository('Fetch Land');
    let excludedColor = colorManager.getAllColors().filter(value => !colorManager.colorArr.includes(value));
    let AllValidColorsPairs = Object.keys(COLORS_TO_FETCH_LAND).filter(value => value.indexOf(excludedColor) === -1);
    for (colorPair of AllValidColorsPairs) {
        landsRepository.addLand(1, COLORS_TO_FETCH_LAND[colorPair]);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 3) {
    let landsRepository = new LandsRepository('Fetch Land');
    for (colorPair of colorManager.getAllColorPairs()) {
      landsRepository.addLand(1,COLORS_TO_FETCH_LAND[colorPair]);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 2) {
    let landsRepository = new LandsRepository('Fetch Land');
    let colors = colorManager.colorArr;
    let AllValidColorPairs = Object.keys(COLORS_TO_FETCH_LAND).filter(
      value => value.indexOf(colors[0]) !== -1 || value.indexOf(colors[1]) !== -1);
    for (colorPair of AllValidColorPairs) {
      landsRepository.addLand(1,COLORS_TO_FETCH_LAND[colorPair]);
    }
    return landsRepository;
  }
}

module.exports.getFetchLands = getFetchLands;

},{"../LandsRepository":2}],10:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getFilterLands(colorManager) {
  let landsRepository = new LandsRepository('Filter Land');
  if (colorManager.qtdColor() === 4 || colorManager.qtdColor() === 3) {
    const maxQtdLands = 3;
    const colorPairs = colorManager.getAllColorPairs();
    for (var colorPair of colorPairs) {
      if(COLORS_TO_FILTER_LAND_1[colorPair]){
        landsRepository.addLand(1, COLORS_TO_FILTER_LAND_1[colorPair]);
      }
      if(landsRepository.qtdLands() == maxQtdLands){
        break;
      }
    }
  }
  if (colorManager.qtdColor() === 2) {
    const colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, COLORS_TO_FILTER_LAND_1[colorPair]);
    if (colorPair in COLORS_TO_FILTER_LAND_2){
      landsRepository.addLand(1, COLORS_TO_FILTER_LAND_2[colorPair]);
    } else {
      landsRepository.addLand(1, 'Unknown Shores');
    }
  }
  return landsRepository;
}

module.exports.getFilterLands = getFilterLands;

},{"../LandsRepository":2}],11:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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


function getManLands(colorManager) {
  let landsRepository = new LandsRepository('Man Land');
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_MAN_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getManLands = getManLands;

},{"../LandsRepository":2}],12:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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


function getManaRamp(colorManager){
  let landsRepository = new LandsRepository('Mana Ramp');
  landsRepository.addLand(1, 'Sol Ring');
  landsRepository.addLand(1, 'Chromatic Lantern');
  landsRepository.addLand(1, "Commander's Sphere");
  landsRepository.addLand(1, 'Darksteel Ingot');

  if (colorManager.qtdColor() === 5) {
    landsRepository.addLand(1, 'Spectral Searchlight');
    landsRepository.addLand(1, 'Vessel of Endless Rest');
    landsRepository.addLand(1, 'Coalition Relic');
    landsRepository.addLand(1, 'Fellwar Stone');
    landsRepository.addLand(1, 'Mana Geode');
    landsRepository.addLand(1, 'Manalith');

  }
  if (colorManager.qtdColor() === 4 || colorManager.qtdColor() === 3) {
    let colorPairs = colorManager.getAllColorPairs();
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[0]]} Locket`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[1]]} Locket`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[2]]} Locket`);
    landsRepository.addLand(1, 'Fellwar Stone');
    landsRepository.addLand(1, 'Mana Geode');
    landsRepository.addLand(1, 'Manalith');
  }
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Signet`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Keyrune`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Cluestone`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Locket`);
    landsRepository.addLand(1, `Talisman of ${COLORS_TO_PAIN_TALISMAN[colorPair]}`);
    landsRepository.addLand(1, 'Gilded Lotus');
  }
  return landsRepository;
}

module.exports.getManaRamp = getManaRamp;

},{"../LandsRepository":2}],13:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getOtherLands(colorManager) {
  let landsRepository = new LandsRepository('Other Lands(Scry lands)');
  if (colorManager.qtdColor() == 3) {
    let colorPairs = colorManager.getAllColorPairs();
    for (var colorPair of colorPairs) {
      landsRepository.addLand(1,COLORS_TO_SCRY_LAND[colorPair]);
    }
  }
  return landsRepository;
}

module.exports.getOtherLands = getOtherLands;

},{"../LandsRepository":2}],14:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

const COLORS_TO_PAIN_LAND = {
  whiteblue: 'Adarkar Wastes',
  blueblack: 'Underground River',
  blackred: 'Sulfurous Springs',
  redgreen: 'Karplusan Forest',
  greenwhite: 'Brushland',
  whiteblack: 'Caves of Koilos',
  bluered: 'Shivan Reef',
  blackgreen: 'Llanowar Wastes',
  redwhite: 'Battlefield Forge',
  greenblue: 'Yavimaya Coast',
};

function getPainLands(colorManager) {
  let landsRepository = new LandsRepository('Pain Land');
  if (colorManager.qtdColor() === 4 || colorManager.qtdColor() === 3) {
    const maxQtdLands = 3;
    const colorPairs = colorManager.getAllColorPairs();
    for (var colorPair of colorPairs) {
      if(COLORS_TO_PAIN_LAND[colorPair]){
        landsRepository.addLand(1, COLORS_TO_PAIN_LAND[colorPair]);
      }
      if(landsRepository.qtdLands() == maxQtdLands){
        return landsRepository;
      }
    }
  }
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_PAIN_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getPainLands = getPainLands;

},{"../LandsRepository":2}],15:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getScryLands(colorManager) {
  let landsRepository = new LandsRepository('Scry Land');
  if (colorManager.qtdColor() == 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_SCRY_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getScryLands = getScryLands;

},{"../LandsRepository":2}],16:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

const COLORS_TO_SHOCK_LAND = {
  whiteblue: 'Hallowed Fountain',
  blueblack: 'Watery Grave',
  blackred: 'Blood Crypt',
  redgreen: 'Stomping Ground',
  greenwhite: 'Temple Garden',
  whiteblack: 'Godless Shrine',
  bluered: 'Steam Vents',
  blackgreen: 'Overgrown Tomb',
  redwhite: 'Sacred Foundry',
  greenblue: 'Breeding Pool',
};

function getShockLands(colorManager) {
  let landsRepository = new LandsRepository('Shock Land');
  if (colorManager.qtdColor() > 1 && colorManager.qtdColor() < 5) {
    for (pair of colorManager.getAllColorPairs()) {
      landsRepository.addLand(1, COLORS_TO_SHOCK_LAND[pair]);
    }
  }
  return landsRepository;

}

module.exports.getShockLands = getShockLands;

},{"../LandsRepository":2}],17:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getTriLands(colorManager) {
  let landsRepository = new LandsRepository('Tri Land');
  let colorArr = colorManager.colorArr;
  if (colorManager.qtdColor() === 3) {
    color = colorArr.slice(0,3).join('');
    landsRepository.addLand(1, COLORS_TO_TRI_LAND[color]);
  }
  if (colorManager.qtdColor() === 4) {
    color_1 = colorArr.slice(0,3).join('');
    color_2 = colorArr.slice(1,4).join('');
    landsRepository.addLand(1, COLORS_TO_TRI_LAND[color_1]);
    landsRepository.addLand(1, COLORS_TO_TRI_LAND[color_2]);
  }
  return landsRepository;
}

module.exports.getTriLands = getTriLands;

},{"../LandsRepository":2}],18:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

function getUtilityLand(colorManager){
  let landsRepository = new LandsRepository('Utility Land');
  if(colorManager.qtdColor() === 4){
    landsRepository.addLand(4, 'UTILITY LAND');
  }
  if (colorManager.qtdColor() === 3) {
    landsRepository.addLand(6, 'UTILITY LAND');
  }
  if (colorManager.qtdColor() === 2) {
    landsRepository.addLand(5, 'UTILITY LAND');
  }
  return landsRepository;
}

module.exports.getUtilityLand = getUtilityLand;

},{"../LandsRepository":2}],19:[function(require,module,exports){
const getAnyColorLand = require('./lands-code/any-color-lands').getAnyColorLand;
const getBasicLands = require('./lands-code/basic-lands').getBasicLands;
const getBattleLands = require('./lands-code/battle-and-fast-lands').getBattleLands;
const getBounceLands = require('./lands-code/bounce-lands').getBounceLands;
const getCheckLands = require('./lands-code/check-lands').getCheckLands;
const getDualLands = require('./lands-code/dual-lands').getDualLands;
const getFetchLands = require('./lands-code/fetch-lands').getFetchLands;
const getFilterLands = require('./lands-code/filter-lands').getFilterLands;
const getManLands = require('./lands-code/man-lands').getManLands;
const getManaRamp = require('./lands-code/mana-ramp').getManaRamp;
const getOtherLands = require('./lands-code/other-lands').getOtherLands;
const getPainLands = require('./lands-code/pain-lands').getPainLands;
const getScryLands = require('./lands-code/scry-lands').getScryLands;
const getShockLands = require('./lands-code/shock-lands').getShockLands;
const getTriLands = require('./lands-code/tri-lands').getTriLands;
const getUtilityLand = require('./lands-code/utility-lands').getUtilityLand;


const LandsRepository = require('./LandsRepository');
const ColorManager = require('./ColorManager');

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


let detail_checked = false;


let colorManager = new ColorManager();
let colorArr = [];

window.check_icon = function () {
  detail_checked = !detail_checked;
  if(detail_checked){
    document.getElementById('detail').style.backgroundColor = "green";
    document.getElementById('output').value = printLandsWithTitle(colorManager);
  }else{
    document.getElementById('detail').style.backgroundColor = "red";
    document.getElementById('output').value = printLandsNoTitle(colorManager);
  }
}


window.onChecked = function (obj) {
  const color = obj.name;
  const isChecked = obj.checked;

  if (isChecked) {
    colorManager.addColor(color);
  } else {
    colorManager.removeColor(color);
  }
  colorArr = colorManager.colorArr;

  if (colorArr.length >= 1) {
    if (detail_checked) {
      document.getElementById('output').value = printLandsWithTitle(colorManager);
    } else {
      document.getElementById('output').value = printLandsNoTitle(colorManager);
    }

  } else {
    document.getElementById('output').value = 'Click to copy the lands';
  }
}

function printLandsNoTitle(colorManager) {
  let resp = '';
  let landsRepository = new LandsRepository('Lands');

  if(colorManager.qtdColor() > 0){
    if(colorManager.qtdColor() > 1){
      landsRepository.addDictLands(getDualLands(colorManager).getDictLands());
      landsRepository.addDictLands(getFetchLands(colorManager).getDictLands());
      landsRepository.addDictLands(getShockLands(colorManager).getDictLands());
      landsRepository.addDictLands(getPainLands(colorManager).getDictLands());
      landsRepository.addDictLands(getManLands(colorManager).getDictLands());
      landsRepository.addDictLands(getFilterLands(colorManager).getDictLands());
      landsRepository.addDictLands(getOtherLands(colorManager).getDictLands());
      landsRepository.addDictLands(getTriLands(colorManager).getDictLands());
      landsRepository.addDictLands(getScryLands(colorManager).getDictLands());
      landsRepository.addDictLands(getBattleLands(colorManager).getDictLands());
      landsRepository.addDictLands(getCheckLands(colorManager).getDictLands());
      landsRepository.addDictLands(getBounceLands(colorManager).getDictLands());
      landsRepository.addDictLands(getAnyColorLand(colorManager).getDictLands());
    }
    resp += landsRepositoryToString(landsRepository);
    resp += landsRepositoryToString(getBasicLands(colorManager));
    resp += landsRepositoryToString(getUtilityLand(colorManager));
    resp += landsRepositoryToString(getManaRamp(colorManager));
  }

  return resp;
}

function printLandsWithTitle(colorManager) {
  let resp = '';
  if(colorManager.qtdColor() > 0){
    if(colorManager.qtdColor() > 1){
      resp += landsRepositoryToString(getDualLands(colorManager));
      resp += landsRepositoryToString(getFetchLands(colorManager));
      resp += landsRepositoryToString(getShockLands(colorManager));
      resp += landsRepositoryToString(getPainLands(colorManager));
      resp += landsRepositoryToString(getManLands(colorManager));
      resp += landsRepositoryToString(getFilterLands(colorManager));
      resp += landsRepositoryToString(getOtherLands(colorManager));
      resp += landsRepositoryToString(getTriLands(colorManager));
      resp += landsRepositoryToString(getScryLands(colorManager));
      resp += landsRepositoryToString(getBattleLands(colorManager));
      resp += landsRepositoryToString(getCheckLands(colorManager));
      resp += landsRepositoryToString(getBounceLands(colorManager));
      resp += landsRepositoryToString(getAnyColorLand(colorManager));
    }
    resp += landsRepositoryToString(getBasicLands(colorManager));
    resp += landsRepositoryToString(getUtilityLand(colorManager));
    resp += landsRepositoryToString(getManaRamp(colorManager));
  }
  return resp;
}

function landsRepositoryToString(landsRepository) {
  let resp = '';

  if (!landsRepository.isEmpty()) {
    resp = '//' + landsRepository.title + ': ' + landsRepository.qtdLands() +'\n';
    for (var elem of landsRepository.getAllLands()) {
      resp+=elem.join(' ')+'\n';
    }
    resp+='\n';
  }

  return resp;
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

},{"./ColorManager":1,"./LandsRepository":2,"./lands-code/any-color-lands":3,"./lands-code/basic-lands":4,"./lands-code/battle-and-fast-lands":5,"./lands-code/bounce-lands":6,"./lands-code/check-lands":7,"./lands-code/dual-lands":8,"./lands-code/fetch-lands":9,"./lands-code/filter-lands":10,"./lands-code/man-lands":11,"./lands-code/mana-ramp":12,"./lands-code/other-lands":13,"./lands-code/pain-lands":14,"./lands-code/scry-lands":15,"./lands-code/shock-lands":16,"./lands-code/tri-lands":17,"./lands-code/utility-lands":18}]},{},[19]);
