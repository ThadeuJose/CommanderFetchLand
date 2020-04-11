const getBasicLands = require('./lands-code/basic-lands');
const getFetchLands = require('./lands-code/fetch-lands');
const getDuals = require('./lands-code/dual-lands');
const getShockLands = require('./lands-code/shock-lands');
const getPainLands = require('./lands-code/pain-lands');
const getManLands = require('./lands-code/man-lands');
const getFilterLands = require('./lands-code/filter-lands');
const getOtherLands = require('./lands-code/other-lands');
const getTriLands = require('./lands-code/tri-lands');
const getScryLands = require('./lands-code/scry-lands');
const getBattleLands = require('./lands-code/battle-lands');
const getCheckLands = require('./lands-code/check-lands');
const getBounceLands = require('./lands-code/bounce-lands');
const getAnyColorLand = require('./lands-code/any-color-lands');
const getUtilityLand = require('./lands-code/utility-lands');
const getManaRamp = require('./lands-code/mana-ramp');


document.addEventListener('DOMContentLoaded', function resetView() {
  const inputList = document.getElementsByTagName('input');
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].checked = false;
  }
  document.getElementById('output').value = 'Click to copy the lands';
});

window.copyToClipboard = function (obj) {

  event.preventDefault();

  const copyText = document.getElementById('output');

  if (copyText.value !== 'Click to copy the lands') {
    navigator.clipboard.writeText(copyText.value);
    console.log("Copied the text: " + copyText.value);
  }
}

const checked = {
  white: false, blue: false, black: false, green: false, red: false
};

const ORDER_COLOR = ['white', 'blue', 'black', 'red', 'green'];

window.onChecked = function (obj) {
  const key = obj.name;
  const value = obj.checked;
  const colorArr = [];
  checked[key] = value;
  for (const c of ORDER_COLOR) {
    if (checked[c]) {
      colorArr.push(c);
    }
  }
  if (colorArr.length >= 2) {
    printLands(colorArr);
  } else {
    document.getElementById('output').value = 'Click to copy the lands';
    document.getElementById('output').rows = 1;
  }
}

function printLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';

  resp = [
    getBasicLands(colorArr),
    getFetchLands(colorArr),
    getDuals(colorArr),
    getShockLands(colorArr),
    getPainLands(colorArr),
    getManLands(colorArr),
    getFilterLands(colorArr),
    getOtherLands(colorArr),
    getTriLands(colorArr),
    getScryLands(colorArr),
    getBattleLands(colorArr),
    getCheckLands(colorArr),
    getBounceLands(colorArr),
    getAnyColorLand(colorArr),
    getUtilityLand(colorArr),
    getManaRamp(colorArr),
  ].map((elem) => {
    if (elem) {
      return `${elem}\n`;
    } else {
      return '';
    }
  }).join('');

  const qtdRows = resp.split(/\r\n|\r|\n/).length;

  document.getElementById('output').rows = qtdRows;
  document.getElementById('output').value = resp;

}
