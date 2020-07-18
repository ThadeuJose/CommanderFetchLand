const LandsRepository = require('../LandsRepository');

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


function getManaRamp(colorManager){
  let landsRepository = new LandsRepository('Mana Ramp');
  landsRepository.addLand(1, 'Sol Ring');
  landsRepository.addLand(1, "Commander's Sphere");
  landsRepository.addLand(1, 'Darksteel Ingot');

  if (colorManager.qtdColor() === 5) {
    landsRepository.addLand(1, 'Chromatic Lantern');
    landsRepository.addLand(1, 'Sakura-tribe Elder');
    landsRepository.addLand(1, 'Rampant Growth');
    landsRepository.addLand(1, 'Wild Growth');
    landsRepository.addLand(1, 'Dryad of the Ilysian Grove');
    landsRepository.addLand(1, "Kodama's Reach");
    landsRepository.addLand(1, 'Cultivate');
  }
  if (colorManager.qtdColor() === 4 || colorManager.qtdColor() === 3) {
    let colorPairs = colorManager.getAllColorPairs();
    landsRepository.addLand(1, 'Mind Stone');
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[0]]} Locket`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[1]]} Locket`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[2]]} Locket`);
    landsRepository.addLand(1, 'Fellwar Stone');
    landsRepository.addLand(1, 'Mana Geode');
    landsRepository.addLand(1, 'Manalith');
  }
  if (colorManager.qtdColor() === 2) {
    let colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, 'Mind Stone');
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Signet`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Keyrune`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Cluestone`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Locket`);
    landsRepository.addLand(1, `Talisman of ${COLORS_TO_PAIN_TALISMAN[colorPair]}`);
    landsRepository.addLand(1, 'Chromatic Lantern');
  }

  if (colorManager.qtdColor() === 1) {
    let color = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, 'Mind Stone');
    if (color === 'green') {
      landsRepository.addLand(1, 'Sakura-tribe Elder');
      landsRepository.addLand(1, 'Rampant Growth');
      landsRepository.addLand(1, 'Wild Growth');
      landsRepository.addLand(1, 'Utopia Sprawl');
      landsRepository.addLand(1, "Kodama's Reach");
      landsRepository.addLand(1, 'Cultivate');
    } else {
      landsRepository.addLand(1, 'Arcane Signet');
      landsRepository.addLand(1, 'Treasure Map');
      landsRepository.addLand(1, 'Sword of the Animist');
      landsRepository.addLand(1, "Commander's Sphere");
      landsRepository.addLand(1, 'Worn Powerstone');
      landsRepository.addLand(1, 'Solemn Simulacrum');
      landsRepository.addLand(1, 'Hedron Archive');
    }
  }
  return landsRepository;
}

module.exports.getManaRamp = getManaRamp;
