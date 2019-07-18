let ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green']

let COLOR_TO_LAND = {
  'white': 'Plains',
  'blue':  'Island',
  'black': 'Swamp',
  'red':   'Mountain',
  'green': 'Florest'
}

let COLORS_TO_FETCH_LAND = {
  'whiteblue':  'Flooded Strand',
  'blueblack':  'Polluted Delta',
  'blackred':   'Bloodstained Mire',
  'redgreen':   'Wooded Foothills',
  'greenwhite': 'Windswept Heath',
  'whiteblack': 'Marsh Flats',
  'bluered':    'Scalding Tarn',
  'blackgreen': 'Verdant Catacombs',
  'redwhite':   'Arid Mesa',
  'greenblue':  'Misty Rainforest',
}

let COLORS_TO_ORIGINAL_LAND = {
  'whiteblue':  'Tundra',
  'blueblack':  'Underground Sea',
  'blackred':   'Badlands',
  'redgreen':   'Taiga',
  'greenwhite': 'Savannah',
  'whiteblack': 'Scrubland',
  'bluered':    'Volcanic Island',
  'blackgreen': 'Bayou',
  'redwhite':   'Plateau',
  'greenblue':  'Tropical Island',
}

let COLORS_TO_SHOCK_LAND = {
  'whiteblue':  'Hallowed Fountain',
  'blueblack':  'Watery Grave',
  'blackred':   'Blood Crypt',
  'redgreen':   'Stomping Ground ',
  'greenwhite': 'Temple Garden',
  'whiteblack': 'Godless Shrine',
  'bluered':    'Steam Vents',
  'blackgreen': 'Overgrown Tomb',
  'redwhite':   'Sacred Foundry',
  'greenblue':  'Breeding Pool',
}

let COLORS_TO_SCRY_LAND = {
  'whiteblue':  'Temple of Enlightenment',
  'blueblack':  'Temple of Deceit',
  'blackred':   'Temple of Malice',
  'redgreen':   'Temple of Abandon',
  'greenwhite': 'Temple of Plenty',
  'whiteblack': 'Temple of Silence',
  'bluered':    'Temple of Epiphany',
  'blackgreen': 'Temple of Malady',
  'redwhite':   'Temple of Triumph',
  'greenblue':  'Temple of Mystery',
}

let COLORS_TO_PAIN_LAND = {
  'whiteblue':  'Adarkar Wastes',
  'blueblack':  'Underground River',
  'blackred':   'Sulfurous Springs',
  'redgreen':   'Karplusan Forest',
  'greenwhite': 'Brushland ',
  'whiteblack': 'Caves of Koilos',
  'bluered':    'Shivan Reef',
  'blackgreen': 'Llanowar Wastes',
  'redwhite':   'Battlefield Forge',
  'greenblue':  'Yavimaya Coast',
}

let COLORS_TO_BATTLE_AND_FAST_LAND = {
  'whiteblue':  'Prairie Stream',
  'blueblack':  'Sunken Hollow',
  'blackred':   'Smoldering Marsh',
  'redgreen':   'Cinder Glade',
  'greenwhite': 'Canopy Vista ',
  'whiteblack': 'Concealed Courtyard',
  'bluered':    'Spirebluff Canal',
  'blackgreen': 'Blooming Marsh',
  'redwhite':   'Inspiring Vantage',
  'greenblue':  'Botanical Sanctum',
}

let COLORS_TO_MAN_LAND = {
  'whiteblue':  'Celestial Colonnade',
  'blueblack':  'Creeping Tar Pit',
  'blackred':   'Lavaclaw Reaches',
  'redgreen':   'Raging Ravine',
  'greenwhite': 'Stirring Wildwood',
  'whiteblack': 'Shambling Vent',
  'bluered':    'Spirebluff Canal',
  'blackgreen': 'Hissing Quagmire',
  'redwhite':   'Needle Spires',
  'greenblue':  'Lumbering Falls',
}

let COLORS_TO_CHECK_LAND = {
  'whiteblue':  'Glacial Fortress',
  'blueblack':  'Drowned Catacomb',
  'blackred':   'Dragonskull Summit',
  'redgreen':   'Rootbound Crag',
  'greenwhite': 'Sunpetal Grove',
  'whiteblack': 'Isolated Chapel',
  'bluered':    'Sulfur Falls',
  'blackgreen': 'Woodland Cemetery',
  'redwhite':   'Clifftop Retreat',
  'greenblue':  'Hinterland Harbor',
}

let COLORS_TO_FILTER_LAND = {
  'whiteblue':  'Mystic Gate',
  'blueblack':  'Sunken Ruins',
  'blackred':   'Graven Cairns',
  'redgreen':   'Fire-lit Thicket',
  'greenwhite': 'Wooded Bastion',
  'whiteblack': 'Fetid Heath',
  'bluered':    'Cascade Bluffs',
  'blackgreen': 'Twilight Mire',
  'redwhite':   'Rugged Prairie',
  'greenblue':  'Flooded Grove',
}

let COLORS_TO_BOUNCE_LAND = {
  'whiteblue':  'Azorius Chancery',
  'blueblack':  'Dimir Aqueduct',
  'blackred':   'Rakdos Carnarium',
  'redgreen':   'Gruul Turf',
  'greenwhite': 'Selesnya Sanctuary',
  'whiteblack': 'Orzhov Basilica',
  'bluered':    'Izzet Boilerworks',
  'blackgreen': 'Golgari Rot Farm',
  'redwhite':   'Boros Garrison',
  'greenblue':  'Simic Growth Chamber',
}

