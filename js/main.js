const input = document.getElementById('input');
//Outputs
let wordOutput = document.getElementById('word');
let scoreOutput = document.getElementById('score');
let mistkesOutput = document.getElementById('mistakes');
let correctAnswer = document.getElementsByClassName('correct-word');

//Modals
let correct = document.getElementById('correct-modal');
let sorry = document.getElementById('sorry-modal');

let score = 0;
let tries = 3;

//Listen
document.addEventListener('DOMContentLoaded', init);
document.getElementById('form').addEventListener('submit', checkIfMatch);

//Arroww functions
document.getElementById('no').addEventListener('click', () => close());
document.getElementById('ex').addEventListener('click', () => close());
document.getElementById('next').addEventListener('click', () => {
	correct.style.display = 'none';
	showWord(jumbleTheWords(words));
	input.value = '';
});

document.getElementById('yes').addEventListener('click', () => location.reload());
//Initializes Everything.
function init() {
	scoreOutput.innerHTML = 0;
	mistkesOutput.innerHTML = 3;
	showWord(jumbleTheWords(words));
}
const words = [
	'remember',
	'jagged',
	'racecar',
	'maze',
	'gaze',
	'cheese',
	'waffle',
	'pipeline',
	'ripe',
	'swipe',
	'razor',
	'knight',
	'jump',
	'dirty',
	'heater',
	'fastfood',
	'seatmate',
	'leap',
	'eggplant',
	'knob',
	'jaguar',
	'submarine',
	'mermaid',
	'beautiful',
	'diamond',
	'minute'
];

// shuffle array method
function shuffleMethod(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i + 3);

		[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
	}
	return arr;
}

function jumbleTheWords(arr) {
	return arr.map((word) => shuffleMethod(word.split('')).join(''));
}
function showWord(arr) {
	const randIndex = Math.floor(Math.random() * arr.length);
	wordOutput.innerHTML = arr[randIndex];
	input.classList.remove('shake');
}
function matchWords(arr, word) {
	for (let w of arr) {
		if (w === word) {
			return true;
		}
	}
	return false;
}
function checkIfMatch(e) {
	e.preventDefault();
	if (matchWords(words, input.value)) {
		score++;
		scoreOutput.innerHTML = score;
		correct.style.display = 'block';
	} else {
		tries--;
		mistkesOutput.innerHTML = tries;
		input.classList.add('shake');
		setTimeout(() => {
			input.classList.remove('shake');
		}, 1000);
	}
	if (tries < 1) {
		mistkesOutput.innerHTML = 0;
		sorry.style.display = 'block';
	}
}
