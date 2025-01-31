let items = [
  {
    title: "Lettuce",
    description: "Lettuce deliver the finest leaves to you.",
    cost: 5,
    item: "Leaf of Lettuce",
  },
  {
    title: "Tomato",
    description: "Some same tomato, some say tomahto, we say buy them from us.",
    cost: 10,
    item: "Tomato",
  },
  {
    title: "Oats",
    description: "Oats and goats and boats and totes.",
    cost: 8,
    item: "Oat Grain",
  },
];

let totals = {
  Lettuce: 0,
  Oats: 0,
  Tomato: 0,
};

function renderItems() {

  // Grab the shopping div from the page
  let shoppingDiv = document.querySelector('.MainContent');
  shoppingDiv.innerHTML = ''; // Clear existing contents

  // Loop through the items in our list, creating new elements for each item
  for (let item of items) {

    // Make h1, strong, and p tag for the header, price, and  description of
    // each item for sale
    let header = document.createElement('h1');
    header.textContent = item.title;
    shoppingDiv.appendChild(header); // Add header to the div

    let strong = document.createElement('strong');
    strong.textContent = '$' + item.cost + ' / ' + item.item;
    shoppingDiv.appendChild(strong); // Add strong to the div

    let para = document.createElement('p');
    para.textContent = item.description;
    shoppingDiv.appendChild(para); // Add paragraph to the div

    // Make the button
    let button = document.createElement('button');
    button.textContent = 'Buy 1 ' + item.item;

    let title = item.title; // access the title, put it in a variable

    // Add an "onClick" event to the button 
    button.onclick = () => {
      totals[title] += 1;
      renderShoppingCart();
    };
    shoppingDiv.appendChild(button);
  }
}


function renderShoppingCart() {

  // Grab the shopping div from the page
  let shoppingCart = document.querySelector('#shopping-cart');
  shoppingCart.innerHTML = ''; // Clear existing contents

  // Loop through the items in our list, creating new elements for each item
  for (let item of items) {
    let para = document.createElement('p');

    // Grab the value from the object "totals", put it in a separate variable
    let value = totals[item.title];

    // Make h1 & p tag for the header and description of each item for sale
    para.textContent = item.title + ': ' + value;
    shoppingCart.appendChild(para); // Add paragraph to the div
  }
}


function showTotal() {
  // Grab the body from the page
  let mainContent = document.querySelector('.MainContent');
  mainContent.innerHTML = '<h1>Order Receipt</h1> <hr />';

  let totalCost = 0;

  // Loop through the items in our list, creating new elements for each item
  for (let item of items) {
    // Grab the count from the object "totals", put it in a separate variable
    let count = totals[item.title];

    // Add the header to the div
    let header = document.createElement('h2');
    header.textContent = 'Total ' + item.title + ': ' + count;
    mainContent.appendChild(header); // Add header to the div

    // Sum up the total cost in totalCost
    totalCost += count * item.cost;
  }

  let totalCostHeader = document.createElement('h1');

  // Make h1 & p tag for the header and description of each item for sale
  totalCostHeader.textContent = 'Total Cost: $' + totalCost;
  mainContent.appendChild(totalCostHeader); // Add to the div


  // Make the button
  let button = document.createElement('button');
  button.textContent = 'Next Customer';
  mainContent.appendChild(button);

  // Add an "onClick" event to the button 
  button.onclick = () => {
    location.reload();
  };
}

renderShoppingCart();
renderItems();
