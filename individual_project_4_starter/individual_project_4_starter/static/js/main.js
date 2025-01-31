
// Note: Two basic functions are here for you to examine.
// Open the Console to see the results.
function pressTwo() {
    expression = expression + '2';
    console.log('Two was pressed. New expression:', expression);
    updateDisplay();
}
function pressTimes() {
    expression = expression + '*';
    console.log('Times was pressed. New expression:', expression);
    updateDisplay();
}


/* ***************************************** */
// The following is the function structure of the solution.
// Feel free to use this as a guide, or change it to your own!

/*
   Updates the calculator display
*/
function updateDisplay() {
    let displayDiv = document.querySelector('#display')
    // Hint: Will eventually need changes!
    displayDiv.innerHTML = expression;
}

/*
   Deletes the last typed character
*/
function backspace() {
    // TODO: Fill this in!
}

/*
   Clears what's typed
*/
function clearExpression() {
    // TODO: Fill this in!
}

/*
   Adds one symbol to the expression
*/
function typeSymbol(symbol) {
    // TODO: Fill this in!
}

/*
   Adds one symbol to the expression, but with a different user-visible label
*/
function typeSpecialSymbol(symbol, label) {
    // TODO: Fill this in!
}

/*
   Loads the numeric result of the last computation into the expression
*/
function loadResult() {
    // TODO: Fill this in!
}


/*
   Appends the current expression to the "receipt" below the calculator
*/
function addToReceipt() {
    let receiptDiv = document.querySelector('#receipt_contents')
    // TODO: Fill this in!
    receiptDiv.innerHTML = receipt;
}

/*
   Display error message to screen
*/
function showError(message) {
    // TODO: Fill this in!
}

addToReceipt(); // Call right away to show the default message
