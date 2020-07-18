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
  if (colorManager.qtdColor() === 3) {
    const MAX_QTD_LANDS = 3;
    const colorPairs = colorManager.getAllColorPairs();
    for (var colorPair of colorPairs) {
      if(COLORS_TO_PAIN_LAND[colorPair]){
        landsRepository.addLand(1, COLORS_TO_PAIN_LAND[colorPair]);
      }
      if(landsRepository.qtdLands() == MAX_QTD_LANDS){
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
