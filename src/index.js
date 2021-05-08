const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const DELAY = 1000;
let startIntervalId = null;
let isActive = false;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  if (isActive) {
    return;
  }
  isActive = true;
  startIntervalId = setInterval(changeBgColor, DELAY);
}

function onBtnStopClick() {
  clearInterval(startIntervalId);
}

function changeBgColor() {
  let currentColorIndex = randomIntegerFromInterval(0, colors.length);
  document.body.style.backgroundColor = colors[currentColorIndex];
}
