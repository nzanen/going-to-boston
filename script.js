'use strict';

// Element selection
const btnRoll = document.querySelector('.btnRoll');
const btnNew = document.querySelector('.btnNew');
const die1 = document.getElementById('die1');
const die2 = document.getElementById('die2');
const die3 = document.getElementById('die3');

btnRoll.addEventListener('click', function () {
  // 1. Roll dice
  const dieRoll1 = Math.trunc(Math.random() * 6) + 1;
  const dieRoll2 = Math.trunc(Math.random() * 6) + 1;
  const dieRoll3 = Math.trunc(Math.random() * 6) + 1;
  console.log(`Die rolls: ${dieRoll1} ${dieRoll2} ${dieRoll3}`);

  // 2. Show result dice
  die1.src = `dice-${dieRoll1}.png`;
  die2.src = `dice-${dieRoll2}.png`;
  die3.src = `dice-${dieRoll3}.png`;
});

btnNew.addEventListener('click', function () {
  console.log(`New game clicked`);
});
