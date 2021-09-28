const box = document.getElementById('box');
const boxHeight = box.clientHeight;
const boxWidth = box.clientWidth;

const onMouseDown = e => {
  const { clientX, clientY } = e;
  setPosition(clientX, clientY);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};
const onMouseMove = e => {
  const { clientX, clientY } = e;
  setPosition(clientX, clientY);
};
const onMouseUp = () => {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
};

const setPosition = (x, y) => {
  let boxX = x;
  let boxY = y;
  if (x < 0) {
    boxX = 0;
  }
  if (x > document.documentElement.clientWidth) {
    x = document.documentElement.clientWidth;
  }
  if (y < 0) {
    boxY = 0;
  }
  if (y > document.documentElement.clientHeight) {
    boxY = document.documentElement.clientHeight;
  }

  const originBoxX = box.offsetLeft;
  const originBoxY = box.offsetTop;
  console.log(originBoxX, originBoxY);

  box.style.left = `${boxX}px`;
  box.style.top = `${boxY}px`;
};

box.addEventListener('mousedown', onMouseDown);
