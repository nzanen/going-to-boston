'use strict';

// Element selection
const p0Score1El = document.querySelector('.p0Score1');
const p0Score2El = document.querySelector('.p0Score2');
const p0Score3El = document.querySelector('.p0Score3');
const p0TotalScoreEl = document.querySelector('.p0TotalScore');

const p1Score1El = document.querySelector('.p1Score1');
const p1Score2El = document.querySelector('.p1Score2');
const p1Score3El = document.querySelector('.p1Score3');
const p1TotalScoreEl = document.querySelector('.p1TotalScore');

const btnRoll = document.querySelector('.btnRoll');
const btnNew = document.querySelector('.btnNew');
const die1 = document.getElementById('die1');
const die2 = document.getElementById('die2');
const die3 = document.getElementById('die3');

// Scores
let p0Score1 = 0;
let p0Score2 = 0;
let p0Score3 = 0;
let p0TotalScore = 0;

// Dice roll
function dieRoll() {
  const result = Math.trunc(Math.random() * 6) + 1;
  return result;
}

let rollNumber = 1;

btnRoll.addEventListener('click', function () {
  // Remove previous highlight
  die1.classList.remove('highlight');
  die2.classList.remove('highlight');
  die3.classList.remove('highlight');

  if (rollNumber === 1) {
    // Roll dice and log results
    const dieRoll1 = dieRoll();
    const dieRoll2 = dieRoll();
    const dieRoll3 = dieRoll();
    const rollResult = [dieRoll1, dieRoll2, dieRoll3];
    const highestRoll = Math.max(...rollResult);
    const highestRollDie = rollResult.indexOf(highestRoll) + 1;
    console.log(`Die rolls: ${rollResult}`);
    console.log(`Highest roll: ${highestRoll}`);
    console.log(`Die with highest roll: #${highestRollDie}`);

    // Show result dice
    die1.src = `dice-${dieRoll1}.png`;
    die2.src = `dice-${dieRoll2}.png`;
    die3.src = `dice-${dieRoll3}.png`;

    // Highlight highest dice roll
    document.getElementById(`die${highestRollDie}`).classList.add('highlight');

    // Added score to current roll score

    p0Score1 = highestRoll;
    p0TotalScore += highestRoll;

    document.querySelector(`.p0Score${rollNumber}`).textContent = highestRoll;
    p0TotalScoreEl.textContent = p0TotalScore;
    // Increase roll number
    rollNumber += 1;
  } else if (rollNumber === 2) {
    const dieRoll1 = dieRoll();
    const dieRoll2 = dieRoll();
    const dieRoll3 = dieRoll();
    const rollResult = [dieRoll1, dieRoll2, dieRoll3];
    const highestRoll = Math.max(...rollResult);
    const highestRollDie = rollResult.indexOf(highestRoll) + 1;
    console.log(`Die rolls: ${rollResult}`);
    console.log(`Highest roll: ${highestRoll}`);
    console.log(`Die with highest roll: #${highestRollDie}`);

    // Show result dice
    die1.src = `dice-${dieRoll1}.png`;
    die2.src = `dice-${dieRoll2}.png`;
    die3.src = `dice-${dieRoll3}.png`;

    // Highlight highest dice roll
    document.getElementById(`die${highestRollDie}`).classList.add('highlight');

    // Added score to current roll score
    p0Score2 = highestRoll;
    p0TotalScore += highestRoll;

    p0Score2El.textContent = p0Score2;
    p0TotalScoreEl.textContent = p0TotalScore;

    // Increase roll number
    rollNumber += 1;
  } else if (rollNumber === 3) {
    const dieRoll1 = dieRoll();
    const dieRoll2 = dieRoll();
    const dieRoll3 = dieRoll();
    const rollResult = [dieRoll1, dieRoll2, dieRoll3];
    const highestRoll = Math.max(...rollResult);
    const highestRollDie = rollResult.indexOf(highestRoll) + 1;
    console.log(`Die rolls: ${rollResult}`);
    console.log(`Highest roll: ${highestRoll}`);
    console.log(`Die with highest roll: #${highestRollDie}`);

    // Show result dice
    die1.src = `dice-${dieRoll1}.png`;
    die2.src = `dice-${dieRoll2}.png`;
    die3.src = `dice-${dieRoll3}.png`;

    // Highlight highest dice roll
    document.getElementById(`die${highestRollDie}`).classList.add('highlight');

    // Added score to current roll score
    p0Score3 = highestRoll;
    p0TotalScore += highestRoll;

    p0Score3El.textContent = p0Score3;
    p0TotalScoreEl.textContent = p0TotalScore;

    // Reset roll number
    rollNumber = 1;
  }
});

btnNew.addEventListener('click', function () {
  console.log(`New game clicked`);
});
