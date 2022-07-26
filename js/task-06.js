const inputFieldEl = document.querySelector("#validation-input");
inputFieldEl.addEventListener("blur", checkValidLength)
// inputFieldEl.addEventListener("focus", checkLength)

const allowableLength = Number(inputFieldEl.getAttribute("data-length"));
console.log(allowableLength)

function checkValidLength() {
    if (inputFieldEl.value.length <= allowableLength) {
        if (inputFieldEl.classList.contains("invalid")) {
            inputFieldEl.classList.remove("invalid")
        }
        inputFieldEl.classList.add("valid")
    } else {
        if (inputFieldEl.classList.contains("valid")) {
            inputFieldEl.classList.remove("valid")
        }
        inputFieldEl.classList.add("invalid")
    }
}