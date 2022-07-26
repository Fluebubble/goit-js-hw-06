function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputFieldEl = document.querySelector("input");

const createButtonEl = document.querySelector("[data-create]");
createButtonEl.addEventListener("click", onCreateButtonElClick);

const destroyButtonEl = document.querySelector("[data-destroy]");
destroyButtonEl.addEventListener("click", onDestroyButtonElClick);

const divBoxesEl = document.querySelector("#boxes");

function onCreateButtonElClick() {
  let generatedBoxes = [];
  let boxSize = 30;
  const numberOfNewBoxes = inputFieldEl.value;

  for (let i = 0; i < numberOfNewBoxes; i += 1) {
    generatedBoxes.push(
      `<div style = "width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
      );
    boxSize += 10;
    }
  divBoxesEl.innerHTML = generatedBoxes.join("");
  // console.log(inputFieldEl.value);
  console.log(divBoxesEl.innerHTML);

}

function onDestroyButtonElClick() {
  divBoxesEl.innerHTML = "";
}


console.log(createButtonEl)
console.log(inputFieldEl)