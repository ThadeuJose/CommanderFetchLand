module.exports =  class ColorManager {
  constructor() {
    this.colorArr = [];
    this.ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];
    this.allValidColorPair = ['whiteblue', 'blueblack', 'blackred', 'redgreen',
                              'greenwhite', 'whiteblack', 'bluered',
                              'blackgreen', 'redwhite', 'greenblue'];
  }

  addColor(name){
    if(!this.colorArr.includes(name)) {
      this.colorArr.push(name);
      if(this.qtdColor() >= 2) {
        this.colorArr = this.orderArrayByColor(this.colorArr, this.ORDER_COLOR);
      }
    }
  }

  orderArrayByColor(arr, order_array){
    let auxArr = arr;
    let resp = [];
    for (var elem of order_array) {
      if(auxArr.includes(elem)){
        resp.push(elem);
      }
    }
    return resp
  }

  removeColor(name){
    this.colorArr = this.colorArr.filter(item => item !== name)
  }

  qtdColor(){
    return this.colorArr.length
  }

  hasColor(color){
    return this.colorArr.indexOf(color) !== -1;
  }

  //return Valid pairs
  fixPair(color1, color2) {
    if (this.allValidColorPair.includes(`${color1}${color2}`)) {
      return `${color1}${color2}`;
    }

    return `${color2}${color1}`;

  }

  getAllColors(){
    return this.ORDER_COLOR;
  }

  //Return all valid pair
  getAllColorPairs() {
    if (this.qtdColor() === 1) {
      return [this.colorArr[0]];
    }

    if (this.qtdColor() === 2) {
      return [this.fixPair(this.colorArr[0], this.colorArr[1])];
    }

    if (this.qtdColor() === 3) {
      return [this.fixPair(this.colorArr[0], this.colorArr[1]), this.fixPair(this.colorArr[0], this.colorArr[2]),
              this.fixPair(this.colorArr[1], this.colorArr[2]),
              ];
    }

    if (this.qtdColor() === 4) {
      return [this.fixPair(this.colorArr[0], this.colorArr[1]),this.fixPair(this.colorArr[0], this.colorArr[2]), this.fixPair(this.colorArr[0], this.colorArr[3]),
              this.fixPair(this.colorArr[1], this.colorArr[2]), this.fixPair(this.colorArr[1], this.colorArr[3]),
              this.fixPair(this.colorArr[2], this.colorArr[3])];
    }

    if (this.qtdColor() === 5) {
      return this.allValidColorPair;
    }

  }



}
