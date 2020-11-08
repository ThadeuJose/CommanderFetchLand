const LandsRepository = require('../LandsRepository');

const COLOR_TO_BASIC_LAND = {
  white: 'Plains',
  blue: 'Island',
  black: 'Swamp',
  red: 'Mountain',
  green: 'Forest',
};

function monoBase(landsRepository, color) {
  if (color === 'white') {
    landsRepository.addLand(21, 'Plains');
  }
  if (color === 'blue') {
    landsRepository.addLand(22, 'Island');
  }
  if (color === 'black') {
    landsRepository.addLand(22, 'Swamp');
  }
  if (color === 'red') {
    landsRepository.addLand(21, 'Mountain');
  }
  if (color === 'green') {
    landsRepository.addLand(21, 'Forest');
  }
  return landsRepository;
}

function getBasicLands(colorManager) {
  if (colorManager.qtdColor() === 5) {
    let landsRepository = new LandsRepository('Basic Lands');
    const qtdArr = [3, 3, 3, 2, 3];
    const colorArr = colorManager.getAllColors();
    for (const [index, color]  of colorArr.entries()) {
      let qtd = qtdArr[index]
      let land = COLOR_TO_BASIC_LAND[color];
      landsRepository.addLand(qtd, land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 4) {
    let landsRepository = new LandsRepository('Basic Lands');
    const qtdArr = [3, 3, 2, 1];
    let priorityQueue = ['green', 'black', 'blue', 'white', 'red']
    let intersection = priorityQueue.filter(function(color) {
                                      return colorManager.hasColor(color);
                                    });
    for (const [index, color]  of intersection.entries()) {
        const qtd = qtdArr[index]
        const land = COLOR_TO_BASIC_LAND[color];
        landsRepository.addLand(qtd,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 3) {
    let landsRepository = new LandsRepository('Basic Lands');
    for (color of colorManager.colorArr) {
      const qtd = 3
      const land = COLOR_TO_BASIC_LAND[color];
      landsRepository.addLand(qtd,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 2) {
    let landsRepository = new LandsRepository('Basic Lands');
    for (color of colorManager.colorArr) {
      const qtd = 6
      const land = COLOR_TO_BASIC_LAND[color];
      landsRepository.addLand(qtd,land);
    }
    return landsRepository;
  }

  if (colorManager.qtdColor() === 1) {
    let landsRepository = new LandsRepository('Basic Lands');
    return monoBase(landsRepository, colorManager.colorArr[0]);
  }
}

module.exports.getBasicLands = getBasicLands;
