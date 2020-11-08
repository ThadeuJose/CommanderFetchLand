const LandsRepository = require('../LandsRepository');

const COLORS_TO_CROWD_LAND = {
  whiteblue: 'Sea of Clouds',
  blueblack: 'Morphic Pool',
  blackred: 'Luxury Suite',
  redgreen: 'Spire Garden',
  greenwhite: 'Bountiful Promenade',
  whiteblack: 'Vault of Champions',
  bluered: 'Training Center',
  blackgreen: 'Undergrowth Stadium',
  redwhite: 'Spectator Seating',
  greenblue: 'Rejuvenating Springs',
};

function getCrowdLands(colorManager) {
  const landsRepository = new LandsRepository('Crowd Lands');
  if (colorManager.qtdColor() === 2) {
    const colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, COLORS_TO_CROWD_LAND[colorPair]);
  }
  return landsRepository;
}

module.exports.getCrowdLands = getCrowdLands;
