// TODO: Write JavaScript code here! e.g. to test:
console.log('Individual Project 3, ready to start!');
let correctCount = 0;
let incorrectCount = 0;
let lives = 10;

// ----//
// Reference from Blackbox AI, "how do i hide elements when a variable goes to 0"
// Define the elements
const questionsContainer = document.getElementById('all_questions');
const questions = document.querySelectorAll('.question');

// Function to hide elements when variable goes under 0
function hideElements() {
    questionsContainer.style.display = 'none';
    questions.forEach(question => {
        question.style.display = 'none';
    });
}
// ----//

function checkresults() {
    // Game wins at 5
    if (correctCount === 5) {
        // Add the class to h1 tag
        document.getElementById("results").className = 'gameover';
        document.getElementById("results").innerHTML = 'YOU WIN!';

        // Hide everything else
        hideElements();
    }   
    else if (lives === 0) {
        document.getElementById("results").className = 'gameover';
        document.getElementById("results").innerHTML = 'GAME OVER!';

        // Hide everything else
        hideElements();
    }
}

function correct() {
    // function, triggered?
    console.log('Correct');

    // Add count and update message 
    document.querySelector('#correct_count').innerHTML = ++correctCount;
    document.getElementById('message').innerHTML = 'Correct, good job!';
    console.log(correctCount)
    checkresults()
}

function incorrect() {
    // function, triggered?
    console.log('Incorrect');
    // Add count and update message 
    document.querySelector('#incorrect_count').innerHTML = ++incorrectCount;
    document.getElementById('message').innerHTML = 'Incorrect! You lose a life.';
    
    lives--;
    if (lives <= 0) {
        lives = 0;

    document.querySelector('#lives_count').innerHTML = lives;
    checkresults();
    }
}