let startButton = document.getElementById('start-btn')
let questionContainerEl = document.getElementById('question-container')
let questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementsByClassName('btn')
let scoreEl = document.getElementById('score')
let endQuizEl = document.getElementById('end-quiz')
let highScoreEl = document.getElementById('highscores')
let endQuizBtn = document.getElementById('hs-btn')
let score = 0;
let counter = 0;


const questions =
    [
        {
            question: 'Javascript is the easiest language to learn',
            0: 'Definitley Not!',
            1: 'For Sure',
            2: 'Is This Even English?',
            3: 'I Could Do This In My Sleep',
            answer: 'Is This Even English?'
        },
        {
            question: 'Question two!',
            0: 'answer 11**',
            1: 'answer 12 test ',
            2: 'answer 2',
            3: 'answer 14',
            answer: "answer 2"
        },

        {
            question: 'Question two!',
            0: 'answer 11**',
            1: 'answer 12 test ',
            2: 'answer 2',
            3: 'answer 14',
            answer: "answer 2"
        },

        {
            question: 'Question two!',
            0: 'answer 11**',
            1: 'answer 12 test ',
            2: 'answer 2',
            3: 'answer 14',
            answer: "answer 2"
        },

        {
            question: 'Question two!',
            0: 'answer 11**',
            1: 'answer 12 test ',
            2: 'answer 2',
            3: 'answer 14',
            answer: "answer 2"
        },
        {
            question: 'Question two!',
            0: 'answer 11**',
            1: 'answer 12 test ',
            2: 'answer 2',
            3: 'answer 14',
            answer: "answer 2"
        },
        {
            question: 'Question two!',
            0: 'answer 11**',
            1: 'answer 12 test ',
            2: 'answer 2',
            3: 'answer 14',
            answer: "answer 2"
        },
        {
            question: 'Question two!',
            0: 'answer 11**',
            1: 'answer 12 test ',
            2: 'answer 2',
            3: 'answer 14',
            answer: "answer 2"
        }];


var timeLeft = 10;

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

function startGame() {
    countdown();
    console.log('started')
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    nextQuestion();
}

function endQuiz() {
    console.log('done');
    // stop timer 
    questionContainerEl.classList.add('hide');
    endQuizEl.classList.remove('hide');
    endQuizBtn.classList.remove('hide');
    // highscores page
}


function nextQuestion() {
    questionEl.textContent = questions[counter].question
    for (let i = 0; i < answerButtonsEl.length; i++) {
        answerButtonsEl[i].textContent = questions[counter][i];

        answerButtonsEl[i].addEventListener('click', function (e) {
            checkAnswer(e.target.textContent);
        })
    }
    if (question === questions.length) {
        endQuiz();
    }
}

function checkAnswer(userAnswer) {
    if (questions[counter].answer === userAnswer) {
        score += 5;
        scoreEl.textContent = score;
        console.log('correct')
    } else {
        timeLeft -= 5;
        console.log('incorrect')
    }

    counter++;
    console.log(counter);
    nextQuestion();
}


// answerButtonsEl[0].addEventListener('click', function(e) {
//     console.log(e.target.textContent);
// })
startButton.addEventListener('click', startGame)

console.log(questions);
