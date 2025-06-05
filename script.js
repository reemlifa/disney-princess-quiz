let dogScore = 0;
let catScore = 0;
let questionCount = 0;
let result = document.getElementById("result");
let displayResult = document.getElementById("displayResult");
let restart = document.getElementById("restart");
displayResult.addEventListener("click", updateResult);
restart.addEventListener("click", restartQuiz)



let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click",dog);

q1a2.addEventListener("click",cat);

q2a1.addEventListener("click",dog);

q2a2.addEventListener('click',cat);

q3a1.addEventListener("click",dog);

q3a2.addEventListener("click",cat)

function cat() {
  catScore += 1;
  questionCount+= 1

  console.log("questionCount " + questionCount + " CatScore " + catScore);
}

function dog() {
  dogScore += 1; 
  questionCount+= 1

  console.log("questionCount " + questionCount + " DogScore " + dogScore);
}



function updateResult() {
  if (dogScore >= 2) {
  result.innerHTML = "User is a dog person!"
  } else if (catScore >= 2) {
  result.innerHTML = "User is a cat person!"
  }
}

function restartQuiz() {
  dogScore = 0;
  catScore = 0;
  
  questionCount = 0;
  result.innerHTML = "Your result is...";
}