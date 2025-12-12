// console.log("Hello from JS");
// console.log(document);

// const liCollection = document.getElementsByTagName('li');
//         for (let li of liCollection) {
//             console.log(li.innerText);
//         }
// console.log("Heda");

const foodTitleH1 = document.getElementById("food-title");
console.log(foodTitleH1.innerText);

const foreignFood = document.getElementsByClassName("foreign");
console.log(foreignFood);

for (let food of foreignFood)
    console.log(food.innerText); 

const spanSelector = document.querySelectorAll(".old-dhaka p span");
console.log(spanSelector);

for (let span of spanSelector)
    console.log(span.innerText); 