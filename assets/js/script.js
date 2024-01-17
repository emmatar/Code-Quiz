var startBtn = document.querySelector("#startBtn");
var timerTxt = document.querySelector(".timer-text");
var timerCount = document.querySelector("#timer-count");
var mainEl = document.querySelector("main");
var firstPage = document.querySelector("#gameStart");
var question = document.querySelector("#question");
var answer = document.querySelector(".answer");
var questionText = document.getElementById("content");
var finalPage = document.getElementById("gameEnd");
var timer;
var seconds = 100;
var index = 0;
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var btnInitials = document.getElementById("btn-initials");
var scoreTally = 0;

var questions = [
  {
    question: "A variety of grouped properties, that have a name and value is called:",
    answers: [
      {
        answer: "Array",
        isAnswer: false,
      },
      {
        answer: "String",
        isAnswer: false,
      },
      {
        answer: "Object",
        isAnswer: true,
      },
      {
        answer: "None of the Above",
        isAnswer: false,
      },
    ],
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      {
        answer: "getElementbyId()",
        isAnswer: false,
      },
      {
        answer: "getElementsByClassName",
        isAnswer: false,
      },
      {
        answer: "Both A and B",
        isAnswer: true,
      },
      {
        answer: "None of the Above",
        isAnswer: false,
      },
    ],
  },
  {
    question:"Which of the following methods can be used to display data using Javascript?",
    answers: [
      {
        answer: "document.write()",
        isAnswer: false,
      },
      {
        answer: "console.log()",
        isAnswer: false,
      },
      {
        answer: "window.alert()",
        isAnswer: false,
      },
      {
        answer: "All of the Above",
        isAnswer: true,
      },
    ],
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      {
        answer: "var",
        isAnswer: false,
      },
      {
        answer: "const",
        isAnswer: true,
      },
      {
        answer: "let",
        isAnswer: false,
      },
      {
        answer: "constant",
        isAnswer: false,
      },
    ],
  },
  {
    question: "What is the proper tag to insert Javascript inside HTML?",
    answers: [
      {
        answer: "<js>",
        isAnswer: false,
      },
      {
        answer: "<scripting>",
        isAnswer: false,
      },
      {
        answer: "<javascript>",
        isAnswer: false,
      },
      {
        answer: "<script>",
        isAnswer: true,
      },
    ],
  },
];

function startQuiz() {
  // Hide start page
  $("#gameStart").addClass("hideMe");
  // start timer
  startTimer();
  // unhide question section
  $("#question").removeClass("hideMe");
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

function displayQuestion() {
  if (questions[index]) {
    // var currentQuestion = questions[index];
    // get the question
    // currentQuestion = questions[index];
    // display question text
    questionText.textContent = questions[index].question;
    // display answer options
    for (let questionAnswer of questions[index].answers) {
      var answerOptions = questionAnswer.answer;
      // create a button; (which is declared 'button' in js)
      var button = document.createElement("button");
      // put the text in the button
      button.setAttribute("data-correct", questionAnswer.isAnswer);
      button.textContent = answerOptions;
      // put button on page
      answer.append(button);
      // click event to initiate checkAnswer function
      // NEED TO FIGURE OUT HOW TO ROTATE THROUGH THE "answers[]" LIKE
      // LINE 143 & 145 WITH THE EACH QUESTION OBJECT IN THE ARRAY.
    }
  } else {
    gameEnd();
  }
}

function checkAnswer(event) {
  // currentQuestion.answers[i].isAnswer
  if (event.target.matches("button")) {
    var realAnswer = document.createElement("h2");
    if (event.target.dataset.correct === "true") {
      realAnswer.textContent = "Correct!";
      question.append(realAnswer);
      setTimeout(() => {
        realAnswer.textContent = " ";
      }, 500);
    } else {
      seconds -= 20;
      realAnswer.textContent = "Wrong:(";
      question.append(realAnswer);
      setTimeout(() => {
        realAnswer.textContent = " ";
      }, 500);
    }
    answer.textContent = " ";
    nextStep();
  }
}

function nextStep() {
  index++;
  displayQuestion();
}

function gameEnd() {
  clearInterval(timer);
  question.classList.add("hideMe");
  finalPage.classList.remove("hideMe");
  score.textContent = seconds;
  scoreTally = seconds;
}

function saveScore() {
  var savedName = initials.value;
  var userScore = {
    score: seconds,
    savedName: savedName,
  };
  var userScoreTally = JSON.parse(localStorage.getItem("scores")) || [];
  userScoreTally.push(userScore);
  localStorage.setItem("scores", JSON.stringify(userScoreTally));
  displayHighScores();
}
function displayHighScores() {
    const scorePage = document.getElementById("scorePage")
    const highScores = JSON.parse(localStorage.getItem("scores"))
    const scoresList = document.createElement("ul")
    highScores.forEach(function(score) {
        const scoreEl = document.createElement("li")
        scoreEl.innerHTML = `<span class="scoreInitials">Initials: ${score.savedName}</span> <span class="scoreTally">Score: ${score.score}</span>`
        scoresList.appendChild(scoreEl)
    });
    scorePage.appendChild(scoresList);
}

// Created the timer for the game next is to check out winGame and loseGame. Reference 04-APIs-28(Stu-Mini-Proj)
startBtn.addEventListener("click", startQuiz);
question.addEventListener("click", checkAnswer);
btnInitials.addEventListener("click", saveScore)
