window.onload = function() {
  this.hideQuestions();
  $("#timer").hide();
  $("#start").on("click", start);
};

var timeLeft = 30;
var intervalId;
var clockRunning = false;

function hideQuestions() {
  $("#question1").hide();
  $("#question2").hide();
  $("#question3").hide();
  $("#question4").hide();
  $("#question5").hide();
  $("#question6").hide();
  $("#question7").hide();
  $("#question8").hide();
}

function stop() {
  clearInterval(intervalId);
  clockRunning = false;
}

function countdown() {
  timeLeft--;
  $("#timer").text("Time left: " + timeLeft);
  if (timeLeft === 0) {
    stop();
    $("#timer").text("Times up!");
  }
}

function start() {
  if (!clockRunning) {
    clockRunning = true;
    $("#timer").show();
    intervalId = setInterval(countdown, 1000);
  }
}
