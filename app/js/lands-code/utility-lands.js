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
