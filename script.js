const toppings = document.querySelectorAll(".topping");

toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});

 const checkoutButton = document.querySelector(".button");
 const ingredients = document.querySelectorAll(".order .topping");
 const answerHolder = document.querySelector("#total");
 let total = 0;
 checkoutButton.addEventListener("click", (e) => {
   ingredients.forEach((ingredient) => {
     total += Number(ingredient.dataset.price);
   });
   answerHolder.innerHTML = `The total cost of your burger is $${total}`;
 });
