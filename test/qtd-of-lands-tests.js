const LandsRepository = require('../app/js/LandsRepository');
const ColorManager = require('../app/js/ColorManager');

const getAnyColorLand = require('../app/js/lands-code/any-color-lands').getAnyColorLand;
const getBasicLands = require('../app/js/lands-code/basic-lands').getBasicLands;
const getBattleLands = require('../app/js/lands-code/battle-and-fast-lands').getBattleLands;
const getCheckLands = require('../app/js/lands-code/check-lands').getCheckLands;
const getCrowdLands = require('../app/js/lands-code/crowd-lands').getCrowdLands;
const getDualLands = require('../app/js/lands-code/dual-lands').getDualLands;
const getFetchLands = require('../app/js/lands-code/fetch-lands').getFetchLands;
const getFilterLands = require('../app/js/lands-code/filter-lands').getFilterLands;
const getManLands = require('../app/js/lands-code/man-lands').getManLands;
const getManaRamp = require('../app/js/lands-code/mana-ramp').getManaRamp;
const getOtherLands = require('../app/js/lands-code/other-lands').getOtherLands;
const getPainLands = require('../app/js/lands-code/pain-lands').getPainLands;
const getScryLands = require('../app/js/lands-code/scry-lands').getScryLands;
const getShockLands = require('../app/js/lands-code/shock-lands').getShockLands;
const getTriLands = require('../app/js/lands-code/tri-lands').getTriLands;
const getUtilityLand = require('../app/js/lands-code/utility-lands').getUtilityLand;

function reduceFunction(acc,curr){
  if(curr){
    return acc + curr.qtdLands();
  }
  return acc;
}

function testLands(colorManager) {
  const allLands = [
    getDualLands(colorManager),
    getFetchLands(colorManager),
    getShockLands(colorManager),
    getPainLands(colorManager),
    getManLands(colorManager),
    getFilterLands(colorManager),
    getOtherLands(colorManager),
    getTriLands(colorManager),
    getScryLands(colorManager),
    getBattleLands(colorManager),
    getCheckLands(colorManager),
    getCrowdLands(colorManager),
    getAnyColorLand(colorManager),
    getBasicLands(colorManager),
    getUtilityLand(colorManager)
  ]

  return allLands.reduce(reduceFunction,0);
}

function capitalize (str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const color1Array = ['white', 'blue', 'black', 'red', 'green'];

const color2Array = [
                      ['white','blue'],
                      ['blue','black'],
                      ['black','red'],
                      ['red','green'],
                      ['green','white'],
                      ['white','black'],
                      ['blue','red'],
                      ['black','green'],
                      ['red','white'],
                      ['green','blue']
                    ];


const color3Array = [
                      ['white','blue','green'],
                      ['white','blue','black'],
                      ['blue','black','red'],
                      ['black','red','green'],
                      ['white','red','green'],
                      ['white','black','green'],
                      ['white','blue','red'],
                      ['blue','black','green'],
                      ['white','black','red'],
                      ['blue','red','green']
                    ];

const color4Array =[
                      ['white','blue','black','red'],
                      ['blue','black','red','green'],
                      ['black','red','green','white'],
                      ['red','green','white','blue'],
                      ['green','white','blue','black']
                    ];


const EXPECTED_QTD_LANDS = 38;

describe('Quantity of Lands', function() {
  //1 color manabase
  color1Array.forEach(function (color) {
    it('1 Color - ' + capitalize(color) + ' - Return correct quantity', function() {
      let colorManagerTest = new ColorManager();
      colorManagerTest.addColor(color);

      assert.equal(testLands(colorManagerTest),EXPECTED_QTD_LANDS);

    });
  });

  //2 color manabase
  color2Array.forEach(function (color) {
    it('2 Color - ' + capitalize(color[0]) +' '+ capitalize(color[1]) + ' - Return correct quantity', function() {
      let colorManagerTest = new ColorManager();
      colorManagerTest.addColor(color[0]);
      colorManagerTest.addColor(color[1]);

      assert.equal(testLands(colorManagerTest),EXPECTED_QTD_LANDS);
    });
  });

  //3 color manabase
  color3Array.forEach(function (color) {
    it('3 Color - ' + capitalize(color[0]) +' '+ capitalize(color[1]) + ' '+ capitalize(color[2]) + ' - Return correct quantity', function() {
      let colorManagerTest = new ColorManager();
      colorManagerTest.addColor(color[0]);
      colorManagerTest.addColor(color[1]);
      colorManagerTest.addColor(color[2]);

      assert.equal(testLands(colorManagerTest),EXPECTED_QTD_LANDS);
    });
  });

  //4 color manabase
  color4Array.forEach(function (color) {
    it('4 Color - ' + capitalize(color[0]) +' '+ capitalize(color[1]) + ' '+ capitalize(color[2]) + ' '+ capitalize(color[3]) + ' - Return correct quantity', function() {
      let colorManagerTest = new ColorManager();
      colorManagerTest.addColor(color[0]);
      colorManagerTest.addColor(color[1]);
      colorManagerTest.addColor(color[2]);
      colorManagerTest.addColor(color[3]);

      assert.equal(testLands(colorManagerTest),EXPECTED_QTD_LANDS);
    });
  });


  //5 color manabase
  it('5 Color - Return correct quantity', function() {
    let colorManagerTest = new ColorManager();
    colorManagerTest.addColor('white');
    colorManagerTest.addColor('blue');
    colorManagerTest.addColor('black');
    colorManagerTest.addColor('red');
    colorManagerTest.addColor('green');

    assert.equal(testLands(colorManagerTest),EXPECTED_QTD_LANDS);

  });
});
