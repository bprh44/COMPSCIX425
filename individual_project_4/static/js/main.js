
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

/*
   Updates the calculator display
*/
function updateDisplay() {
    let displayDiv = document.querySelector('#display')

    if(expression === "" ) {
        displayDiv.innerHTML = "&nbsp;";
    }
    // else if(faux != "") {
    //     displayDiv.innerHTML = expression + faux;
    // } 
    else {
        displayedExpression = expression.replace('*', 'x');
        displayedExpression = displayedExpression.replace('/', '÷');
        displayDiv.innerHTML = displayedExpression;
    }
}

/*
   Deletes the last typed character
*/
function backspace() {
    console.log("Removing last from", expression);
    expression = _removeLastCharacters(expression, 1);
    console.log(expression);
    updateDisplay();
}

/*
   Clears what's typed
*/
function clearExpression() {
    console.log("reseting!");
    expression = "";
    updateDisplay();
}

/*
   Adds one symbol to the expression
*/
function typeSymbol(symbol) {
    expression = expression.concat(symbol);
    console.log(symbol, " was pressed. New expression: : " , expression);
    updateDisplay();
}

/*
   Adds one symbol to the expression, but with a different user-visible label
*/
function typeSpecialSymbol(symbol, label) {
    console.log(label, " was pressed");
    expression = expression.concat(symbol);
    displayedExpression = displayedExpression.concat(label);
    console.log("exp: ", expression);
    console.log("dis: ", displayedExpression);
    updateDisplay();
}

/*
   Loads the numeric result of the last computation into the expression
*/
function loadResult() {
    expression = eval(expression);
    updateDisplay();
}

/*
   Appends the current expression to the "receipt" below the calculator
*/
function addToReceipt() {
    let receiptDiv = document.querySelector('#receipt_contents');
    if (receiptDiv.innerHTML.length <= 40) {
        receiptDiv.innerHTML = receipt + "<br />";
        console.log(receiptDiv.textContent.length);
    }
    else {
        console.log(111);
        receiptDiv.innerHTML += `${displayedExpression} = ${result} <br />`;
    }
}

/*
   Display error message to screen
*/
function showError(message) {
    console.log("ShowError");
    let errorDiv = document.querySelector('#error');
    errorDiv.innerHTML = message;
}

addToReceipt(); // Call right away to show the default message
