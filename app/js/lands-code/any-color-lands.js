function getAnyColorLand(colorArr, qtdColor = colorArr.length) {
  if (qtdColor === 5) {
    return '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n';
  } else if (qtdColor === 4) {
    return '//Any Color Lands: 3\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n';
  } else if (qtdColor === 3 || qtdColor === 2) {
    return '//Any Color Lands: 4\n1 Command Tower\n1 Mana Confluence\n1 City of Brass\n1 Reflecting Pool\n';
  }
  return '';
}
