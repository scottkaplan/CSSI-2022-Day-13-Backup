const toppings = document.querySelectorAll(".topping");

toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});

const checkoutButton = document.querySelector(".button");
const answerHolder = document.querySelector("#total");

checkoutButton.addEventListener("click", (e) => {
  const ingredients = document.querySelectorAll(".order .topping");
  let total = 0;
   ingredients.forEach((ingredient) => {
     total += Number(ingredient.dataset.price);
   });
   answerHolder.innerHTML = `The total cost of your burger is $${total}`;
});

const navButtons = document.querySelectorAll("#nav .topping");
const orderDiv = document.querySelector(".order");
navButtons.forEach((navButton) => {
   navButton.addEventListener("click", () => {
     orderDiv.innerHTML += `<div class="topping ${navButton.dataset.ingredient}" data-ingredient=${navButton.dataset.ingredient} data-price=${navButton.dataset.price}>${navButton.dataset.ingredient}</div>`;
   });
 });
