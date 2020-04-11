const COLORS_TO_CANOPY_LAND = {
  greenwhite: 'Horizon Canopy',
  whiteblack: 'Silent Clearing',
  bluered: 'Fiery Islet',
  blackgreen: 'Nurturing Peatland',
  redwhite: 'Sunbaked Canyon',
  greenblue: 'Waterlogged Grove',
};

function getAnyColorLand(colorArr) {
  let qtdColor = colorArr.length;
  if (qtdColor === 5) {
    return '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n';
  }
  if (qtdColor === 4) {
    return '//Any Color Lands: 3\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n';
  }
  if (qtdColor === 3) {
    return '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n';
  }
  if (qtdColor === 2) {
    return '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n';
  }
  return '';
}

module.exports = getAnyColorLand;
