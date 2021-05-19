const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)



function startGame() {
    console.log('started')
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide')
    nextQuestion();
}

function nextQuestion() {

}

function showQuestion() {
    questionEl.innerText = questions.question
}

function pickAnswer() {

}

const questions = 
    [
        {question: 'Question One!',
        answers: [
                {a: 'answer 1', correct: true},
                {b: 'answer 2'},
                {c: 'answer 3'},
                {d: 'answer 4'}
            ]},

        {question: 'Question Two!',
        answers: [
                {a: 'answer 1'},
                {b: 'answer 2'},
                {c: 'answer 3'},
                {d: 'answer 4', correct: true}
            ]},

        {question: 'Question Three!',
        answers: [            
                {a: 'answer 1'},
                {b: 'answer 2', correct: true},
                {c: 'answer 3'},
                {d: 'answer 4'}
            ]}, 

        {question: 'Question Four!',
        answers: [            
                {a: 'answer 1'},
                {b: 'answer 2'},
                {c: 'answer 3'},
                {d: 'answer 4', correct: true}
            ]}, 

        {question: 'Question Five!',
        answers: [            
                {a: 'answer 1'},
                {b: 'answer 2'},
                {c: 'answer 3', correct: true},
                {d: 'answer 4'}
            ]}, 

        {question: 'Question Six!',
        answers: [            
                {a: 'answer 1', correct: true},
                {b: 'answer 2'},
                {c: 'answer 3'},
                {d: 'answer 4'}
            ]}, 
    ]

    console.log(questions);