/*
**
**

Hangman Game!

Guess the word with 3 lifes!

*/

const wordTag = document.querySelector('#theWord');
const question = document.querySelector('#question');
const form = document.querySelector('#theForm');
const lifes = document.querySelectorAll('.life');

const words = [
    'Pizza',
    'Game',
    'Javascript',
    'Hangman',
    'License',
    'Programming',
    'Terminal',
    'Football',
    'Tiger',
    'Monkey',
    'Iphone',
    'Database',
    'Image',
    'Project',
    'Movie'
];

const choosed = words[Math.floor(Math.random() * words.length)].toUpperCase();

let oscured = '';

for (let i = 0; i < choosed.length; i++) {
    if (i > 0 && i < choosed.length - 1) {
        oscured += '_';
    }
    else {
        oscured += choosed[i];
    }
}

wordTag.innerHTML = oscured;

question.innerHTML = 'Guess the word or insert a letter, you have 3 lifes:';

let attempts = 2;

function hangman() {
    let textNow = wordTag.innerHTML;
    console.log(textNow);
    let answer = form['answer'].value.toUpperCase();
    let reveal = '';

    if (answer.length === 1 && choosed.indexOf(answer) > -1) {
        reveal += choosed[0];
        for (let i = 1; i < choosed.length - 1; i++) {
            if (answer != choosed[i] && textNow[i] === '_') {
                reveal += '_';
            }
            else {
                reveal += choosed[i];
            }
        }
        reveal += choosed[choosed.length - 1];

        if (reveal === choosed) {
            alert('You win! The word is: ' + choosed);
            wordTag.innerHTML = choosed;
            form['answer'].value = '';
            location.reload();
        }

        wordTag.innerHTML = reveal;
        form['answer'].value = '';
    }
    else if (answer.length > 1 && answer === choosed) {
        alert('You win! The word is: ' + choosed);
        wordTag.innerHTML = choosed;
        form['answer'].value = '';
        location.reload();
    }
    else {
        lifes[attempts].classList.add('removed');
        attempts--;
        form['answer'].value = '';
    }

    if (attempts < 0) {
        alert('Game Over!');
        lifes.forEach(life => {
            life.classList.remove('removed');
        });
        form['answer'].value = '';
        location.reload();
    }

}