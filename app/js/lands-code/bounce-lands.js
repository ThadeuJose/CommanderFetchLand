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
