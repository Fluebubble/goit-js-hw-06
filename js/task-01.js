const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesRef.length}`);

// const firstCategoryRef = document.querySelectorAll("h2")[0];
// const secondCategoryRef = document.querySelectorAll("h2")[1];
// const thirdCategoryRef = document.querySelectorAll("h2")[2];

// const firstCategoryElementsRef = categoriesRef[1].querySelectorAll("li");

// console.log(`Category: ${firstCategoryRef.textContent}`);


// const test = firstCategoryRef

for (let i = 0; i < categoriesRef.length; i += 1) {
    console.log(document.querySelectorAll("h2")[i].textContent);
    console.log(`Elements: ${categoriesRef[i].querySelectorAll("li").length}`);

}

//console.log(`Elements: ${categoriesRef[0].querySelectorAll("li").length}`);

// for (category of categoriesEl) {
//     console.log(category)
// }