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



function getAnyColorLand_NEW(colorManager) {
  let landsRepository = new LandsRepository('Any Color Lands');
  if (colorManager.qtdColor() === 1) {
    return landsRepository;
  }

  if (colorManager.qtdColor() === 4) {
    landsRepository.addLand(1, 'Command Tower');
    landsRepository.addLand(1, 'Mana Confluence');
    landsRepository.addLand(1, getCanopyLand_NEW(colorManager));
    return landsRepository;
  } else {
    landsRepository.addLand(1, 'Command Tower');
    landsRepository.addLand(1, 'Mana Confluence');
    landsRepository.addLand(1, 'Reflecting Pool');
    landsRepository.addLand(1, getCanopyLand_NEW(colorManager));
    return landsRepository;
  }
}

function getCanopyLand_NEW(colorManager) {
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
module.exports.getAnyColorLand_NEW = getAnyColorLand_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],4:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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




function getBasicLands_NEW(colorManager) {
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
      const qtd = 7
      const land = COLOR_TO_BASIC_LAND[color];
      landsRepository.addLand(qtd,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 1) {
    return monoBase_NEW(colorManager.colorArr[0]);
  }

}

function monoBase_NEW(color) {
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
module.exports.getBasicLands_NEW = getBasicLands_NEW;

},{"../LandsRepository":2}],5:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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

function getBattleLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';
  if (qtdColor === 4) {
    resp += '//Fast Land: 2\n';
    const colorPairs = getColorPair(colorArr);
    let quantLand = 0;
    for (var c of colorPairs) {
      if(COLORS_TO_BATTLE_LAND[c]){
        resp += `1 ${COLORS_TO_BATTLE_LAND[c]}\n`;
        quantLand++;
      }
      if(quantLand == 2){
        break;
      }
    }
  } else if (qtdColor === 2) {
    resp += '//Battle or Fast Land: 1\n';
    const color = validPair(colorArr[0],colorArr[1]);
    resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[color]}\n`;
  }
  return resp;
}

function getBattleLands_NEW(colorManager) {
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
module.exports.getBattleLands_NEW = getBattleLands_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],6:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getBounceLands_NEW(colorManager) {
  let landsRepository = new LandsRepository('Bounce Land');
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_BOUNCE_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getBounceLands = getBounceLands;
module.exports.getBounceLands_NEW = getBounceLands_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],7:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getCheckLands_NEW(colorManager) {
  let landsRepository = new LandsRepository('Check Land');
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_CHECK_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getCheckLands = getCheckLands;
module.exports.getCheckLands_NEW = getCheckLands_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],8:[function(require,module,exports){
const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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



function getDualLands_NEW(colorManager) {
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

module.exports.getDualLands = getDuals;
module.exports.getDualLands_NEW = getDualLands_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],9:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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



function getFetchLands_NEW(colorManager) {
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
module.exports.getFetchLands_NEW = getFetchLands_NEW;

},{"../LandsRepository":2}],10:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getFilterLands_NEW(colorManager) {
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
module.exports.getFilterLands_NEW = getFilterLands_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],11:[function(require,module,exports){
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

function getManLands(colorArr, qtdColor = colorArr.length) {
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`;
    return `//Man Land: 1\n1 ${COLORS_TO_MAN_LAND[color]}\n`;
  }
  return '';
}

function getManLands_NEW(colorManager) {
  let landsRepository = new LandsRepository('Man Land');
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_MAN_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getManLands = getManLands;
module.exports.getManLands_NEW = getManLands_NEW;

},{"../LandsRepository":2}],12:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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
    let colorPairs = getColorPair(colorArr);
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


function getManaRamp_NEW(colorManager){
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
module.exports.getManaRamp_NEW = getManaRamp_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],13:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getOtherLands_NEW(colorManager) {
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
module.exports.getOtherLands_NEW = getOtherLands_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],14:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

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


function getPainLands_NEW(colorManager) {
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
module.exports.getPainLands_NEW = getPainLands_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],15:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

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

