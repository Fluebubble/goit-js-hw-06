function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputFieldEl = document.querySelector("input");

const createButtonEl = document.querySelector("[data-create]");
createButtonEl.addEventListener("click", onCreateButtonElClick);

const destroyButtonEl = document.querySelector("[data-destroy]");
destroyButtonEl.addEventListener("click", onDestroyButtonElClick);

const divBoxesEl = document.querySelector("#boxes");
let boxSize = 30;

function onCreateButtonElClick() {
  let generatedBoxes = [];
  const numberOfNewBoxes = inputFieldEl.value;

  for (let i = 0; i < numberOfNewBoxes; i += 1) {
    generatedBoxes.push(
      `<div style = "width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
      );
    boxSize += 10;
  }
  
  divBoxesEl.insertAdjacentHTML("beforeend", generatedBoxes.join(""));
}

function onDestroyButtonElClick() {
  divBoxesEl.innerHTML = "";
  boxSize = 30;
}
