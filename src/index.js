const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', handleOnStartBtnClick);
refs.stopBtn.addEventListener('click', handleOnStopBtnClick);
let id = null;
function submitbtn(){
  document.querySelector('[data-action="start"]').disabled = true;

}
function handleOnStartBtnClick(event) {
  if (event.currentTarget === refs.startBtn) {
submitbtn()
  }
  id = setInterval(setBodyBackgroundColor, 1000);
}

function handleOnStopBtnClick(event) {
  if (event.currentTarget === refs.stopBtn) {
    refs.startBtn.removeAttribute('disabled')
  }
  clearInterval(id);
  id = null;
}

function setBodyBackgroundColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}