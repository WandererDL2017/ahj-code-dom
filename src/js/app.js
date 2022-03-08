// TODO: write code here
const gameDesk = document.querySelector('.gamedesk');
const stringLength = 4;
const squersLength = 4;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function addEnemy() {
  const enemy = document.createElement('div');
  enemy.classList.add('square__imgEnemy');
  const rows = document.querySelectorAll('.string__square');
  const arrayRows = Array.from(rows);
  setInterval(() => {
    const numberRow = getRandomInt(12);
    arrayRows[numberRow].appendChild(enemy);
  }, 1000);
}

function createRows(string) {
  for (let i = 0; i < squersLength; i += 1) {
    const squer = document.createElement('div');
    squer.classList.add('string__square');
    string.appendChild(squer);
  }
}

for (let i = 0; i < stringLength; i += 1) {
  const column = document.createElement('div');
  column.classList.add('gamedesk__string');
  createRows(column);
  gameDesk.appendChild(column);
}

addEnemy();
