let questionCount = 0;

let scores = {
  ariel: 0,
  mulan: 0,
  belle: 0,
  tiana: 0,
};

let selectedAnswers = {};
const result = document.getElementById("result");
const resultDescription = document.getElementById("resultDescription");
const displayResult = document.getElementById("displayResult");
const restart = document.getElementById("restart");
const quizButtons = document.querySelectorAll(".question button");
const share = document.getElementById("shareResult");
share.style.display = "none";

displayResult.addEventListener("click", showResult);
restart.addEventListener("click", restartQuiz);
share.addEventListener("click", shareResult);

quizButtons.forEach((button) => {
  button.addEventListener("click", processAnswer);
});

function processAnswer(event) {
  const button = event.target.closest("button");
  const character = button.dataset.character;
  const classList = Array.from(button.classList);
  const questionGroup = classList.find((cls) => /^q\d+$/.test(cls));
  if (!questionGroup) return;

  if (selectedAnswers[questionGroup]) {
    const prevCharacter = selectedAnswers[questionGroup];
    if (prevCharacter === character) return;
    if (scores.hasOwnProperty(prevCharacter)) {
      scores[prevCharacter]--;
    }
  } else {
    questionCount++;
  }

  scores[character]++;
  selectedAnswers[questionGroup] = character;

  const questionChoices = document.querySelectorAll(
    `.answer-choice.${questionGroup}`
  );
  questionChoices.forEach((btn) => {
    btn.classList.remove("selected", "blurred");
  });

  button.classList.add("selected");
  questionChoices.forEach((btn) => {
    if (btn !== button) {
      btn.classList.add("blurred");
    }
  });

  console.log(
    "Question " + questionGroup + " answered. Current Scores:",
    scores
  );
}

function showResult() {
  let maxScore = -1;
  let resultCharacter = "";

  if (questionCount < 5) {
    result.innerHTML = "You haven't answered all the questions!";
    result.style.display = "block";
    resultDescription.style.display = "none";
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
  result.style.display = "block";
  resultDescription.style.display = "block";

  share.dataset.winner = capitalizedWinner;
  share.style.display = "inline-block";
}

function restartQuiz() {
  for (const character in scores) {
    scores[character] = 0;
  }
  questionCount = 0;
  selectedAnswers = {};

  quizButtons.forEach((button) => {
    button.classList.remove("selected", "blurred");
  });
  result.innerHTML = "Your result is...";
  result.style.display = "none";
  resultDescription.style.display = "none";
  console.log("Quiz restarted. Scores reset.");
}

async function shareResult() {
  const winner = share.dataset.winner || "";
  try {
    await navigator.share({
      title: "Disney Princess Quiz",
      url: "https://example.com",
      text: `I took this Disney Princess Quiz and I'm most like ${winner}!`,
    });
    console.log("Shared successfully");
  } catch (err) {
    console.error("Share failed:", err);
  }
}
