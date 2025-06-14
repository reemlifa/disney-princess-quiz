let arielScore = 0;
let mulanScore = 0;
let belleScore = 0;
let tianaScore = 0;
let questionCount = 0;
let result = document.getElementById("result");
let displayResult = document.getElementById("displayResult");
let restart = document.getElementById("restart");
displayResult.addEventListener("click", updateResult);
restart.addEventListener("click", restartQuiz);

let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
let q1a3 = document.getElementById("q1a3");
let q1a4 = document.getElementById("q1a4");

let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
let q2a3 = document.getElementById("q2a3");
let q2a4 = document.getElementById("q2a4");

let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");
let q3a3 = document.getElementById("q3a3");
let q3a4 = document.getElementById("q3a4");

let q4a1 = document.getElementById("q4a1");
let q4a2 = document.getElementById("q4a2");
let q4a3 = document.getElementById("q4a3");
let q4a4 = document.getElementById("q4a4");

let q5a1 = document.getElementById("q5a1");
let q5a2 = document.getElementById("q5a2");
let q5a3 = document.getElementById("q5a3");
let q5a4 = document.getElementById("q5a4");

q1a1.addEventListener("click", ariel);
q1a2.addEventListener("click", mulan);
q1a3.addEventListener("click", belle);
q1a4.addEventListener("click", tiana);

q2a1.addEventListener("click", ariel);
q2a2.addEventListener("click", belle);
q2a3.addEventListener("click", mulan);
q2a4.addEventListener("click", tiana);

q3a1.addEventListener("click", ariel);
q3a2.addEventListener("click", belle);
q3a3.addEventListener("click", mulan);
q3a4.addEventListener("click", tiana);

q4a1.addEventListener("click", ariel);
q4a2.addEventListener("click", belle);
q4a3.addEventListener("click", mulan);
q4a4.addEventListener("click", tiana);

q5a1.addEventListener("click", ariel);
q5a2.addEventListener("click", belle);
q5a3.addEventListener("click", mulan);
q5a4.addEventListener("click", tiana);

function ariel() {
  arielScore += 1;
  questionCount += 1;

  console.log("questionCount " + questionCount + " arielScore " + arielScore);
}

function mulan() {
  mulanScore += 1;
  questionCount += 1;

  console.log("questionCount " + questionCount + " mulanScore " + mulanScore);
}

function tiana() {
  tianaScore += 1;
  questionCount += 1;

  console.log("questionCount " + questionCount + " tianaScore " + tianaScore);
}

function belle() {
  belleScore += 1;
  questionCount += 1;

  console.log("questionCount " + questionCount + " belleScore " + belleScore);
}

function updateResult() {
  if (belleScore >= 3) {
    result.innerHTML = "User is a Belle person!";
  } else if (tianaScore >= 3) {
    result.innerHTML = "User is a Tiana person!";
  } else if (mulanScore >= 3) {
    result.innerHTML = "User is a Mulan person!";
  } else if (arielScore >= 3) {
    result.innerHTML = "User is a Ariel person!";
  }
}

function restartQuiz() {
  mulanScore = 0;
  arielScore = 0;
  tianaScore = 0;
  belleScore = 0;

  questionCount = 0;
  result.innerHTML = "Your result is...";
}
