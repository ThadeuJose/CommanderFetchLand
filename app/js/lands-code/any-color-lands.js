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
