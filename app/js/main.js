document.addEventListener('DOMContentLoaded', function resetView() {
  const inputList = document.getElementsByTagName('input');
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].checked = false;
  }
  document.getElementById('output').value = 'Click to copy the lands';
});

function copyToClipboard(event) {
  const copyText = document.getElementById('output');
  event.preventDefault();
  copyText.select();
  if (copyText.value !== 'Click to copy the lands') {
    document.execCommand('copy');
  }
}

const checked = {
  white: false, blue: false, black: false, green: false, red: false
};

function onChecked(obj) {
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
    getOriginalLands(colorArr),
    getFetchLands(colorArr),
    getShockLands(colorArr),
    getPainLands(colorArr),
    getFilterLands(colorArr),
    getOtherLands(colorArr),
    getTriLands(colorArr),
    getScryLands(colorArr),
    getBattleLands(colorArr),
    getCheckLands(colorArr),
    getFilterLands(colorArr),
    getBounceLands(colorArr),
    getAnyColorLand(colorArr),
    getUtilityLand(colorArr),
    getManaRocks(colorArr),
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
