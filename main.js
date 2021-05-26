// GLOBAL VARIABLES ================================

let startButton = document.getElementById('start-btn')
let questionContainerEl = document.getElementById('question-container')
let questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementsByClassName('btn')
let scoreEl = document.getElementById('score')
let endQuizEl = document.getElementById('end-quiz')
let highScoreEl = document.getElementById('highscores')
let endQuizBtn = document.getElementById('hs-btn')
let sumbitScoreEl = document.getElementById('submit-score');
let savedScoresEl = document.getElementById('score-board')
let score = 0;
let counter = 0;

// QUESTION ARRAY ===============

const questions =
    [
        {
            question: 'Javascript is the ______ of a webpage',
            0: 'Structure',
            1: 'Style',
            2: 'Behavior',
            3: 'Retreival',
            answer: 'Behavior'
        },
        {
            question: 'Javascript files will always end with what type of file name?',
            0: '.js',
            1: '.html',
            2: '.css',
            3: '.MD',
            answer: ".js"
        },

        {
            question: 'Inside of which HTML element do you put your script tag?',
            0: '<javascript>',
            1: '<js>',
            2: '<script>',
            3: '<scripting>',
            answer: '<script>'
        },

        {
            question: 'How would you change the content of the p tag?  <p id="demo">This is a demo</p>',
            0: '#demo.innerHTML = "Hello World";',
            1: 'document.getElementByName("p").innerHTML = "Hello World!";',
            2: 'document.getElement("p").innerHTML = "Hello World!";',
            3: 'document.getElementById("demo").innerHTML = "Hello World!";',
            answer: 'document.getElementById("demo").innerHTML = "Hello World!";'
        },

        {
            question: 'Which syntax would show "Hello World!" in an alert box',
            0: 'msg("Hello World");',
            1: 'alerBox("Hello World!");',
            2: 'alert("Hello World!");',
            3: 'msgBox("Hello World");',
            answer: 'alert("Hello World!");'
        },
        {
            question: 'What is the correct syntax to create a function?',
            0: 'function myFunction()',
            1: 'function:myFunction()',
            2: 'function = myFunction()',
            3: 'var function = myFunction[]',
            answer: 'function = myFunction()'
        },
        {
            question: 'How would you call a function named "startQuiz"',
            0: 'call startQuiz()',
            1: 'startQuiz()',
            2: 'call function startQuiz()',
            3: 'startQuiz{}',
            answer: 'startQuiz()'
        },
        {
            question: 'How do you correctly write an IF statement?',
            0: 'if i=0 then',
            1: 'if (i===0)',
            2: 'if i=0',
            3: 'if i === 0 then',
            answer: 'if (i===0)'
        }];


//  TIMER INFO ==================
var timeLeft = 60;

var timerId = setInterval(countdown, 1000);
let timeEl = document.getElementById('time')

function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timerId);
        endQuiz();
    } else {
        timeEl.textContent = timeLeft;
        timeLeft--;
    }
}

// START GAME FUNCTION
function startGame() {
    countdown();
    console.log('started')
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    nextQuestion();
}

// END QUIZ FUNCTION
function endQuiz() {
    console.log('done');
    questionContainerEl.classList.add('hide');
    endQuizEl.classList.remove('hide');
    endQuizBtn.classList.remove('hide');
    clearInterval(timerId);
}

//  CREATE NEXT QUESTION
function nextQuestion() {
    questionEl.textContent = questions[counter].question
    for (let i = 0; i < questions.length; i++) {
        answerButtonsEl[i].textContent = questions[counter][i];
    }
}

function nextBtnClick(e) {
    e.preventDefault();
    if (e.target.localName==='button') {
        checkAnswer(e.target.textContent);
    }
    console.log(e);
}

// CHECK FOR RIGHT OR WRONG ANSWERS
function checkAnswer(userAnswer) {
    console.log('correct answer' + questions[counter].answer);
    console.log('userAnswer' + userAnswer);
    if (questions[counter].answer === userAnswer) {
        score += 5;
        scoreEl.textContent = score;
        console.log('correct')
    } else {
        timeLeft -= 5;
        console.log('incorrect')
    }

    counter++;

    if (counter === questions.length) {
        endQuiz();
    } else {
        nextQuestion();
    }
}

// ENTER INITIALS FOR HIGHSCORE
function sumbitScore() {
    let userScore = sumbitScoreEl.value.trim();
    if (userScore === "") {
        alert('Please type initials!')
    } else {
        let storedScores = JSON.parse(localStorage.getItem("highscores")) || [];
        let userInfo =
        {
            initials: userScore,
            score: score
        };

        storedScores.push(userInfo);
        localStorage.setItem("highscores", JSON.stringify(storedScores));

    }
}

// HIGH SCORE BOARD 
function highScoreBoard() {
    sumbitScore();

    endQuizEl.classList.add('hide');
    endQuizBtn.classList.add('hide');
    highScoreEl.classList.remove('hide')

    //   CREATE A NEW LI TO APPEND TO UL OF STORED SCORES
    let storedScores = JSON.parse(localStorage.getItem("highscores")) || [];

    storedScores.forEach(function (score) {
        var scoreBoard = document.createElement('li');
        scoreBoard.textContent = score.initials + ' : ' + score.score;
        savedScoresEl.appendChild(scoreBoard);
    })

}

// answerButtonsEl[0].addEventListener('click', function(e) {
//     console.log(e.target.textContent);
// })
questionContainerEl.addEventListener('click', nextBtnClick)
startButton.addEventListener('click', startGame)
endQuizBtn.addEventListener('click', highScoreBoard)