var startBtn = $('#startBtn');
var time = document.querySelector('.time');
var timer;
var timeCount;
var isWin = false;

function firstQuestion () {
    timerCount = 60;
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        time.textcontent = timeCount;
        if (timeCount >=  0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timeCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000)
}
// Created the timer for the game next is to check out winGame and loseGame. Reference 04-APIs-28(Stu-Mini-Proj)

startBtn.on('click', firstQuestion);

