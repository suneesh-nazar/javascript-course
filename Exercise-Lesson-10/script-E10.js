// JavaScript Code for Exercises 10

// 10d - 10e ====================================
function toggleButton(selector) {
  const button = document.querySelector(selector);

  if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  } else {
    button.classList.add("is-toggled");
  }
}

// 10e ====================================

function toggleOneButton(selector) {
  const button = document.querySelector(selector);

  checkOtherIsToggled(button);
  if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  } else {
    button.classList.add("is-toggled");
  }
}

function checkOtherIsToggled(button){
  previousButton = document.querySelector('.is-toggled');
  if (previousButton && button !== previousButton){
    previousButton.classList.remove('is-toggled');
  }
}

// 10h - DOM with CSS====================================

function subscribe() {
  const subscribeButton = document.querySelector(".js-subscribe-button");

  if (subscribeButton.innerText === "Subscribe") {
    subscribeButton.innerText = "Subscribed";
    subscribeButton.classList.add("is-subscribed");
  } else {
    subscribeButton.innerText = "Subscribe";
    subscribeButton.classList.remove("is-subscribed");
  }
}

function calculateTotal() {
  let cost = document.querySelector(".js-cost-input").value * 100;

  if (cost >= 0) {
    if (cost < 4000) {
      cost += 1000;
    }
    document.querySelector(".js-total-cost").innerHTML = `$${cost / 100}`;
    document.querySelector(".js-total-cost").classList.remove('cost-error');
  } else {
    document.querySelector(".js-total-cost").innerHTML = `Error: cost cannot be less than $0`;
    document.querySelector(".js-total-cost").classList.add('cost-error');
  }
}

function handleCostInputKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  } else if (event.key === "Escape") {
    document.querySelector(".js-cost-input").value = "";
  }
}

// 10i-10j - Calculator =========================================

let calculation = localStorage.getItem("calculation") || "";
displayCalculation();

function updateCalculation(value) {
  if (value === "=" && calculation) {
    calculation = eval(calculation);
  } else if (value === "C") {
    calculation = "";
    localStorage.setItem("calculation", calculation);
    displayCalculation();
    return;
  } else {
    calculation += value;
  }
  
  localStorage.setItem("calculation", calculation);
  displayCalculation();
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}