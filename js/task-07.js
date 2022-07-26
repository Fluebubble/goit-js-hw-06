const rangeInputEl = document.querySelector("#font-size-control");
console.log(rangeInputEl.value);

const textLabelEl = document.querySelector("#text");

rangeInputEl.addEventListener("change", updateFontSize);

function updateFontSize() {
    textLabelEl.setAttribute("style", `font-size: ${rangeInputEl.value}px`)
    console.log(rangeInputEl.value);

}