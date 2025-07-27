let score = 0;
const questions = [
  {
    text: "What is the capital of Veylund?",
    options: ["Starbright City", "Emberhold", "Frostspire", "Deeproot"],
    correct: 0
  },
  // Add more questions like this...
];

let currentQuestion = 0;

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].correct) {
    score++;
    document.getElementById("score").innerText = "Score: " + score;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert("Game Over! Score: " + score);
  }
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.text;
  const buttons = document.querySelectorAll("#options button");
  q.options.forEach((opt, i) => {
    buttons[i].innerText = opt;
  });
}

loadQuestion();