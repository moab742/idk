const questions = [
    {
        text: "What's the capital of Luminaria?",
        options: ["Emberhold", "Starbright City", "Frostspire", "Deeproot"],
        correct: 1,
        difficulty: 7
    },
    {
        text: "How many facets does a Trilith crystal have?",
        options: ["3", "4", "5", "6"],
        correct: 0,
        difficulty: 7
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.text;
    
    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";
    
    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correct) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) loadQuestion();
    else alert(`Game Over! Final Score: ${score}`);
}

loadQuestion();
