const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListEl = document.querySelector("#ingredients");

const arrayOfElements = []
for (let ingredient of ingredients) {
  arrayOfElements.push(document.createElement("li"));
  arrayOfElements[ingredients.indexOf(ingredient)].textContent = ingredient;
  arrayOfElements[ingredients.indexOf(ingredient)].classList.add("item");
}

console.log(arrayOfElements)

ingredientsListEl.append(...arrayOfElements);