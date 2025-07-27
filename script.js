let questionCount = 0;

let scores = {
  ariel: 0,
  mulan: 0,
  belle: 0,
  tiana: 0,
};
const result = document.getElementById("result");
const displayResult = document.getElementById("displayResult");
const restart = document.getElementById("restart");
const quizButtons = document.querySelectorAll(".question button");

displayResult.addEventListener("click", showResult);
restart.addEventListener("click", restartQuiz);

quizButtons.forEach((button) => {
  button.addEventListener("click", processAnswer);
});

function processAnswer(event) {
  //gets character from data
  const character = event.target.dataset.character;
  //gets the question number from the class name
  const questionGroup = event.target.className;
  // if the score clicked has its own property (character) the character score and question count goes up
  if (scores.hasOwnProperty(character)) {
    scores[character]++;
    questionCount++;
  }

  document.querySelectorAll("." + questionGroup).forEach((button) => {
    button.disabled = true;
  });

  console.log(
    "Question " + questionCount + " answered. Current Scores:",
    scores
  );
}

function showResult() {
  let maxScore = -1;
  let resultCharacter = "";

  if (questionCount < 5) {
    result.innerHTML = "You haven't answered all the questions!";
    return;
  }

  for (const character in scores) {
    if (scores[character] > maxScore) {
      maxScore = scores[character];
      resultCharacter = character;
    }
  }
  const capitalizedWinner =
    resultCharacter.charAt(0).toUpperCase() + resultCharacter.slice(1);
  result.innerHTML = `You are a ${capitalizedWinner} person!`;
}

function restartQuiz() {
  for (const character in scores) {
    scores[character] = 0;
  }
  questionCount = 0;

  quizButtons.forEach((button) => {
    button.disabled = false;
  });
  result.innerHTML = "Your result is...";
  console.log("Quiz restarted. Scores reset.");
}
