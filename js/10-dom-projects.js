// JavaScript code for Lesson 10 - DOM projects

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

  if (cost > 0) {
    if (cost < 4000) {
      cost += 1000;
    }
    document.querySelector(".js-total-cost").innerHTML = `$${cost / 100}`;
  }
}

function handleCostInputKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  } else if (event.key === "Escape") {
    document.querySelector(".js-cost-input").value = "";
  }
}