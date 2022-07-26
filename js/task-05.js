const inputFieldEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

inputFieldEl.addEventListener("input", textChange);

function textChange() {
    textEl.textContent = inputFieldEl.value;
}