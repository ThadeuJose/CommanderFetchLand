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
