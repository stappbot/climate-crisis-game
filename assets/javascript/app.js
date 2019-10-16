window.onload = function() {
  this.hideQuestions();
  $("#timer").hide();
  $("#start").on("click", start);
};

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

function start() {
  $("#timer").show();
}