let COLORS_TO_GUILD = {
  'whiteblue':  'Azorius',
  'blueblack':  'Dimir',
  'blackred':   'Rakdos',
  'redgreen':   'Gruul',
  'greenwhite': 'Selesnya',
  'whiteblack': 'Orzhov',
  'bluered':    'Izzet',
  'blackgreen': 'Golgari',
  'redwhite':   'Boros',
  'greenblue':  'Simic',
}

let COLORS_TO_PAIN_TALISMAN = {
  'whiteblue':  'Progress',
  'blueblack':  'Dominance',
  'blackred':   'Indulgence',
  'redgreen':   'Impulse',
  'greenwhite': 'Unity',
  'whiteblack': 'Hierarchy',
  'bluered':    'Creativity ',
  'blackgreen': 'Resilience',
  'redwhite':   'Conviction',
  'greenblue':  'Curiosity',
}

let COLOR_TO_PANORAMA = {
  'greenwhiteblue':'Bant Panorama',
  'whiteblueblack':'Esper Panorama',
  'blueblackred':'Grixis Panorama',
  'blackredgreen':'Jund Panorama',
  'redgreenwhite':'Naya Panorama',
}

function Submit() {
  let checked = { 'white':false, 'blue':false,'black':false,'green':false,'red':false }
  let colorArr =[]
  Object.entries(checked).forEach(([key, value]) => {
    checked[key] = document.querySelector(`#${key}`).checked;
  });
  for (var c of ORDER_COLOR) {
    if(checked[c])
      colorArr.push(c);
  }
  let resp = "".concat(getBasicLands(colorArr),'\n',
                       getFetchLands(colorArr),'\n',
                       getShockLands(colorArr),'\n',
                       getOriginalLands(colorArr),'\n',
                       getScryLands(colorArr),'\n',
                       getPainLands(colorArr),'\n',
                       getBattleLands(colorArr),'\n',
                       getCheckLands(colorArr),'\n',
                       getFilterLands(colorArr),'\n',
                       getBounceLands(colorArr),'\n',
                       getAnyColorLand(colorArr),'\n',
                       getUtilityLand(colorArr),'\n',
                       getManaRocks(colorArr));

  document.getElementById('output').value = resp
}

function getBasicLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//Basic Lands(14 land in Average): 8-20\n'
    for (c of colorArr) {
      let land = COLOR_TO_LAND[c]
      resp += `7 ${land}\n`;
    }
    return resp;
  }
}

function getFetchLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//7 Fetch Land\n'
    let landSet = new Set()
    for (c of colorArr) {
      for(k of Object.keys(COLORS_TO_FETCH_LAND))
        if(k.includes(c)){
            landSet.add(COLORS_TO_FETCH_LAND[k])
        }
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }

    return resp;
  }
}

function getShockLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//1 Shock Land\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_SHOCK_LAND[color]}\n`
    return resp
  }
}

function getOriginalLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//1 Original Land\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp+= `1 ${COLORS_TO_ORIGINAL_LAND[color]}\n`
    return resp
  }
}

function getScryLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//1 Scry Land\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_SCRY_LAND[color]}\n`
    return resp;
  }
}

function getPainLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//1 Pain Land\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_PAIN_LAND[color]}\n`
    return resp;
  }
}

function getBattleLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//1 Battle or Fast Land\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_BATTLE_AND_FAST_LAND[color]}\n`
    return resp;
  }
}

function getManLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//1 Main Land\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp += `1 ${COLORS_TO_MAN_LAND[color]}\n`
    return resp;
  }
}

function getCheckLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//1 Check Land\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp+= `1 ${COLORS_TO_CHECK_LAND[color]}\n`
    return resp;
  }
}

function getFilterLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//2 Filter Land\n'
    let landSet = new Set();
    landSet.add(COLORS_TO_FILTER_LAND[`${colorArr[0]}${colorArr[1]}`])
    for (c of colorArr) {
      for(k of Object.keys(COLORS_TO_FILTER_LAND)){
        if (landSet.size == 2) break
        if(k.includes(c)){
            landSet.add(COLORS_TO_FILTER_LAND[k])
        }
      }
    }
    for(e of landSet){
      resp+= `1 ${e}\n`;
    }

    return resp;
  }
}

function getBounceLands(colorArr) {
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp+='//Bounce Land: 1\n'
    let color = `${colorArr[0]}${colorArr[1]}`
    resp +=`1 ${COLORS_TO_BOUNCE_LAND[color]}\n`
    return resp;
  }
}

function getAnyColorLand(colorArr){
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    resp = "//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n"
  }
  return resp
}

function getUtilityLand(colorArr){
  return '//Utility Land or Mono Color: 6\n6 [UTILITY LAND]\n'
}

function getManaRocks(colorArr){
  let qtdColor = colorArr.length;
  let resp = '';
  if (qtdColor == 2) {
    let color = `${colorArr[0]}${colorArr[1]}`
    resp = `\n//Mana Rock: 10
1 ${COLORS_TO_GUILD[color]} Signet
1 ${COLORS_TO_GUILD[color]} Keyrune
1 ${COLORS_TO_GUILD[color]} Cluestone
1 ${COLORS_TO_GUILD[color]} Locket
1 Talisman of ${COLORS_TO_PAIN_TALISMAN[color]}
1 Commander's Sphere
1 Darksteel Ingot
1 Chromatic Lantern
1 Gilded Lotus
1 Sol Ring
  `;
  }
  return resp
}
