const LandsRepository = require('../LandsRepository');

const getColorPair = require('../utility-functions').getColorPair;
const validPair = require('../utility-functions').validPair;

const COLORS_TO_GUILD = {
  whiteblue: 'Azorius',
  blueblack: 'Dimir',
  blackred: 'Rakdos',
  redgreen: 'Gruul',
  greenwhite: 'Selesnya',
  whiteblack: 'Orzhov',
  bluered: 'Izzet',
  blackgreen: 'Golgari',
  redwhite: 'Boros',
  greenblue: 'Simic',
};

const COLORS_TO_PAIN_TALISMAN = {
  whiteblue: 'Progress',
  blueblack: 'Dominance',
  blackred: 'Indulgence',
  redgreen: 'Impulse',
  greenwhite: 'Unity',
  whiteblack: 'Hierarchy',
  bluered: 'Creativity ',
  blackgreen: 'Resilience',
  redwhite: 'Conviction',
  greenblue: 'Curiosity',
};

function getManaRamp(colorArr, qtdColor = colorArr.length){
  if (qtdColor == 5) {
    return `//Mana Ramp: 10
1 Sol Ring
1 Chromatic Lantern
1 Spectral Searchlight
1 Vessel of Endless Rest
1 Coalition Relic
1 Fellwar Stone
1 Mana Geode
1 Manalith
1 Commander's Sphere
1 Darksteel Ingot\n`;
  }else if (qtdColor == 4 || qtdColor == 3) {
    let colorPairs = getColorPair(colorArr);
    return `//Mana Ramp: 10
1 Sol Ring
1 Chromatic Lantern
1 ${COLORS_TO_GUILD[colorPairs[0]]} Locket
1 ${COLORS_TO_GUILD[colorPairs[1]]} Locket
1 ${COLORS_TO_GUILD[colorPairs[2]]} Locket
1 Fellwar Stone
1 Mana Geode
1 Manalith
1 Commander's Sphere
1 Darksteel Ingot\n`;
  }else if (qtdColor == 2) {
    let colorPair = validPair(colorArr[0],colorArr[1]);
    return `//Mana Ramp: 10
1 ${COLORS_TO_GUILD[colorPair]} Signet
1 ${COLORS_TO_GUILD[colorPair]} Keyrune
1 ${COLORS_TO_GUILD[colorPair]} Cluestone
1 ${COLORS_TO_GUILD[colorPair]} Locket
1 Talisman of ${COLORS_TO_PAIN_TALISMAN[colorPair]}
1 Commander's Sphere
1 Darksteel Ingot
1 Chromatic Lantern
1 Gilded Lotus
1 Sol Ring\n`;
  }
  return '';
}


function getManaRamp_NEW(colorManager){
  let landsRepository = new LandsRepository('Mana Ramp');
  landsRepository.addLand(1, 'Sol Ring');
  landsRepository.addLand(1, 'Chromatic Lantern');
  landsRepository.addLand(1, "Commander's Sphere");
  landsRepository.addLand(1, 'Darksteel Ingot');

  if (colorManager.qtdColor() === 5) {
    landsRepository.addLand(1, 'Spectral Searchlight');
    landsRepository.addLand(1, 'Vessel of Endless Rest');
    landsRepository.addLand(1, 'Coalition Relic');
    landsRepository.addLand(1, 'Fellwar Stone');
    landsRepository.addLand(1, 'Mana Geode');
    landsRepository.addLand(1, 'Manalith');

  }
  if (colorManager.qtdColor() === 4 || colorManager.qtdColor() === 3) {
    let colorPairs = colorManager.getAllColorPairs();
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[0]]} Locket`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[1]]} Locket`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[2]]} Locket`);
    landsRepository.addLand(1, 'Fellwar Stone');
    landsRepository.addLand(1, 'Mana Geode');
    landsRepository.addLand(1, 'Manalith');
  }
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Signet`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Keyrune`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Cluestone`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Locket`);
    landsRepository.addLand(1, `Talisman of ${COLORS_TO_PAIN_TALISMAN[colorPair]}`);
    landsRepository.addLand(1, 'Gilded Lotus');
  }
  return landsRepository;
}

module.exports.getManaRamp = getManaRamp;
module.exports.getManaRamp_NEW = getManaRamp_NEW;
