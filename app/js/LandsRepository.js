module.exports =  class LandsRepository {
  constructor(title) {
    this.title = title;
    this.lands = {};
  }

  addLand(name,qtd) {
    this.lands[qtd] = name;
  }

  addDictLands(dict){
    this.lands = Object.assign({}, this.lands, dict);
  }

  getDictLands() {
    return this.lands;
  }

  qtdLands() {
    if(this.isEmpty()){
      return 0;
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return Object.values(this.lands).reduce(reducer);
  }

  isEmpty() {
    let obj = this.lands;
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }

  getAllLands() {
    let resp = [];
    for (let [key, value] of Object.entries(this.lands)) {
      resp.push([value,key]);
    }
    return resp;
  }

}
