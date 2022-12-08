// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (!state.whiteSauce) {
    document.querySelector('.sauce').classList.remove('sauce-white');
  } else {
    document.querySelector('.sauce').classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderButtons() {
  const btn = document.querySelectorAll(".panel .btn");
  if (!state.pepperoni) {btn[0].classList.remove('active')}
  else {btn[0].classList.add('active')}
  if (!state.mushrooms) {btn[1].classList.remove('active')}
  else {btn[1].classList.add('active')}
  if (!state.greenPeppers) {btn[2].classList.remove('active')}
  else {btn[2].classList.add('active')}
  if (!state.whiteSauce) {btn[3].classList.remove('active')}
  else {btn[3].classList.add('active')}
  if (!state.glutenFreeCrust) {btn[4].classList.remove('active')}
  else {btn[4].classList.add('active')}
} 


const price = document.querySelectorAll("aside li")
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let finalePrice = []
  let montantTotal = []
  if (state.pepperoni) {finalePrice.push(price[0].innerHTML),montantTotal.push(1),price[0].style.visibility = "visible"}
  else {price[0].style.visibility = "hidden"}
  if (state.mushrooms) {finalePrice.push(price[1].innerHTML),montantTotal.push(1),price[1].style.visibility = "visible"}
  else {price[1].style.visibility = "hidden"}
  if (state.greenPeppers) {finalePrice.push(price[2].innerHTML),montantTotal.push(1),price[2].style.visibility = "visible"}
  else {price[2].style.visibility = "hidden"}
  if (state.whiteSauce) {finalePrice.push(price[3].innerHTML),montantTotal.push(3),price[3].style.visibility = "visible"}
  else {price[3].style.visibility = "hidden"}
  if (state.glutenFreeCrust) {finalePrice.push(price[4].innerHTML),montantTotal.push(5),price[4].style.visibility = "visible"}
  else {price[4].style.visibility = "hidden"}
  document.querySelector("aside strong").innerHTML = `$${montantTotal.reduce((a,b)=> a+b,10)}`
  console.log(finalePrice)
  console.log(montantTotal)

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

// <!-- Example of a pizza with white-sauce and a gluten-free crust -->
// <section class="crust crust-gluten-free">
//   <section class="cheese"></section>
//   <section class="sauce sauce-white"></section>
// </section>

// <!-- Example of a pizza with no white-sauce and no gluten-free crust -->
// <section class="crust">
//   <section class="cheese"></section>
//   <section class="sauce"></section>
// </section>