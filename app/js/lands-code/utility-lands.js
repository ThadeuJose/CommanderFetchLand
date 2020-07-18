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