function getScryLands_NEW(colorManager) {
  let landsRepository = new LandsRepository('Scry Land');
  if (colorManager.qtdColor() == 2) {
    let colorPair = colorManager.getAllColorPairs()[0]
    landsRepository.addLand(1,COLORS_TO_SCRY_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getScryLands = getScryLands;
module.exports.getScryLands_NEW = getScryLands_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],16:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];

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


function getShockLands_NEW(colorManager) {
  let landsRepository = new LandsRepository('Shock Land');
  if (colorManager.qtdColor() > 1 && colorManager.qtdColor() < 5) {
    for (pair of colorManager.getAllColorPairs()) {
      landsRepository.addLand(1, COLORS_TO_SHOCK_LAND[pair]);
    }
  }
  return landsRepository;

}

module.exports.getShockLands = getShockLands;
module.exports.getShockLands_NEW = getShockLands_NEW;

},{"../LandsRepository":2,"../utility-functions":20}],17:[function(require,module,exports){
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

function getTriLands_NEW(colorManager) {
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
module.exports.getTriLands_NEW = getTriLands_NEW;

},{"../LandsRepository":2}],18:[function(require,module,exports){
const LandsRepository = require('../LandsRepository');

function getUtilityLand(colorArr, qtdColor = colorArr.length){
  let resp = '';
  if(qtdColor == 4){
    resp = '//Utility Land or Mono Color: 4\n4 [UTILITY LAND]\n'
  } else if (qtdColor == 3 || qtdColor == 2 ) {
    resp = '//Utility Land or Mono Color: 6\n6 [UTILITY LAND]\n'
  }
  return resp;
}

function getUtilityLand_NEW(colorManager){
  let landsRepository = new LandsRepository('Utility Land');
  if(colorManager.qtdColor() === 4){
    landsRepository.addLand(4, 'UTILITY LAND');
  }
  if (colorManager.qtdColor() === 3 || colorManager.qtdColor() === 2 ) {
    landsRepository.addLand(6, 'UTILITY LAND');
  }
  return landsRepository;
}

module.exports.getUtilityLand = getUtilityLand;
module.exports.getUtilityLand_NEW = getUtilityLand_NEW;

},{"../LandsRepository":2}],19:[function(require,module,exports){
const getBasicLands = require('./lands-code/basic-lands').getBasicLands;
const getFetchLands = require('./lands-code/fetch-lands').getFetchLands;
const getDuals = require('./lands-code/dual-lands').getDualLands;;
const getShockLands = require('./lands-code/shock-lands').getShockLands;
const getPainLands = require('./lands-code/pain-lands').getPainLands;
const getManLands = require('./lands-code/man-lands').getManLands;
const getFilterLands = require('./lands-code/filter-lands').getFilterLands;
const getOtherLands = require('./lands-code/other-lands').getOtherLands;
const getTriLands = require('./lands-code/tri-lands').getTriLands;
const getScryLands = require('./lands-code/scry-lands').getScryLands;
const getBattleLands = require('./lands-code/battle-and-fast-lands').getBattleLands;
const getCheckLands = require('./lands-code/check-lands').getCheckLands;
const getBounceLands = require('./lands-code/bounce-lands').getBounceLands;
const getAnyColorLand = require('./lands-code/any-color-lands').getAnyColorLand;
const getUtilityLand = require('./lands-code/utility-lands').getUtilityLand;
const getManaRamp = require('./lands-code/mana-ramp').getManaRamp;

const getAnyColorLand_NEW = require('./lands-code/any-color-lands').getAnyColorLand_NEW;
const getBasicLands_NEW = require('./lands-code/basic-lands').getBasicLands_NEW;
const getBattleLands_NEW = require('./lands-code/battle-and-fast-lands').getBattleLands_NEW;
const getBounceLands_NEW = require('./lands-code/bounce-lands').getBounceLands_NEW;
const getCheckLands_NEW = require('./lands-code/check-lands').getCheckLands_NEW;
const getDualLands_NEW = require('./lands-code/dual-lands').getDualLands_NEW;
const getFetchLands_NEW = require('./lands-code/fetch-lands').getFetchLands_NEW;
const getFilterLands_NEW = require('./lands-code/filter-lands').getFilterLands_NEW;
const getManLands_NEW = require('./lands-code/man-lands').getManLands_NEW;
const getManaRamp_NEW = require('./lands-code/mana-ramp').getManaRamp_NEW;
const getOtherLands_NEW = require('./lands-code/other-lands').getOtherLands_NEW;
const getPainLands_NEW = require('./lands-code/pain-lands').getPainLands_NEW;
const getScryLands_NEW = require('./lands-code/scry-lands').getScryLands_NEW;
const getShockLands_NEW = require('./lands-code/shock-lands').getShockLands_NEW;
const getTriLands_NEW = require('./lands-code/tri-lands').getTriLands_NEW;
const getUtilityLand_NEW = require('./lands-code/utility-lands').getUtilityLand_NEW;


const LandsRepository = require('./LandsRepository');
const ColorManager = require('./ColorManager');

document.addEventListener('DOMContentLoaded', function resetView() {
  const inputList = document.getElementsByTagName('input');
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].checked = false;
  }
  document.getElementById('output').value = 'Click to copy the lands';
  document.getElementById('output_NEW').value = 'Click to copy the lands';
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
    document.getElementById('output_NEW').value = printLandsWithTitle_NEW(colorManager);
  }else{
    document.getElementById('detail').style.backgroundColor = "red";
    document.getElementById('output_NEW').value = printLandsNoTitle_NEW(colorManager);
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
    printLands(colorArr);

    //NEW
    if (detail_checked) {
      document.getElementById('output_NEW').value = printLandsWithTitle_NEW(colorManager);
    } else {
      document.getElementById('output_NEW').value = printLandsNoTitle_NEW(colorManager);
    }

  } else {
    document.getElementById('output').value = 'Click to copy the lands';
    document.getElementById('output_NEW').value = 'Click to copy the lands';
  }
}

function printLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';

  resp = [
    getDuals(colorArr),
    getFetchLands(colorArr),
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
    getBasicLands(colorArr),
    getUtilityLand(colorArr),
    getManaRamp(colorArr),
  ].map((elem) => {
    if (elem) {
      return `${elem}\n`;
    } else {
      return '';
    }
  }).join('');

  document.getElementById('output').value = resp;

}

