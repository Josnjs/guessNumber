'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
console.log(secretNumber);

let score = 4;
const perso = document.querySelector('#num');

const check = document.querySelector('.check').addEventListener('click', () => {

    let guess = document.querySelector('.guess').value;

    if (!guess) {
        document.querySelector('.start').textContent = 'Informe um número válido...';
    } else if (guess == secretNumber) {
        document.querySelector('#num').textContent = secretNumber;
        document.querySelector('.start').textContent = 'Wins';
        perso.classList.add('checked');
        document.querySelector('.check').disabled = true;
    } else if (guess < secretNumber) {
        document.querySelector('.start').textContent = 'Tente um número maior...';
    } else if (guess > secretNumber) {
        document.querySelector('.start').textContent = 'Tente um número menor...';
    };

    if (guess) {
        document.querySelector('.score').textContent = score;
        score--;
    };
    if (score == -1) {
        if (guess == secretNumber) {
            document.querySelector('.start').textContent = 'Você acertou na ultima tentaiva, que sorte...';
        } else {
            document.querySelector('.start').textContent = 'Você perdeu';
            score = 0;
            document.querySelector('.check').disabled = true;
        }
    }
});

const agains = document.querySelector('.agains').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
});


