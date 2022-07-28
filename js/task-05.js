const inputFieldEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

inputFieldEl.addEventListener("input", textChange);

function textChange(event) {
    if (inputFieldEl.value.length > 0) {
        textEl.textContent = event.currentTarget.value;
    } else {
        textEl.textContent = "Anonymous";
    }
}