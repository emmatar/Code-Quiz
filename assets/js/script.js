var startBtn = document.querySelector("#startBtn");
var timerTxt = document.querySelector(".timer-text");
var timerCount = document.querySelector("#timer-count");
var mainEl = document.querySelector("main");
var firstPage = document.querySelector("#gameStart");
var question = document.querySelector("#question")
var answer = document.querySelector(".answer")
var questionText = document.getElementById("content");
var timer;
var seconds = 100;
var index = 0;
var questions = [
    {
        question: "Javascript is an _______ language?",
        answers: [
        {
            answer: "Object-Based",
            isAnswer: true
        },
        {
            answer: "Object-Oriented",
            isAnswer: false
        },
        {
            answer: "Procedural",
            isAnswer: false
        },
        {
            answer: "None of the Above",
            isAnswer: false
        }
        ]
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: [
        {
            answer: "getElementbyId()",
            isAnswer: false
        },
        {
            answer: "getElementsByClassName",
            isAnswer: false
        },
        {
            answer: "Both A and B",
            isAnswer: true
        },
        {
            answer: "None of the Above",
            isAnswer: false
        }
        ]
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: [
        {
            answer: "document.write()",
            isAnswer: false
        },
        {
            answer: "console.log()",
            isAnswer: false
        },
        {
            answer: "window.alert()",
            isAnswer: false
        },
        {
            answer: "All of the Above",
            isAnswer: true
        }
        ]
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers: [
        {
            answer: "var",
            isAnswer: false
        },
        {
            answer: "const",
            isAnswer: true
        },
        {
            answer: "let",
            isAnswer: false
        },
        {
            answer: "constant",
            isAnswer: false
        }        
        ]
    },
    {
        question: "How do we put Javascript inside HTML?",
        answers: [
        {
            answer: "<js>",
            isAnswer: false
        },
        {
            answer: "<scripting>",
            isAnswer: false
        },
        {
            answer: "<javascript>",
            isAnswer: false
        },
        {
            answer: "<script>",
            isAnswer: true
        }    
        ]
    }
]

function startQuiz() {
    // Hide start page
    $("#gameStart").removeClass("active");
    // start timer
    startTimer();
    // unhide question section
    $("#question").addClass("active");
    // display question
    displayQuestion();
}
function startTimer() {
    timer = setInterval(function () {
        // timeEl.textContent = timerCount;
        seconds--;
        timerCount.textContent = seconds;
        if (seconds === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function displayQuestion () {
    // get the question
    var currentQuestion = questions[index];
    // display question text
    questionText.textContent = currentQuestion.question;
    // display answer options
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        var answerOptions = currentQuestion.answers[i].answer;
        // create a button; (which is declared 'button' in js)
        var button = document.createElement("button");
        // put the text in the button
        button.textContent = answerOptions;
        // put button on page
        answer.append(button);
        // click event to initiate checkAnswer function
        button.addEventListener("click", checkAnswer.bind(currentQuestion.answers[i].isAnswer));
        // NEED TO FIGURE OUT HOW TO ROTATE THROUGH THE "answers[]" LIKE
        // LINE 143 & 145 WITH THE EACH QUESTION OBJECT IN THE ARRAY. 
    } 
}

function checkAnswer(event) {
    // currentQuestion.answers[i].isAnswer
    var realAnswer = document.createElement("h2");
    if (this.valueOf()) {
            realAnswer.textContent = "Correct!"
            question.append(realAnswer);
            setTimeout(() => {
                realAnswer.textContent = " "
            }, 1000);
    } else {
        seconds -= 10;
        realAnswer.textContent = "Wrong:("
        question.append(realAnswer);
        setTimeout(() => {
            realAnswer.textContent = " "
        }, 1000);
    }
    answer.textContent = " "
    checkEnd();
}

function checkEnd () {
    if (index <= 4) {
        index++;
        displayQuestion();
    } else if (index > 4) {
        gameEnd();
    } 
}

function gameEnd () {
    console.log("gameend");
    question.textContent = " "

}

// Created the timer for the game next is to check out winGame and loseGame. Reference 04-APIs-28(Stu-Mini-Proj)
startBtn.addEventListener("click", startQuiz);
