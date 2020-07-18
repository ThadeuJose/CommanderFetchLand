const getAnyColorLand = require('./lands-code/any-color-lands').getAnyColorLand;
const getBasicLands = require('./lands-code/basic-lands').getBasicLands;
const getBattleLands = require('./lands-code/battle-and-fast-lands').getBattleLands;
const getBounceLands = require('./lands-code/bounce-lands').getBounceLands;
const getCheckLands = require('./lands-code/check-lands').getCheckLands;
const getDualLands = require('./lands-code/dual-lands').getDualLands;
const getFetchLands = require('./lands-code/fetch-lands').getFetchLands;
const getFilterLands = require('./lands-code/filter-lands').getFilterLands;
const getManLands = require('./lands-code/man-lands').getManLands;
const getManaRamp = require('./lands-code/mana-ramp').getManaRamp;
const getOtherLands = require('./lands-code/other-lands').getOtherLands;
const getPainLands = require('./lands-code/pain-lands').getPainLands;
const getScryLands = require('./lands-code/scry-lands').getScryLands;
const getShockLands = require('./lands-code/shock-lands').getShockLands;
const getTriLands = require('./lands-code/tri-lands').getTriLands;
const getUtilityLand = require('./lands-code/utility-lands').getUtilityLand;


const LandsRepository = require('./LandsRepository');
const ColorManager = require('./ColorManager');

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
    showSnackbar();
  }
}


let detail_checked = false;


let colorManager = new ColorManager();
let colorArr = [];

window.check_icon = function () {
  detail_checked = !detail_checked;
  if(detail_checked){
    document.getElementById('detail').style.backgroundColor = "green";
    document.getElementById('output').value = printLandsWithTitle(colorManager);
  }else{
    document.getElementById('detail').style.backgroundColor = "red";
    document.getElementById('output').value = printLandsNoTitle(colorManager);
  }
}


window.onChecked = function (obj) {
  const color = obj.name;
  const isChecked = obj.checked;

  if (isChecked) {
    colorManager.addColor(color);
  } else {
    colorManager.removeColor(color);
  }
  colorArr = colorManager.colorArr;

  if (colorArr.length >= 1) {
    if (detail_checked) {
      document.getElementById('output').value = printLandsWithTitle(colorManager);
    } else {
      document.getElementById('output').value = printLandsNoTitle(colorManager);
    }

  } else {
    document.getElementById('output').value = 'Click to copy the lands';
  }
}

function printLandsNoTitle(colorManager) {
  let resp = '';
  let landsRepository = new LandsRepository('Lands');

  if(colorManager.qtdColor() > 0){
    if(colorManager.qtdColor() > 1){
      landsRepository.addDictLands(getDualLands(colorManager).getDictLands());
      landsRepository.addDictLands(getFetchLands(colorManager).getDictLands());
      landsRepository.addDictLands(getShockLands(colorManager).getDictLands());
      landsRepository.addDictLands(getPainLands(colorManager).getDictLands());
      landsRepository.addDictLands(getManLands(colorManager).getDictLands());
      landsRepository.addDictLands(getFilterLands(colorManager).getDictLands());
      landsRepository.addDictLands(getOtherLands(colorManager).getDictLands());
      landsRepository.addDictLands(getTriLands(colorManager).getDictLands());
      landsRepository.addDictLands(getScryLands(colorManager).getDictLands());
      landsRepository.addDictLands(getBattleLands(colorManager).getDictLands());
      landsRepository.addDictLands(getCheckLands(colorManager).getDictLands());
      landsRepository.addDictLands(getBounceLands(colorManager).getDictLands());
      landsRepository.addDictLands(getAnyColorLand(colorManager).getDictLands());
    }
    resp += landsRepositoryToString(landsRepository);
    resp += landsRepositoryToString(getBasicLands(colorManager));
    resp += landsRepositoryToString(getUtilityLand(colorManager));
    resp += landsRepositoryToString(getManaRamp(colorManager));
  }

  return resp;
}

function printLandsWithTitle(colorManager) {
  let resp = '';
  if(colorManager.qtdColor() > 0){
    if(colorManager.qtdColor() > 1){
      resp += landsRepositoryToString(getDualLands(colorManager));
      resp += landsRepositoryToString(getFetchLands(colorManager));
      resp += landsRepositoryToString(getShockLands(colorManager));
      resp += landsRepositoryToString(getPainLands(colorManager));
      resp += landsRepositoryToString(getManLands(colorManager));
      resp += landsRepositoryToString(getFilterLands(colorManager));
      resp += landsRepositoryToString(getOtherLands(colorManager));
      resp += landsRepositoryToString(getTriLands(colorManager));
      resp += landsRepositoryToString(getScryLands(colorManager));
      resp += landsRepositoryToString(getBattleLands(colorManager));
      resp += landsRepositoryToString(getCheckLands(colorManager));
      resp += landsRepositoryToString(getBounceLands(colorManager));
      resp += landsRepositoryToString(getAnyColorLand(colorManager));
    }
    resp += landsRepositoryToString(getBasicLands(colorManager));
    resp += landsRepositoryToString(getUtilityLand(colorManager));
    resp += landsRepositoryToString(getManaRamp(colorManager));
  }
  return resp;
}

function landsRepositoryToString(landsRepository) {
  let resp = '';

  if (!landsRepository.isEmpty()) {
    resp = '//' + landsRepository.title + ': ' + landsRepository.qtdLands() +'\n';
    for (var elem of landsRepository.getAllLands()) {
      resp+=elem.join(' ')+'\n';
    }
    resp+='\n';
  }

  return resp;
}

function showSnackbar() {
  // Get the snackbar DIV
  var snackbar = document.getElementById("snackbar");

  // Add the "show" class to DIV
  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
