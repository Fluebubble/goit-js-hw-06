function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorEl = document.querySelector(".color");
const changeBgColorButtonEl = document.querySelector(".change-color");

changeBgColorButtonEl.addEventListener("click", onButtonClick);

function onButtonClick() {

  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  spanColorEl.textContent = backgroundColor;
}