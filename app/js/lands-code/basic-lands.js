const COLOR_TO_BASIC_LAND = {
  white: 'Plains',
  blue: 'Island',
  black: 'Swamp',
  red: 'Mountain',
  green: 'Forest',
};

function getBasicLands(colorArr) {
  const qtdColor = colorArr.length;
  if (qtdColor === 5) {
    let resp = '//Basic Lands: 14\n';
    const qtdArr = [3, 3, 3, 2, 3];
    for (const [index, color]  of colorArr.entries()) {
      let land = COLOR_TO_BASIC_LAND[color];
      resp += `${qtdArr[index]} ${land}\n`;
    }
    return resp;
  }

  if (qtdColor === 4) {
    return '//Basic Lands: 9\n' + fourColorBase(colorArr);
  }

  if (qtdColor === 3) {
    let resp = '//Basic Lands: 9\n';
    for (color of colorArr) {
      const land = COLOR_TO_BASIC_LAND[color];
      resp += `3 ${land}\n`;
    }
    return resp;
  }

  if (qtdColor === 2) {
    let resp = '//Basic Lands: 14\n';
    for (color of colorArr) {
      const land = COLOR_TO_BASIC_LAND[color];
      resp += `7 ${land}\n`;
    }
    return resp;
  }

  if (qtdColor === 1) {
    return monoBase(colorArr);
  }

}

function fourColorBase(colorArr){
  let resp = ''
  const qtdArr = [3, 3, 2, 1];
  let priorityQueue = ['green', 'black', 'blue', 'white', 'red']
  let intersection = priorityQueue.filter(function(n) {
                                    return colorArr.indexOf(n) !== -1;
                                  });
  for (const [index, color]  of intersection.entries()) {
      const land = COLOR_TO_BASIC_LAND[color];
      resp += `${qtdArr[index]} ${land}\n`;
  }

  return resp;
}

function monoBase(colorArr) {
  let resp = '//Lands: 38\n';
  resp += "1 Arch of Orazca\n1 Dust Bowl\n1 Strip Mine\n1 Scavenger Grounds\n1 Myriad Landscape\n1 Rogue's Passage\n1 Nykthos, Shrine to Nyx\n";
  if(colorArr == 'white'){
    resp +='1 Sea Gate Wreckage\n1 Mikokoro, Center of the Sea\n1 Endless Sands\n1 Terrain Generator\n1 Emeria, the Sky Ruin\n1 Secluded Steppe\n1 Desert of the True \n1 Drifting Meadow\n1 Mistveil Plains\n1 Castle Ardenvale\n20 Plains';
  }
  if(colorArr == 'blue'){
    resp +='1 Reliquary Tower\n1 Blast Zone\n1 Winding Canyons\n1 Mirrorpool\n1 Lonely Sandbar\n1 Desert of The Mindful\n1 Remote Isle\n1 Castle Vantress\n1 Mystic Sanctuary\n23 Island';
  }
  if(colorArr == 'black'){
    resp +="1 Vesuva\n1 Thespian's Stage\n1 Blast Zone\n1 Westvale Abbey\n1 Phyrexian Tower\n1 Bojuka Bog\n1 Cabal Stronghold\n1 Cabal Coffers\n1 Castle Lochtwain\n23 Swamp";
  }
  if(colorArr == 'red'){
    resp +="1 Sea Gate Wreckage\n1 Mikokoro, Center of the Sea\n1 Blast Zone\n1 Kheer Keep\n1 Thespian's Stage\n1 Vesuva\n1 Desert of The Fervent\n1 Forgotten Cave\n1 Smoldering Crater\n1 Castle Embereth\n1 Valakut, the Molten Pinnacle\n1 Flamekin Village\n1 Shinka, the Bloodsoaked Keep\n21 Mountain";
  }
  if(colorArr == 'green'){
    resp +='1 Blighted Woodland\n1 Endless Sands\n1 Miren, the Moaning Well\n1 Winding Canyons\n1 Treetop Village\n1 Desert of the Indomitable\n1 Slippery Karst\n1 Tranquil Thicket\n1 Castle Garenbrig\n1 Oran-rief, the Vastwood\n21 Forest	';
  }
  return resp;
}
module.exports = getBasicLands;
