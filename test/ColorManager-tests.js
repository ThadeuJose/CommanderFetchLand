const ColorManager = require('../app/js/ColorManager');

describe('Color Manager', function() {
  it('should be empty', function() {
    let colorManager = new ColorManager();

    let expectedAnswer = 0;
    let test = colorManager.qtdColor();

    assert.equal(test,expectedAnswer);
  });

  it('is counting correct', function() {
    let colorManager = new ColorManager();
    colorManager.addColor('red');
    colorManager.addColor('white');
    colorManager.addColor('white');
    colorManager.addColor('red');
    colorManager.addColor('white');
    colorManager.addColor('red');

    let expectedAnswer = 2;
    let test = colorManager.qtdColor();

    assert.equal(test,expectedAnswer);
  });

  it('is adding correct', function() {
    let colorManager = new ColorManager();
    colorManager.addColor('green');
    colorManager.addColor('red');
    colorManager.addColor('black');
    colorManager.addColor('white');
    colorManager.addColor('white');
    colorManager.addColor('red');
    colorManager.addColor('white');
    colorManager.addColor('red');
    colorManager.addColor('black');


    let expectedAnswer = ['white',  'black', 'red', 'green'];
    let test = colorManager.colorArr;

    assert.deepEqual(test,expectedAnswer);
  });

  it('is removing correct', function() {
    let colorManager = new ColorManager();
    colorManager.removeColor('white');
    colorManager.addColor('white');
    colorManager.removeColor('white');


    let expectedAnswer = [];
    let test = colorManager.colorArr;

    assert.deepEqual(test,expectedAnswer);
  });

  it('has color', function() {
    let colorManager = new ColorManager();
    colorManager.addColor('white');
    colorManager.addColor('red');
    colorManager.addColor('black');


    let expectedAnswer = true;
    let test = colorManager.hasColor('red');

    assert.deepEqual(test,expectedAnswer);
  });

  it("Order to getAllColorPairs don't matter", function() {
    let colorManager = new ColorManager();
    colorManager.addColor('red');
    colorManager.addColor('white');
    colorManager.addColor('black');


    let expectedAnswer = ['whiteblack', 'redwhite', 'blackred'];
    let test = colorManager.getAllColorPairs();

    assert.deepEqual(test,expectedAnswer);

    colorManager = new ColorManager();
    colorManager.addColor('black');
    colorManager.addColor('red');
    colorManager.addColor('white');

    test = colorManager.getAllColorPairs();

    assert.deepEqual(test,expectedAnswer);

  });

  it('1 color - getAllColorPairs', function() {
    let colorManager = new ColorManager();
    colorManager.addColor('white');

    let expectedAnswer = ['white'];
    let test = colorManager.getAllColorPairs();

    assert.deepEqual(test,expectedAnswer);
  });


  it('2 color - getAllColorPairs', function() {
    let colorManager = new ColorManager();
    colorManager.addColor('white');
    colorManager.addColor('red');


    let expectedAnswer = ['redwhite'];
    let test = colorManager.getAllColorPairs();

    assert.deepEqual(test,expectedAnswer);
  });

  it('3 color - getAllColorPairs', function() {
    let colorManager = new ColorManager();
    colorManager.addColor('red');
    colorManager.addColor('white');
    colorManager.addColor('black');


    let expectedAnswer = ['whiteblack', 'redwhite', 'blackred'];
    let test = colorManager.getAllColorPairs();

    assert.deepEqual(test,expectedAnswer);

  });

  it('4 color - getAllColorPairs', function() {
    let colorManager = new ColorManager();
    colorManager.addColor('green');
    colorManager.addColor('red');
    colorManager.addColor('white');
    colorManager.addColor('black');


    let expectedAnswer = ['whiteblack','redwhite', 'greenwhite', 'blackred',
                            'blackgreen','redgreen' ];
    let test = colorManager.getAllColorPairs();

    assert.deepEqual(test,expectedAnswer);
  });

  it('5 color - getAllColorPairs', function() {
    let colorManager = new ColorManager();
    colorManager.addColor('white');
    colorManager.addColor('red');
    colorManager.addColor('black');
    colorManager.addColor('green');
    colorManager.addColor('blue');


    let expectedAnswer = ['whiteblue', 'blueblack', 'blackred', 'redgreen',
                          'greenwhite', 'whiteblack', 'bluered',
                          'blackgreen', 'redwhite', 'greenblue'];
    let test = colorManager.getAllColorPairs();

    assert.deepEqual(test,expectedAnswer);
  });

});
