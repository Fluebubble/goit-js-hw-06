const rangeInputEl = document.querySelector("#font-size-control");

const textLabelEl = document.querySelector("#text");

rangeInputEl.addEventListener("change", updateFontSize);

function updateFontSize() {
    textLabelEl.style.fontSize = `${rangeInputEl.value}px`;
}