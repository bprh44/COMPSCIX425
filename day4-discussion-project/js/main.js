let lettuceCount = 0;

function buyLettuce() {
  lettuceCount = lettuceCount + 1;

  let lettuceCountSpan = document.querySelector('#lettuce-count');
  lettuceCountSpan.textContent = lettuceCount;
}

let tomatoCount = 0;
function buyTomato() {
  tomatoCount += 1;

  let tomatoCountSpan = document.querySelector('#tomato-count');
  tomatoCountSpan.textContent = tomatoCount;
}

let oatsCount = 0;
function buyOat() {
  oatsCount += 1;

  let oatsCountSpan = document.querySelector('#oats-count');
  oatsCountSpan.textContent = oatsCount;
}


function showTotal() {
  let cost = lettuceCount * 5 + tomatoCount * 10 + oatsCount * 8;
  alert(
    'Total lettuce: ' + lettuceCount + '\n' +
    'Total tomatos: ' + tomatoCount + '\n' +
    'Total oats: ' + oatsCount + '\n' +
    'Total cost: $' + cost
  );
}


function showTotalBonus() {
  document.querySelector('.MainContent').innerHTML =
      '<h1>Total lettuce: ' + lettuceCount + '</h1>' +
      '<h1>Total tomatos: ' + tomatoCount + '</h1>' +
      '<h1>Total oats: ' + oatsCount + '</h1>';
}


