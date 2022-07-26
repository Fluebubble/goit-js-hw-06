function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorEl = document.querySelector(".color");
const changeBgColorButtonEl = document.querySelector(".change-color");

changeBgColorButtonEl.addEventListener("click", onButtonClick);

function onButtonClick() {

  const BACKGROUND_COLOR = getRandomHexColor();
  document.body.setAttribute("style", `background-color: ${BACKGROUND_COLOR}`);
  spanColorEl.textContent = BACKGROUND_COLOR;
}