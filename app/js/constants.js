const ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];

const COLOR_TO_LAND = {
  white: 'Plains',
  blue: 'Island',
  black: 'Swamp',
  red: 'Mountain',
  green: 'Forest',
};

const COLORS_TO_FETCH_LAND = {
  whiteblue: 'Flooded Strand',
  blueblack: 'Polluted Delta',
  blackred: 'Bloodstained Mire',
  redgreen: 'Wooded Foothills',
  greenwhite: 'Windswept Heath',
  whiteblack: 'Marsh Flats',
  bluered: 'Scalding Tarn',
  blackgreen: 'Verdant Catacombs',
  redwhite: 'Arid Mesa',
  greenblue: 'Misty Rainforest',
};

const COLORS_TO_ORIGINAL_LAND = {
  whiteblue: 'Tundra',
  blueblack: 'Underground Sea',
  blackred: 'Badlands',
  redgreen: 'Taiga',
  greenwhite: 'Savannah',
  whiteblack: 'Scrubland',
  bluered: 'Volcanic Island',
  blackgreen: 'Bayou',
  redwhite: 'Plateau',
  greenblue: 'Tropical Island',
};

const COLORS_TO_SHOCK_LAND = {
  whiteblue: 'Hallowed Fountain',
  blueblack: 'Watery Grave',
  blackred: 'Blood Crypt',
  redgreen: 'Stomping Ground ',
  greenwhite: 'Temple Garden',
  whiteblack: 'Godless Shrine',
  bluered: 'Steam Vents',
  blackgreen: 'Overgrown Tomb',
  redwhite: 'Sacred Foundry',
  greenblue: 'Breeding Pool',
};

const COLORS_TO_SCRY_LAND = {
  whiteblue: 'Temple of Enlightenment',
  blueblack: 'Temple of Deceit',
  blackred: 'Temple of Malice',
  redgreen: 'Temple of Abandon',
  greenwhite: 'Temple of Plenty',
  whiteblack: 'Temple of Silence',
  bluered: 'Temple of Epiphany',
  blackgreen: 'Temple of Malady',
  redwhite: 'Temple of Triumph',
  greenblue: 'Temple of Mystery',
};

const COLORS_TO_PAIN_LAND = {
  whiteblue: 'Adarkar Wastes',
  blueblack: 'Underground River',
  blackred: 'Sulfurous Springs',
  redgreen: 'Karplusan Forest',
  greenwhite: 'Brushland ',
  whiteblack: 'Caves of Koilos',
  bluered: 'Shivan Reef',
  blackgreen: 'Llanowar Wastes',
  redwhite: 'Battlefield Forge',
  greenblue: 'Yavimaya Coast',
};

const COLORS_TO_BATTLE_AND_FAST_LAND = {
  whiteblue: 'Prairie Stream',
  blueblack: 'Sunken Hollow',
  blackred: 'Smoldering Marsh',
  redgreen: 'Cinder Glade',
  greenwhite: 'Canopy Vista ',
  whiteblack: 'Concealed Courtyard',
  bluered: 'Spirebluff Canal',
  blackgreen: 'Blooming Marsh',
  redwhite: 'Inspiring Vantage',
  greenblue: 'Botanical Sanctum',
};

const COLORS_TO_MAN_LAND = {
  whiteblue: 'Celestial Colonnade',
  blueblack: 'Creeping Tar Pit',
  blackred: 'Lavaclaw Reaches',
  redgreen: 'Raging Ravine',
  greenwhite: 'Stirring Wildwood',
  whiteblack: 'Shambling Vent',
  bluered: 'Spirebluff Canal',
  blackgreen: 'Hissing Quagmire',
  redwhite: 'Needle Spires',
  greenblue: 'Lumbering Falls',
};

const COLORS_TO_CHECK_LAND = {
  whiteblue: 'Glacial Fortress',
  blueblack: 'Drowned Catacomb',
  blackred: 'Dragonskull Summit',
  redgreen: 'Rootbound Crag',
  greenwhite: 'Sunpetal Grove',
  whiteblack: 'Isolated Chapel',
  bluered: 'Sulfur Falls',
  blackgreen: 'Woodland Cemetery',
  redwhite: 'Clifftop Retreat',
  greenblue: 'Hinterland Harbor',
};

const COLORS_TO_FILTER_LAND_1 = {
  whiteblue: 'Mystic Gate',
  blueblack: 'Sunken Ruins',
  blackred: 'Graven Cairns',
  redgreen: 'Fire-lit Thicket',
  greenwhite: 'Wooded Bastion',
  whiteblack: 'Fetid Heath',
  bluered: 'Cascade Bluffs',
  blackgreen: 'Twilight Mire',
  redwhite: 'Rugged Prairie',
  greenblue: 'Flooded Grove',
};

const COLORS_TO_FILTER_LAND_2 = {
  whiteblue: 'Skycloud Expanse',
  blueblack: 'Darkwater Catacombs',
  blackred: 'Shadowblood Ridge',
  redgreen: 'Mossfire Valley',
  greenwhite: 'Sungrass Prairie',
};

const COLORS_TO_BOUNCE_LAND = {
  whiteblue: 'Azorius Chancery',
  blueblack: 'Dimir Aqueduct',
  blackred: 'Rakdos Carnarium',
  redgreen: 'Gruul Turf',
  greenwhite: 'Selesnya Sanctuary',
  whiteblack: 'Orzhov Basilica',
  bluered: 'Izzet Boilerworks',
  blackgreen: 'Golgari Rot Farm',
  redwhite: 'Boros Garrison',
  greenblue: 'Simic Growth Chamber',
};

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

const COLORS_TO_TRI_LAND = {
  whitebluegreen: 'Seaside Citadel',
  whiteblueblack: 'Arcane Sanctum',
  blueblackred: 'Crumbling Necropolis',
  blackredgreen: 'Savage Lands',
  whiteredgreen: 'Jungle Shrine',
  whiteblackgreen: 'Sandsteppe Citadel',
  whitebluered: 'Mystic Monastery',
  blueblackgreen: 'Opulent Palace',
  whiteblackred: 'Nomad Outpost',
  blueredgreen: 'Frontier Bivouac',
};
