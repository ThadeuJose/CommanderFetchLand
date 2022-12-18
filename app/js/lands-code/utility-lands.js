const LandsRepository = require('../LandsRepository');

function monoBase(landsRepository, color) {
  landsRepository.addLand(1, 'Arch of Orazca');
  landsRepository.addLand(1, 'Dust Bowl');
  if (color !== 'red') {
    landsRepository.addLand(1, 'Strip Mine');
  }
  landsRepository.addLand(1, 'Scavenger Grounds');
  landsRepository.addLand(1, 'Myriad Landscape');
  landsRepository.addLand(1, "Rogue's Passage");
  if (color !== 'red') {
    landsRepository.addLand(1, 'Nykthos, Shrine to Nyx');
  }
  if (color === 'white') {
    landsRepository.addLand(1, 'Sea Gate Wreckage');
    landsRepository.addLand(1, 'Mikokoro, Center of the Sea');
    landsRepository.addLand(1, 'Endless Sands');
    landsRepository.addLand(1, 'Terrain Generator');
    landsRepository.addLand(1, 'Emeria, the Sky Ruin');
    landsRepository.addLand(1, 'Secluded Steppe');
    landsRepository.addLand(1, 'Mistveil Plains');
    landsRepository.addLand(1, 'Drifting Meadow');
    landsRepository.addLand(1, 'Desert of the True');
    landsRepository.addLand(1, 'Castle Ardenvale');
  }
  if (color === 'blue') {
    landsRepository.addLand(1, 'Reliquary Tower');
    landsRepository.addLand(1, 'Blast Zone');
    landsRepository.addLand(1, 'Winding Canyons');
    landsRepository.addLand(1, 'Mirrorpool');
    landsRepository.addLand(1, 'Mystic Sanctuary');
    landsRepository.addLand(1, 'Lonely Sandbar');
    landsRepository.addLand(1, 'Remote Isle');
    landsRepository.addLand(1, 'Desert of The Mindful');
    landsRepository.addLand(1, 'Castle Vantress');
  }
  if (color === 'black') {
    landsRepository.addLand(1, 'Vesuva');
    landsRepository.addLand(1, "Thespian's Stage");
    landsRepository.addLand(1, 'Blast Zone');
    landsRepository.addLand(1, 'Westvale Abbey');
    landsRepository.addLand(1, 'Phyrexian Tower');
    landsRepository.addLand(1, 'Bojuka Bog');
    landsRepository.addLand(1, 'Cabal Stronghold');
    landsRepository.addLand(1, 'Cabal Coffers');
    landsRepository.addLand(1, 'Castle Lochtwain');
  }
  if (color === 'red') {
    landsRepository.addLand(1, 'Sea Gate Wreckage');
    landsRepository.addLand(1, 'Mikokoro, Center of the Sea');
    landsRepository.addLand(1, 'Blast Zone');
    landsRepository.addLand(1, 'Kher Keep');
    landsRepository.addLand(1, "Thespian's Stage");
    landsRepository.addLand(1, 'Valakut, the Molten Pinnacle');
    landsRepository.addLand(1, 'Flamekin Village');
    landsRepository.addLand(1, 'Shinka, the Bloodsoaked Keep');
    landsRepository.addLand(1, 'Forgotten Cave');
    landsRepository.addLand(1, 'Smoldering Crater');
    landsRepository.addLand(1, 'Desert of The Fervent');
    landsRepository.addLand(1, 'Castle Embereth');
  }
  if (color === 'green') {
    landsRepository.addLand(1, 'Endless Sands');
    landsRepository.addLand(1, 'Blighted Woodland');
    landsRepository.addLand(1, 'Miren, the Moaning Well');
    landsRepository.addLand(1, 'Winding Canyons');
    landsRepository.addLand(1, 'Treetop Village');
    landsRepository.addLand(1, 'Oran-rief, the Vastwood');
    landsRepository.addLand(1, 'Tranquil Thicket');
    landsRepository.addLand(1, 'Slippery Karst');
    landsRepository.addLand(1, 'Desert of the Indomitable');
    landsRepository.addLand(1, 'Castle Garenbrig');
  }
  return landsRepository;
}

function getUtilityLand(colorManager) {
  let landsRepository = new LandsRepository('Utility Lands');
  if (colorManager.qtdColor() === 4) {
    landsRepository.addLand(4, 'UTILITY LAND');
  }
  if (colorManager.qtdColor() === 3) {
    landsRepository.addLand(6, 'UTILITY LAND');
  }
  if (colorManager.qtdColor() === 2) {
    landsRepository.addLand(5, 'UTILITY LAND');
  }
  if (colorManager.qtdColor() === 1) {
    landsRepository = monoBase(landsRepository, colorManager.colorArr[0]);
  }
  return landsRepository;
}

module.exports.getUtilityLand = getUtilityLand;
