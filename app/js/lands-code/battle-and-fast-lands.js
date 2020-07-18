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
