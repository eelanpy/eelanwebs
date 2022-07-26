const formSignin = document.querySelector('.container');

formSignin.innerHTML = '';

function addButton(game, link) {
	const btnGame = document.createElement('a');
	btnGame.classList.add('btn');
	btnGame.classList.add('btn-primary');
	btnGame.classList.add('text-center');
	btnGame.classList.add('btn-lg');
	btnGame.classList.add('mt-2');
	btnGame.href = link;
	btnGame.textContent = game;
	formSignin.appendChild(btnGame);
}

addButton('Movie Info', '../movie/index.html')
addButton('Multiplication Table', '../multiplication/multiplication.html')
addButton('Number Guessing', '../numberguess/index.html')
addButton('Weather', '../weatherweb/index.html')
addButton('Wordscape Cheatsheet', '../wordscape/wordscape.html')
addButton('Hangman Cheatsheet', '../hangman/hangman.html')
// addButton('Hangman Cheatsheet', 'hangman/hangman.html')
// addButton('Hangman Cheatsheet', 'hangman/hangman.html')
// addButton('Hangman Cheatsheet', 'hangman/hangman.html')

// addButton('Hangman Cheatsheet', 'hangman/hangman.html')

// addButton('Hangman Cheatsheet', 'hangman/hangman.html')

// addButton('Hangman Cheatsheet', 'hangman/hangman.html')

// addButton('Hangman Cheatsheet', 'hangman/hangman.html')

// addButton('Hangman Cheatsheet', 'hangman/hangman.html')
