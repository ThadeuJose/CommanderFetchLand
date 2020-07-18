const LandsRepository = require('../LandsRepository');

const COLOR_TO_BASIC_LAND = {
  white: 'Plains',
  blue: 'Island',
  black: 'Swamp',
  red: 'Mountain',
  green: 'Forest',
};

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
    return monoBase(colorManager.colorArr[0]);
  }

}

function monoBase(color) {
  let landsRepository = new LandsRepository('Lands');
  landsRepository.addLand(1,'Arch of Orazca');
  landsRepository.addLand(1,'Dust Bowl');
  if(color !== 'red'){
      landsRepository.addLand(1,'Strip Mine');
    }
  landsRepository.addLand(1,'Scavenger Grounds');
  landsRepository.addLand(1,'Myriad Landscape');
  landsRepository.addLand(1,"Rogue's Passage");
  if(color !== 'red'){
    landsRepository.addLand(1,'Nykthos, Shrine to Nyx');
  }

  if(color == 'white'){
    landsRepository.addLand(1,'Sea Gate Wreckage');
    landsRepository.addLand(1,'Mikokoro, Center of the Sea');
    landsRepository.addLand(1,'Endless Sands');
    landsRepository.addLand(1,'Terrain Generator');
    landsRepository.addLand(1,'Emeria, the Sky Ruin');
    landsRepository.addLand(1,'Secluded Steppe');
    landsRepository.addLand(1,'Mistveil Plains');
    landsRepository.addLand(1,'Drifting Meadow');
    landsRepository.addLand(1,'Desert of the True');
    landsRepository.addLand(1,'Castle Ardenvale');
    landsRepository.addLand(21,'Plains');
  }

  if(color == 'blue'){
    landsRepository.addLand(1,'Reliquary Tower');
    landsRepository.addLand(1,'Blast Zone');
    landsRepository.addLand(1,'Winding Canyons');
    landsRepository.addLand(1,'Mirrorpool');
    landsRepository.addLand(1,'Mystic Sanctuary');
    landsRepository.addLand(1,'Lonely Sandbar');
    landsRepository.addLand(1,'Remote Isle');
    landsRepository.addLand(1,'Desert of The Mindful');
    landsRepository.addLand(1,'Castle Vantress');
    landsRepository.addLand(22,'Island');

  }
  if(color == 'black'){
    landsRepository.addLand(1,'Vesuva');
    landsRepository.addLand(1,"Thespian's Stage");
    landsRepository.addLand(1,'Blast Zone');
    landsRepository.addLand(1,'Westvale Abbey');
    landsRepository.addLand(1,'Phyrexian Tower');
    landsRepository.addLand(1,'Bojuka Bog');
    landsRepository.addLand(1,'Cabal Stronghold');
    landsRepository.addLand(1,'Cabal Coffers');
    landsRepository.addLand(1,'Castle Lochtwain');
    landsRepository.addLand(22,'Swamp');
  }
  if(color == 'red'){
    landsRepository.addLand(1,'Sea Gate Wreckage');
    landsRepository.addLand(1,'Mikokoro, Center of the Sea');
    landsRepository.addLand(1,'Blast Zone');
    landsRepository.addLand(1,'Kheer Keep');
    landsRepository.addLand(1,"Thespian's Stage");
    landsRepository.addLand(1,'Valakut, the Molten Pinnacle');
    landsRepository.addLand(1,'Flamekin Village');
    landsRepository.addLand(1,'Shinka, the Bloodsoaked Keep');
    landsRepository.addLand(1,'Forgotten Cave');
    landsRepository.addLand(1,'Smoldering Crater');
    landsRepository.addLand(1,'Desert of The Fervent');
    landsRepository.addLand(1,'Castle Embereth');
    landsRepository.addLand(21,'Mountain');
  }
  if(color == 'green'){
    landsRepository.addLand(1,'Endless Sands');
    landsRepository.addLand(1,'Blighted Woodland');
    landsRepository.addLand(1,'Miren, the Moaning Well');
    landsRepository.addLand(1,'Winding Canyons');
    landsRepository.addLand(1,'Treetop Village');
    landsRepository.addLand(1,'Oran-rief, the Vastwood');
    landsRepository.addLand(1,'Tranquil Thicket');
    landsRepository.addLand(1,'Slippery Karst');
    landsRepository.addLand(1,"Desert of the Indomitable");
    landsRepository.addLand(1,'Castle Garenbrig');
    landsRepository.addLand(21,'Forest');
  }
  return landsRepository;
}


module.exports.getBasicLands = getBasicLands;
