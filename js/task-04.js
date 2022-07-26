let counterValue = 0;

const incrementButtonEl = document.querySelector('[data-action="increment"]');
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

incrementButtonEl.addEventListener('click', increaseValue);
decrementButtonEl.addEventListener('click', decreaseValue);

function increaseValue() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function decreaseValue() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}