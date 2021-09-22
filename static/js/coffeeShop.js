"use strict";


// Takes in an item name and appends it to the #cart-items
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// Empty the cart 
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

// Takes in a price and increments cart total by said price and return a new cart total
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

// Takes in amount of current order and adds to amount already sold. Then updates HTML page.
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

// Takes in progress value and status message then updates the order progress and order status message on web page.
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
// 
const button = document.querySelector('.add-to-order');

button.addEventListener('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

const button2 = document.querySelector('#place-order');

button2.addEventListener('click', () => {
  
  const coffeeNum = $('#cart-items').children().length;

  incrementCoffeeSold(coffeeNum);
  resetCart();
});
