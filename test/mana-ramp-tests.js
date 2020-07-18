const getManaRamp = require('../app/js/lands-code/mana-ramp').getManaRamp;
const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

describe('Mana Ramp', function() {

  [1, 2, 3, 4, 5].forEach(function (qtd) {
    it(qtd+' Color - Mana Ramp', function() {
      let color =['white', 'blue', 'black', 'red', 'green'];
      let colorManagerTest = new ColorManager();
      for (var i = 0; i < qtd; i++) {
        colorManagerTest.addColor(color[i]);
      }
      let expected = 10;

      assert.equal(getManaRamp(colorManagerTest).qtdLands(),expected);
    });
  });



});
