const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesRef.length}`);

for (let i = 0; i < categoriesRef.length; i += 1) {
    console.log(document.querySelectorAll("h2")[i].textContent);
    console.log(`Elements: ${categoriesRef[i].querySelectorAll("li").length}`);

}
