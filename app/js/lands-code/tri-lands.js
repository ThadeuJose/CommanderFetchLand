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
