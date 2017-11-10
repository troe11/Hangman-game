
var randomWords = ['outtatime', 'tannen', 'sunnydale', 'enchantment'];

//
var guessed = [];
var blanks = [];

var answerKeySpan = document.getElementById('answerKey');
var newImage = document.getElementById('hangedpic')

var guessesLeft = document.getElementById('guesses-left');
var guessLeftFrom10 = 10;
var lettersGuessed = document.getElementById('letters-guessed');

var randomIndex = Math.floor(Math.random() * randomWords.length);
var randomWord = randomWords[randomIndex];
for (var i = 0; i < randomWord.length; i++) {
    if (randomWord[i] != ' ') {
        blanks.push("_");
    } else {
        blanks.push(" ")
    }

};

var finalBlanks = blanks.join(' ');
answerKeySpan.textContent = finalBlanks;
var playMusic = document.getElementById('music');
playMusic = new Audio('assets/music/bttf.mp3').play();

document.onkeyup = function guessLetter() {

    
    var action = event.key;
    if (guessed.indexOf(action) != -1) {
        alert('You alread guessed: ' + action);
        playMusic = new Audio('assets/music/butthead.mp3').play();
    } else {

        if (randomWord.indexOf(action) != -1) {
            guessed.push(action);
            lettersGuessed.textContent += action + '    ';
            for (var i = 0; i < randomWord.length; i++) {
                if (action == randomWord[i]) {
                    blanks[i] = action;

                }
                finalBlanks = blanks.join(' ');
            }
           answerKeySpan.textContent = finalBlanks;
            alert('Great Scott! More like Great Guess!');

        } else {
            alert('try again');
            guessed.push(action);
            lettersGuessed.textContent += action + '    ';
            guessesLeft.textContent = --guessLeftFrom10;

            if (guessesLeft.textContent == 5) {
                playMusic = new Audio('assets/music/startup.mp3').play();
            }

            if (guessesLeft.textContent == 0) {
                newImage.src = "assets/images/hangingend.jpeg";
                alert('Game Over. The word was: ' + randomWord);
                playMusic = new Audio('assets/music/lost.mp3').play();
                location.reload();
                //Reload game
            }
        }
    }

    if (blanks.join('') == randomWord) {
        alert('You saved Marty! Congrats!');
        location.reload();
    }



}