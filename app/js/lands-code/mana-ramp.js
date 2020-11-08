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

function greenRampPackage() {
  const landsRepository = new LandsRepository('Mana Ramp');
  landsRepository.addLand(1, 'Sol Ring');
  landsRepository.addLand(1, "Wayfarer's Bauble");
  landsRepository.addLand(1, 'Arcane Signet');
  landsRepository.addLand(1, 'Fellwar Stone');
  landsRepository.addLand(1, 'Sakura-tribe Elder');
  landsRepository.addLand(1, 'Rampant Growth');
  landsRepository.addLand(1, "Kodama's Reach");
  landsRepository.addLand(1, 'Cultivate');
  landsRepository.addLand(1, 'Nature\'s Lore');
  landsRepository.addLand(1, 'Three Visits');
  return landsRepository;
}

function monoGreenRampPackage() {
  const landsRepository = new LandsRepository('Mana Ramp');
  landsRepository.addLand(1, 'Sol Ring');
  landsRepository.addLand(1, "Wayfarer's Bauble");
  landsRepository.addLand(1, 'Arcane Signet');
  landsRepository.addLand(1, 'Fellwar Stone');
  landsRepository.addLand(1, 'Wild Growth');
  landsRepository.addLand(1, 'Utopia Sprawl');
  landsRepository.addLand(1, 'Sakura-tribe Elder');
  landsRepository.addLand(1, 'Rampant Growth');
  landsRepository.addLand(1, "Kodama's Reach");
  landsRepository.addLand(1, 'Cultivate');
  return landsRepository;
}

function getManaRamp(colorManager) {
  const colorPairs = colorManager.getAllColorPairs();

  if (colorManager.hasColor('green')) {
    if (colorManager.qtdColor() === 1) {
      return monoGreenRampPackage();
    }
    return greenRampPackage();
  }

  const landsRepository = new LandsRepository('Mana Ramp');
  landsRepository.addLand(1, 'Sol Ring');
  landsRepository.addLand(1, "Wayfarer's Bauble");
  landsRepository.addLand(1, 'Arcane Signet');
  landsRepository.addLand(1, 'Fellwar Stone');

  if (colorManager.qtdColor() === 4 || colorManager.qtdColor() === 3) {
    landsRepository.addLand(1, 'Mind Stone');
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[0]]} Signet`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[1]]} Signet`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPairs[2]]} Signet`);
    landsRepository.addLand(1, 'Mana Geode');
    landsRepository.addLand(1, 'Chromatic Lantern');
  }
  if (colorManager.qtdColor() === 2) {
    const colorPair = colorManager.getAllColorPairs()[0];
    landsRepository.addLand(1, 'Mind Stone');
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Signet`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Keyrune`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Cluestone`);
    landsRepository.addLand(1, `${COLORS_TO_GUILD[colorPair]} Locket`);
    landsRepository.addLand(1, `Talisman of ${COLORS_TO_PAIN_TALISMAN[colorPair]}`);
  }

  if (colorManager.qtdColor() === 1) {
    landsRepository.addLand(1, 'Mind Stone');
    landsRepository.addLand(1, 'Treasure Map');
    landsRepository.addLand(1, 'Sword of the Animist');
    landsRepository.addLand(1, "Commander's Sphere");
    landsRepository.addLand(1, 'Worn Powerstone');
    landsRepository.addLand(1, 'Solemn Simulacrum');
  }

  return landsRepository;
}

module.exports.getManaRamp = getManaRamp;
