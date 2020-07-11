const getBasicLands = require('./lands-code/basic-lands').getBasicLands;
const getFetchLands = require('./lands-code/fetch-lands').getFetchLands;
const getDuals = require('./lands-code/dual-lands').getDualLands;;
const getShockLands = require('./lands-code/shock-lands').getShockLands;
const getPainLands = require('./lands-code/pain-lands').getPainLands;
const getManLands = require('./lands-code/man-lands').getManLands;
const getFilterLands = require('./lands-code/filter-lands').getFilterLands;
const getOtherLands = require('./lands-code/other-lands').getOtherLands;
const getTriLands = require('./lands-code/tri-lands').getTriLands;
const getScryLands = require('./lands-code/scry-lands').getScryLands;
const getBattleLands = require('./lands-code/battle-and-fast-lands').getBattleLands;
const getCheckLands = require('./lands-code/check-lands').getCheckLands;
const getBounceLands = require('./lands-code/bounce-lands').getBounceLands;
const getAnyColorLand = require('./lands-code/any-color-lands').getAnyColorLand;
const getUtilityLand = require('./lands-code/utility-lands').getUtilityLand;
const getManaRamp = require('./lands-code/mana-ramp').getManaRamp;

const getAnyColorLand_NEW = require('./lands-code/any-color-lands').getAnyColorLand_NEW;
const getBasicLands_NEW = require('./lands-code/basic-lands').getBasicLands_NEW;
const getBattleLands_NEW = require('./lands-code/battle-and-fast-lands').getBattleLands_NEW;
const getBounceLands_NEW = require('./lands-code/bounce-lands').getBounceLands_NEW;
const getCheckLands_NEW = require('./lands-code/check-lands').getCheckLands_NEW;
const getDualLands_NEW = require('./lands-code/dual-lands').getDualLands_NEW;
const getFetchLands_NEW = require('./lands-code/fetch-lands').getFetchLands_NEW;
const getFilterLands_NEW = require('./lands-code/filter-lands').getFilterLands_NEW;
const getManLands_NEW = require('./lands-code/man-lands').getManLands_NEW;
const getManaRamp_NEW = require('./lands-code/mana-ramp').getManaRamp_NEW;
const getOtherLands_NEW = require('./lands-code/other-lands').getOtherLands_NEW;
const getPainLands_NEW = require('./lands-code/pain-lands').getPainLands_NEW;
const getScryLands_NEW = require('./lands-code/scry-lands').getScryLands_NEW;
const getShockLands_NEW = require('./lands-code/shock-lands').getShockLands_NEW;
const getTriLands_NEW = require('./lands-code/tri-lands').getTriLands_NEW;
const getUtilityLand_NEW = require('./lands-code/utility-lands').getUtilityLand_NEW;


const LandsRepository = require('./LandsRepository');
const ColorManager = require('./ColorManager');

document.addEventListener('DOMContentLoaded', function resetView() {
  const inputList = document.getElementsByTagName('input');
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].checked = false;
  }
  document.getElementById('output').value = 'Click to copy the lands';
  document.getElementById('output_NEW').value = 'Click to copy the lands';
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
    document.getElementById('output_NEW').value = printLandsWithTitle_NEW(colorManager);
  }else{
    document.getElementById('detail').style.backgroundColor = "red";
    document.getElementById('output_NEW').value = printLandsNoTitle_NEW(colorManager);
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
    printLands(colorArr);

    //NEW
    if (detail_checked) {
      document.getElementById('output_NEW').value = printLandsWithTitle_NEW(colorManager);
    } else {
      document.getElementById('output_NEW').value = printLandsNoTitle_NEW(colorManager);
    }

  } else {
    document.getElementById('output').value = 'Click to copy the lands';
    document.getElementById('output_NEW').value = 'Click to copy the lands';
  }
}

function printLands(colorArr, qtdColor = colorArr.length) {
  let resp = '';

  resp = [
    getDuals(colorArr),
    getFetchLands(colorArr),
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
    getBasicLands(colorArr),
    getUtilityLand(colorArr),
    getManaRamp(colorArr),
  ].map((elem) => {
    if (elem) {
      return `${elem}\n`;
    } else {
      return '';
    }
  }).join('');

  document.getElementById('output').value = resp;

}

function printLandsNoTitle_NEW(colorManager) {
  let resp = '';
  let landsRepository = new LandsRepository('Lands');

  if(colorManager.qtdColor() > 0){
    if(colorManager.qtdColor() > 1){
      landsRepository.addDictLands(getDualLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getFetchLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getShockLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getPainLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getManLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getFilterLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getOtherLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getTriLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getScryLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getBattleLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getCheckLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getBounceLands_NEW(colorManager).getDictLands());
      landsRepository.addDictLands(getAnyColorLand_NEW(colorManager).getDictLands());
    }
    resp += landsRepositoryToString_NEW(landsRepository);
    resp += landsRepositoryToString_NEW(getBasicLands_NEW(colorManager));
    resp += landsRepositoryToString_NEW(getUtilityLand_NEW(colorManager));
    resp += landsRepositoryToString_NEW(getManaRamp_NEW(colorManager));
  }

  return resp;
}

function printLandsWithTitle_NEW(colorManager) {
  let resp = '';
  if(colorManager.qtdColor() > 0){
    if(colorManager.qtdColor() > 1){
      resp += landsRepositoryToString_NEW(getDualLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getFetchLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getShockLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getPainLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getManLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getFilterLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getOtherLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getTriLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getScryLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getBattleLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getCheckLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getBounceLands_NEW(colorManager));
      resp += landsRepositoryToString_NEW(getAnyColorLand_NEW(colorManager));
    }
    resp += landsRepositoryToString_NEW(getBasicLands_NEW(colorManager));
    resp += landsRepositoryToString_NEW(getUtilityLand_NEW(colorManager));
    resp += landsRepositoryToString_NEW(getManaRamp_NEW(colorManager));
  }
  return resp;
}

function landsRepositoryToString_NEW(landsRepository) {
  let resp = '';

  if (!landsRepository.isEmpty()) {
    resp = '//' + landsRepository.title + ' :' + landsRepository.qtdLands() +'\n';
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
