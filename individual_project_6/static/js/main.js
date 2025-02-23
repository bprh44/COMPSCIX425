// main.js

// The following functions are partially complete. Use your knowledge of DOM
// manipulation and events to complete them and complete the game.  Feel free
// to test and inspect other code here, but you only need to actually fill in
// the blank areas of functions marked with "TODO":


// Retrieve an array of matching button DOM elements, if the given "numberButton" were clicked
function getMatchingButtons(numberButton) {
    let myValue = numberButton.getAttribute('data-value');
    let myTD = numberButton.parentNode;
    let myTR = myTD.parentNode;
    console.log("new", myValue);
    let buttons = []; // This will be a "bucket" to hold all the matching buttons

    // Get my right sibling... (e.g. NEXT <td></td> cell after me)
    let nextTD = myTD.nextSibling;
    if (nextTD) { // There is a next cell (e.g. not at the right side)
        let nextButton = nextTD.querySelector('button');
        if (nextButton) { // A button was added to this next cell...
            let nextButtonValue = nextButton.getAttribute('data-value');
            if (nextButtonValue === myValue) {
                buttons.push(nextButton); // Add it to the Array
                console.log("R", nextButton);
            }
        }
    }

    // Get siblings
    let prevTD = myTD.previousSibling; // left
    let prevTR = myTR.previousSibling; // above
    let nextTR = myTR.nextSibling; //below
    
    // Left
    if (prevTD) { 
        let prevButton = prevTD.querySelector('button');
        if (prevButton) { 
            if (prevButton.getAttribute('data-value') === myValue) {
                buttons.push(prevButton); // Add it to the Array
                console.log("L", prevButton);
            }
        }
    }

    // Above
    if (prevTR) { 
        let aboveTD = prevTR.children[myTD.cellIndex];
        if (aboveTD) { 
            let aboveButton = aboveTD.querySelector('button');
            if (aboveButton) {
                if (aboveButton.getAttribute('data-value') === myValue) {
                    buttons.push(aboveButton); // Add it to the Array
                    console.log("U", aboveButton);

                }
            }
        }
    }

    // Below
    if (nextTR) { 
        let belowTD = nextTR.children[myTD.cellIndex];
        if (belowTD) { 
            let belowButton = belowTD.querySelector('button');
            if (belowButton) {
                if (belowButton.getAttribute('data-value') === myValue) {
                    buttons.push(belowButton); // Add it to the Array
                    console.log("D", belowButton);
                }
            }
        }
    }
    // Always remember to return the variables you need outside!
    return buttons;
};

function setupNumberButton(numberButton) {
    numberButton.addEventListener('click', function () {
        let buttons = getMatchingButtons(numberButton);
        console.log(buttons);
        if (buttons.length >= 2) {
            // This means there are at least 2 other matching buttons, thus 3 total,
            // and we have a match.
            console.log('We have a MATCH!');

            let sum = parseInt(numberButton.getAttribute('data-value'));
            console.log("starting", sum);
            buttons.forEach(button => {
                sum += parseInt(button.getAttribute('data-value'));
                console.log(sum);
                button.parentNode.classList.remove('Tile--highlight');
                button.remove();
            });

            // Update the button with the sum
            numberButton.innerText = sum;
            numberButton.setAttribute('data-value', sum); // Update the data-value
            console.log("updated", sum);
        }
    });

    numberButton.addEventListener('mouseover', function () {
        // This means the user "hovered" or moved their mouse over
        let buttons = getMatchingButtons(numberButton);
        // TODO: Complete this 
        // Hint: Similar to click, but only add the class Tile--highlight to the button's parent element
        buttons.forEach(button => {
            button.parentNode.classList.add('Tile--highlight');
        });
    });

    // TODO: Add another event for mouseleave
    // Hint: Similar to mouseover, but removing
    numberButton.addEventListener('mouseleave', function () {
        let buttons = getMatchingButtons(numberButton);
        buttons.forEach(button => {
            button.parentNode.classList.remove('Tile--highlight');
        });
    });







}

console.log('Main.js loaded');
