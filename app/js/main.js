const { getAnyColorLand } = require('./lands-code/any-color-lands');
const { getBasicLands } = require('./lands-code/basic-lands');
const { getBattleLands } = require('./lands-code/battle-and-fast-lands');
const { getCrowdLands } = require('./lands-code/crowd-lands');
const { getCheckLands } = require('./lands-code/check-lands');
const { getDualLands } = require('./lands-code/dual-lands');
const { getFetchLands } = require('./lands-code/fetch-lands');
const { getFilterLands } = require('./lands-code/filter-lands');
const { getManLands } = require('./lands-code/man-lands');
const { getManaRamp } = require('./lands-code/mana-ramp');
const { getOtherLands } = require('./lands-code/other-lands');
const { getPainLands } = require('./lands-code/pain-lands');
const { getScryLands } = require('./lands-code/scry-lands');
const { getShockLands } = require('./lands-code/shock-lands');
const { getTriLands } = require('./lands-code/tri-lands');
const { getUtilityLand } = require('./lands-code/utility-lands');


const LandsRepository = require('./LandsRepository');
const ColorManager = require('./ColorManager');

document.addEventListener('DOMContentLoaded', () => {
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
    console.log(`Copied the text: ${copyText.value}`);
    showSnackbar();
  }
};


let detail_checked = false;


const colorManager = new ColorManager();
let colorArr = [];

window.onChecked = function (obj) {
  const { name } = obj;
  const isChecked = obj.checked;

  if (name === 'details') {
    detail_checked = !detail_checked;
  }
  if (name !== 'details') {
    if (isChecked) {
      colorManager.addColor(name);
    } else {
      colorManager.removeColor(name);
    }
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
};

function printLandsNoTitle(colorManager) {
  let resp = '';
  const landsRepository = new LandsRepository('Lands');

  if (colorManager.qtdColor() > 0) {
    if (colorManager.qtdColor() > 1) {
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
      landsRepository.addDictLands(getCrowdLands(colorManager).getDictLands());
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
  if (colorManager.qtdColor() > 0) {
    if (colorManager.qtdColor() > 1) {
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
      resp += landsRepositoryToString(getCrowdLands(colorManager));
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
    resp = `//${landsRepository.title}: ${landsRepository.qtdLands()}\n`;
    for (const elem of landsRepository.getAllLands()) {
      resp += `${elem.join(' ')}\n`;
    }
    resp += '\n';
  }

  return resp;
}

function showSnackbar() {
  // Get the snackbar DIV
  const snackbar = document.getElementById('snackbar');

  // Add the "show" class to DIV
  snackbar.className = 'show';

  // After 3 seconds, remove the show class from DIV
  setTimeout(() => {
    snackbar.className = snackbar.className.replace('show', '');
  }, 3000);
}
