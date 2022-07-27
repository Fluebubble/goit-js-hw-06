const inputFieldEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

inputFieldEl.addEventListener("input", textChange);

function textChange(event) {
    textEl.textContent = event.currentTarget.value;
    if (textEl.textContent.length === 0) {
        textEl.textContent = "Anonymous";
    }
}