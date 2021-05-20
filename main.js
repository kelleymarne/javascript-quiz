const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementsByClassName('btn')
let scoreEl = document.getElementById('score')
let timeEl = document.getElementById('time')
let score = 0;
let counter = 0;
let timerCounter = 60;


const questions =
    [
        {
            question: 'Question One!',
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
            question: 'Question Three!',
            answers: [
                { a: 'answer 1' },
                { b: 'answer 2', correct: true },
                { c: 'answer 3' },
                { d: 'answer 4' }
            ]
        },

        {
            question: 'Question Four!',
            answers: [
                { a: 'answer 1' },
                { b: 'answer 2' },
                { c: 'answer 3' },
                { d: 'answer 4', correct: true }
            ]
        },

        {
            question: 'Question Five!',
            answers: [
                { a: 'answer 1' },
                { b: 'answer 2' },
                { c: 'answer 3', correct: true },
                { d: 'answer 4' }
            ]
        },

        {
            question: 'Question Six!',
            answers: [
                { a: 'answer 1', correct: true },
                { b: 'answer 2' },
                { c: 'answer 3' },
                { d: 'answer 4' }
            ]
        },
    ]
function timer() {
let countDown = setInterval(() => {
    
    timerCounter--;
    timeEl.textContent = timerCounter;
}, 1000);
}


function startGame() {
    timer();
    console.log('started')
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide')
    nextQuestion();
}

function nextQuestion() {
    questionEl.textContent = questions[counter].question
    for (let i = 0; i < answerButtonsEl.length; i++) {
        answerButtonsEl[i].textContent = questions[counter][i];
        console.log(answerButtonsEl)

        answerButtonsEl[i].addEventListener('click', function (e) {
            checkAnswer(e.target.textContent);
        })
    }
}

function checkAnswer(userAnswer) {
    if(questions[counter].answer === userAnswer) {
        score+=5;
        scoreEl.textContent = score;
        console.log('correct')
    } else {
        timerCounter-=5;
        console.log('incorrect')
    }

    counter++;
    nextQuestion();
}



// answerButtonsEl[0].addEventListener('click', function(e) {
//     console.log(e.target.textContent);
// })
startButton.addEventListener('click', startGame)

console.log(questions);