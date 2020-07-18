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