function printLandsNoTitle_NEW(colorManager) {
  let resp = '';
  let landsRepository = new LandsRepository('Lands');

  if(colorManager.qtdColor() > 0){
    if(colorManager.qtdColor() > 1){
      landsRepository.addDictLands(getDualLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getFetchLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getShockLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getPainLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getManLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getFilterLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getOtherLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getTriLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getScryLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getBattleLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getCheckLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getBounceLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getAnyColorLand_NEW(colorManager).getDictLands());
    }
    resp += landsRepositoryToString_NEW(landsRepository);
    resp += landsRepositoryToString_NEW(getBasicLands_NEW(colorManager));
    resp += landsRepositoryToString_NEW(getUtilityLand_NEW(colorManager));
    resp += landsRepositoryToString_NEW(getManaRamp_NEW(colorManager));
  }

  return resp;
}

function printLandsWithTitle_NEW(colorManager) {
  let resp = '';
  if(colorManager.qtdColor() > 0){
    if(colorManager.qtdColor() > 1){
      resp += landsRepositoryToString_NEW(getDualLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getFetchLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getShockLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getPainLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getManLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getFilterLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getOtherLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getTriLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getScryLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getBattleLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getCheckLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getBounceLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getAnyColorLand_NEW(colorManager));
    }
    resp += landsRepositoryToString_NEW(getBasicLands_NEW(colorManager));
    resp += landsRepositoryToString_NEW(getUtilityLand_NEW(colorManager));
    resp += landsRepositoryToString_NEW(getManaRamp_NEW(colorManager));
  }
  return resp;
}

function landsRepositoryToString_NEW(landsRepository) {
  let resp = '';

  if (!landsRepository.isEmpty()) {
    resp = '//' + landsRepository.title + ' :' + landsRepository.qtdLands() +'\n';
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

},{"./ColorManager":1,"./LandsRepository":2,"./lands-code/any-color-lands":3,"./lands-code/basic-lands":4,"./lands-code/battle-and-fast-lands":5,"./lands-code/bounce-lands":6,"./lands-code/check-lands":7,"./lands-code/dual-lands":8,"./lands-code/fetch-lands":9,"./lands-code/filter-lands":10,"./lands-code/man-lands":11,"./lands-code/mana-ramp":12,"./lands-code/other-lands":13,"./lands-code/pain-lands":14,"./lands-code/scry-lands":15,"./lands-code/shock-lands":16,"./lands-code/tri-lands":17,"./lands-code/utility-lands":18}],20:[function(require,module,exports){
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

},{}]},{},[19]);
