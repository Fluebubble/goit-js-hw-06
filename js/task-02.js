const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListEl = document.querySelector("#ingredients");
// console.log(ingredientsListEl);

// const potatoesItemEl = document.createElement("li");
// potatoesItemEl.classList.add("item");
// potatoesItemEl.textContent = ingredients[0];

// const mushroomsItemEl = document.createElement("li");
// mushroomsItemEl.classList.add("item");
// mushroomsItemEl.textContent = ingredients[1];

// const garlicItemEl = document.createElement("li");
// garlicItemEl.classList.add("item");
// garlicItemEl.textContent = ingredients[2];

// const tomatosItemEl = document.createElement("li");
// tomatosItemEl.classList.add("item");
// tomatosItemEl.textContent = ingredients[3];

// const herbsItemEl = document.createElement("li");
// herbsItemEl.classList.add("item");
// herbsItemEl.textContent = ingredients[4];

// const condimentsItemEl = document.createElement("li");
// condimentsItemEl.classList.add("item");
// condimentsItemEl.textContent = ingredients[5];

// console.log(potatoesItemEl);
// console.log(mushroomsItemEl);
// console.log(garlicItemEl);
// console.log(tomatosItemEl);
// console.log(herbsItemEl);
// console.log(condimentsItemEl);

const arrayOfElements = []
for (let ingredient of ingredients) {
  arrayOfElements.push(document.createElement("li"));
  console.log(arrayOfElements);
  arrayOfElements[ingredients.indexOf(ingredient)].textContent = ingredient;
  arrayOfElements[ingredients.indexOf(ingredient)].classList.add("item");
  console.log(arrayOfElements[ingredients.indexOf(ingredient)]);

  // arrayOfElements[ingredient].classList.add("item");
}

console.log(arrayOfElements)

ingredientsListEl.append(...arrayOfElements);