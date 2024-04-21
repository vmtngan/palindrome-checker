'use strict';

const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const normalizeInput = (input) =>
  input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

const isPalindrome = (input) => {
  const str = normalizeInput(input);
  return str === [...str].reverse().join('');
};

const checkAndShowResult = (input) => {
  const originalInput = input;

  if (input === '') {
    alert('Please input a value');
    return;
  }

  resultDiv.replaceChildren();

  const result = `<p class="user-input"><strong>${originalInput}</strong> ${
    isPalindrome(input) ? 'is' : 'is not'
  } a palindrome.</p>`;

  resultDiv.insertAdjacentHTML('beforeend', result);
  resultDiv.classList.remove('hidden');

  userInput.value = '';
};

checkPalindromeBtn.addEventListener('click', () => {
  checkAndShowResult(userInput.value);
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkAndShowResult(userInput.value);
  }
});
