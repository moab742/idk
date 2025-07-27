class TriviaGame {
  constructor() {
    this.questions = [
      {
        text: "How many facets does a Trilith crystal have?",
        options: ["3", "4", "5", "6"],
        correct: 0,
        difficulty: 7
      },
      {
        text: "If Skyreach Citadel is between Emberhold and Frostspire, which is furthest west?",
        options: ["Skyreach Citadel", "Emberhold", "Frostspire", "Deeproot"],
        correct: 1,
        difficulty: 7
      }
    ];
    
    this.currentQuestion = 0;
    this.score = 0;
    this.init();
  }

  init() {
    this.renderQuestion();
    this.setupEventListeners();
  }

  renderQuestion() {
    const q = this.questions[this.currentQuestion];
    
    document.getElementById('question').innerHTML = q.text
      .split('\n')
      .map(line => `<p>${line}</p>`)
      .join('');
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.textContent = option;
      button.dataset.index = index;
      optionsContainer.appendChild(button);
    });
    
    document.getElementById('score').textContent = `Score: ${this.score}`;
  }

  setupEventListeners() {
    document.getElementById('options').addEventListener('click', (e) => {
      if (e.target.classList.contains('option-btn')) {
        this.checkAnswer(parseInt(e.target.dataset.index));
      }
    });
  }

  checkAnswer(selectedIndex) {
    const q = this.questions[this.currentQuestion];
    
    if (selectedIndex === q.correct) {
      this.score++;
      document.getElementById('score').textContent = `Score: ${this.score}`;
    }
    
    this.currentQuestion++;
    
    if (this.currentQuestion < this.questions.length) {
      this.renderQuestion();
    } else {
      this.showGameOver();
    }
  }

  showGameOver() {
    document.getElementById('question').innerHTML = `
      <h2>Game Completed!</h2>
      <p>Your final score: ${this.score}/${this.questions.length}</p>
      <button onclick="window.location.reload()" class="option-btn">Play Again</button>
    `;
    document.getElementById('options').innerHTML = '';
  }
}

// Initialize game
new TriviaGame();
