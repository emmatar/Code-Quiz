var startBtn = document.querySelector("#startBtn")
var timeEl = document.querySelector(".time");
var timer;
var timerCount;
var isWin = false;

var questions = [
    {
        question: "Javascript is an _______ language?",
        A: "Object-Based",
        B: "Object-Oriented",
        C: "Procedural",
        D: "None of the Above",
        Answer: "A"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        A: "getElementbyId()",
        B: "getElementsByClassName",
        C: "Both A and B",
        D: "None of the Above",
        Answer: "C"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        A: "document.write()",
        B: "console.log()",
        C: "window.aler()",
        D: "All of the Above",
        Answer: "D"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        A: "var",
        B: "const",
        C: "let",
        D: "constant",
        Answer: "B"
    },
    {
        question: "How do we put Javascript inside HTML?",
        A: "<js>",
        B: "<scripting>",
        C: "<javascript>",
        D: "<script>",
        Answer: "D"
    }
]

function startTimer() {
    timer = setInterval(function () {
        timeEl.textContent = parseInt(timerCount);
        timerCount--;
        if (timerCount >=  0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
        
    }, 1000);
}
// Created the timer for the game next is to check out winGame and loseGame. Reference 04-APIs-28(Stu-Mini-Proj)
// TIMER WONT START. I really believe you. You got this.
startBtn.addEventListener("click", startTimer);

