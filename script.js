// Question Bank
const questions = {
    english: [
        {
            id: 1,
            question: "What is the opposite of 'hot'?",
            options: ["Cold", "Warm", "Cool", "Freezing"],
            correct: 0,
            difficulty: "easy",
            explanation: "Cold is the direct opposite of hot. When something is hot, it has a high temperature, and when it's cold, it has a low temperature."
        },
        {
            id: 2,
            question: "Which word rhymes with 'cat'?",
            options: ["Dog", "Hat", "Bird", "Fish"],
            correct: 1,
            difficulty: "easy",
            explanation: "Hat rhymes with cat because they both end with the same sound '-at'."
        },
        {
            id: 3,
            question: "What is the plural of 'child'?",
            options: ["Childs", "Children", "Childes", "Child"],
            correct: 1,
            difficulty: "medium",
            explanation: "Children is the correct plural form of child. It's an irregular plural that doesn't follow the standard rule of adding 's'."
        },
        {
            id: 4,
            question: "Which sentence is correct?",
            options: ["I are happy", "I am happy", "I is happy", "I be happy"],
            correct: 1,
            difficulty: "medium",
            explanation: "I am happy is correct because 'I' always uses the verb 'am' in present tense."
        },
        {
            id: 5,
            question: "What is a synonym for 'enormous'?",
            options: ["Tiny", "Small", "Huge", "Normal"],
            correct: 2,
            difficulty: "hard",
            explanation: "Huge is a synonym for enormous. Both words mean very large in size."
        }
    ],
    maths: [
        {
            id: 6,
            question: "What is 5 + 3?",
            options: ["6", "7", "8", "9"],
            correct: 2,
            difficulty: "easy",
            explanation: "5 + 3 = 8. When you add 5 and 3 together, you get 8."
        },
        {
            id: 7,
            question: "What is 10 - 4?",
            options: ["5", "6", "7", "8"],
            correct: 1,
            difficulty: "easy",
            explanation: "10 - 4 = 6. When you subtract 4 from 10, you get 6."
        },
        {
            id: 8,
            question: "What is 7 × 6?",
            options: ["40", "41", "42", "43"],
            correct: 2,
            difficulty: "medium",
            explanation: "7 × 6 = 42. This is part of the 7 times table."
        },
        {
            id: 9,
            question: "What is 48 ÷ 8?",
            options: ["5", "6", "7", "8"],
            correct: 1,
            difficulty: "medium",
            explanation: "48 ÷ 8 = 6. When you divide 48 by 8, you get 6."
        },
        {
            id: 10,
            question: "What is 15% of 60?",
            options: ["8", "9", "10", "11"],
            correct: 1,
            difficulty: "hard",
            explanation: "15% of 60 = 0.15 × 60 = 9. To find a percentage, multiply the number by the decimal form of the percentage."
        }
    ],
    science: [
        {
            id: 11,
            question: "How many days are in a week?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            difficulty: "easy",
            explanation: "There are 7 days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday."
        },
        {
            id: 12,
            question: "What color do you get when you mix red and yellow?",
            options: ["Purple", "Orange", "Green", "Blue"],
            correct: 1,
            difficulty: "easy",
            explanation: "When you mix red and yellow, you get orange. This is a basic color mixing principle."
        },
        {
            id: 13,
            question: "Which planet is closest to the Sun?",
            options: ["Earth", "Mars", "Mercury", "Venus"],
            correct: 2,
            difficulty: "medium",
            explanation: "Mercury is the closest planet to the Sun in our solar system."
        },
        {
            id: 14,
            question: "What is the largest mammal in the world?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correct: 1,
            difficulty: "medium",
            explanation: "The Blue Whale is the largest mammal and the largest animal that has ever lived on Earth."
        },
        {
            id: 15,
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            difficulty: "hard",
            explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia/Oceania."
        }
    ],
    general: [
        {
            id: 16,
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2,
            difficulty: "easy",
            explanation: "Paris is the capital and largest city of France, known for landmarks like the Eiffel Tower and Louvre Museum."
        },
        {
            id: 17,
            question: "Which animal is known as the 'King of the Jungle'?",
            options: ["Tiger", "Lion", "Elephant", "Leopard"],
            correct: 1,
            difficulty: "easy",
            explanation: "The lion is often called the 'King of the Jungle' even though lions actually live in grasslands, not jungles."
        },
        {
            id: 18,
            question: "How many sides does a triangle have?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            difficulty: "easy",
            explanation: "A triangle is a polygon with three sides and three angles."
        },
        {
            id: 19,
            question: "What do bees make?",
            options: ["Milk", "Honey", "Butter", "Cheese"],
            correct: 1,
            difficulty: "medium",
            explanation: "Bees collect nectar from flowers and transform it into honey, which they store in their hives."
        },
        {
            id: 20,
            question: "Which country is famous for the Great Wall?",
            options: ["Japan", "India", "China", "Korea"],
            correct: 2,
            difficulty: "medium",
            explanation: "The Great Wall of China is a famous ancient fortification built across northern China to protect against invasions."
        }
    ]
};

// Flashcard Bank
const flashcards = {
    english: [
        { question: "What is a noun?", answer: "A noun is a word that names a person, place, thing, or idea. Examples: cat, school, happiness, John." },
        { question: "What is a verb?", answer: "A verb is a word that shows action or state of being. Examples: run, jump, is, was, think." },
        { question: "What is an adjective?", answer: "An adjective is a word that describes or modifies a noun. Examples: big, red, happy, beautiful." },
        { question: "What is the past tense of 'go'?", answer: "The past tense of 'go' is 'went'. Example: Yesterday, I went to the store." },
        { question: "What is a synonym?", answer: "A synonym is a word that has the same or similar meaning as another word. Example: big and large are synonyms." }
    ],
    maths: [
        { question: "7 × 8 = ?", answer: "7 × 8 = 56\n\nTip: Remember 7 × 8 = 56 by thinking '5, 6, 7, 8' in order!" },
        { question: "144 ÷ 12 = ?", answer: "144 ÷ 12 = 12\n\nTip: Think of it as '12 times what equals 144?'" },
        { question: "What is a fraction?", answer: "A fraction represents a part of a whole. It has a numerator (top number) and denominator (bottom number). Example: 1/2 means 1 out of 2 equal parts." },
        { question: "What is the area of a rectangle?", answer: "Area of rectangle = length × width\n\nExample: If length = 5 and width = 3, then area = 5 × 3 = 15 square units." },
        { question: "What is 25% of 80?", answer: "25% of 80 = 20\n\nMethod: 25% = 1/4, so 80 ÷ 4 = 20\nOr: 0.25 × 80 = 20" }
    ],
    science: [
        { question: "How many continents are there?", answer: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia/Oceania." },
        { question: "What is the largest planet in our solar system?", answer: "Jupiter is the largest planet in our solar system. It is so big that all the other planets could fit inside it!" },
        { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci painted the Mona Lisa. He was an Italian artist, inventor, and scientist who lived from 1452 to 1519." },
        { question: "What is photosynthesis?", answer: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to make their own food (glucose) and release oxygen." },
        { question: "Which ocean is the largest?", answer: "The Pacific Ocean is the largest ocean on Earth. It covers about one-third of the Earth's surface!" }
    ],
    general: [
        { question: "What is the capital of France?", answer: "Paris is the capital of France. It's famous for the Eiffel Tower, Louvre Museum, and delicious croissants!" },
        { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci painted the Mona Lisa. He was a famous Italian artist, inventor, and scientist from the Renaissance period." },
        { question: "What is the largest mammal?", answer: "The Blue Whale is the largest mammal and the largest animal that has ever lived on Earth!" },
        { question: "How many continents are there?", answer: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia/Oceania." },
        { question: "What do pandas mainly eat?", answer: "Pandas mainly eat bamboo! They can eat up to 40 pounds of bamboo per day." }
    ]
};

// Game State
let currentQuiz = {
    subject: '',
    questions: [],
    currentIndex: 0,
    score: 0,
    correctAnswers: 0,
    selectedAnswer: null,
    startTime: 0,
    timeLeft: 30,
    timer: null
};

// Practice State
let practiceQuiz = {
    questions: [],
    currentIndex: 0,
    score: 0,
    correctAnswers: 0,
    selectedAnswer: null,
    startTime: 0,
    timeLeft: 30,
    timer: null
};

// Flashcard State
let currentFlashcards = {
    subject: '',
    cards: [],
    currentIndex: 0,
    isFlipped: false
};

// Hash Map for Quick Filtering (Simple Implementation)
class ReviewHashMap {
    constructor() {
        this.data = {};
    }
    
    set(key, value) {
        this.data[key] = value;
    }
    
    get(key) {
        return this.data[key] || [];
    }
    
    has(key) {
        return key in this.data;
    }
    
    clear() {
        this.data = {};
    }
    
    getAllByFilter(filterType, filterValue) {
        const results = [];
        for (let key in this.data) {
            const items = this.data[key];
            if (Array.isArray(items)) {
                const filtered = items.filter(item => {
                    if (filterType === 'subject') return item.subject === filterValue;
                    if (filterType === 'difficulty') return item.difficulty === filterValue;
                    return true;
                });
                results.push(...filtered);
            }
        }
        return results;
    }
}

// Initialize Review HashMap
const reviewHashMap = new ReviewHashMap();

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    updateDisplay();
    loadReviewHashMap();
});

// Local Storage Functions
function saveUserData() {
    const userData = {
        totalScore: parseInt(document.getElementById('total-score').textContent) || 0,
        streak: parseInt(document.getElementById('streak').textContent) || 0,
        subjects: {
            english: getSubjectData('english'),
            maths: getSubjectData('maths'),
            science: getSubjectData('science'),
            general: getSubjectData('general')
        }
    };
    localStorage.setItem('quizUserData', JSON.stringify(userData));
}

function loadUserData() {
    const saved = localStorage.getItem('quizUserData');
    if (saved) {
        const userData = JSON.parse(saved);
        document.getElementById('total-score').textContent = userData.totalScore || 0;
        document.getElementById('streak').textContent = userData.streak || 0;
        
        // Load subject data
        Object.keys(userData.subjects || {}).forEach(subject => {
            const data = userData.subjects[subject];
            if (data) {
                document.getElementById(`${subject}-accuracy`).textContent = data.accuracy || 0;
                const progressEl = document.getElementById(`${subject}-progress`);
                if (progressEl) {
                    progressEl.style.width = `${data.progress || 0}%`;
                }
            }
        });
    }
    updateCustomCardCount();
}

function getSubjectData(subject) {
    return {
        accuracy: parseInt(document.getElementById(`${subject}-accuracy`) ? document.getElementById(`${subject}-accuracy`).textContent : '0') || 0,
        progress: parseInt(document.getElementById(`${subject}-progress`).style.width) || 0,
        questionsAnswered: parseInt(localStorage.getItem(`${subject}_questions`) || '0'),
        correctAnswers: parseInt(localStorage.getItem(`${subject}_correct`) || '0')
    };
}

function updateDisplay() {
    // Update subject progress
    ['english', 'maths', 'science', 'general'].forEach(subject => {
        const questionsAnswered = parseInt(localStorage.getItem(`${subject}_questions`) || '0');
        const correctAnswers = parseInt(localStorage.getItem(`${subject}_correct`) || '0');
        
        const accuracy = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;
        const progress = Math.min((questionsAnswered / 15) * 100, 100);
        
        const accuracyEl = document.getElementById(`${subject}-accuracy`);
        const progressEl = document.getElementById(`${subject}-progress`);
        
        if (accuracyEl) accuracyEl.textContent = accuracy;
        if (progressEl) progressEl.style.width = `${progress}%`;
    });
    
    saveUserData();
}

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function goHome() {
    showScreen('home-screen');
    stopTimer();
    stopPracticeTimer();
}

function showLearnScreen() {
    showScreen('learn-screen');
}

function showSubjectFlashcards() {
    showScreen('subject-flashcards-screen');
}

function showCustomFlashcards() {
    showScreen('custom-flashcards-screen');
    loadCustomFlashcards();
}

function showQuizSelection() {
    showScreen('quiz-selection-screen');
}

function showProgress() {
    showScreen('progress-screen');
    updateProgressScreen();
}

function showReview() {
    showScreen('review-screen');
    updateReviewScreen();
}

// Flashcard Functions
function startFlashcards(subject) {
    currentFlashcards.subject = subject;
    
    if (subject === 'custom') {
        // Load custom flashcards
        const customCards = JSON.parse(localStorage.getItem('customFlashcards') || '[]');
        if (customCards.length === 0) {
            alert('No custom flashcards found! Create some first.');
            return;
        }
        currentFlashcards.cards = customCards.map(card => ({
            question: card.question,
            answer: card.answer
        }));
        document.getElementById('flashcard-subject').textContent = 'Your Custom Flashcards';
    } else {
        currentFlashcards.cards = [...flashcards[subject]];
        document.getElementById('flashcard-subject').textContent = `${capitalizeFirst(subject)} Flashcards`;
    }
    
    currentFlashcards.currentIndex = 0;
    currentFlashcards.isFlipped = false;
    
    document.getElementById('total-cards').textContent = currentFlashcards.cards.length;
    
    showScreen('flashcard-viewer-screen');
    loadFlashcard();
    generateFlashcardDots();
}

function loadFlashcard() {
    const card = currentFlashcards.cards[currentFlashcards.currentIndex];
    currentFlashcards.isFlipped = false;
    
    document.getElementById('current-card').textContent = currentFlashcards.currentIndex + 1;
    document.getElementById('flashcard-question').textContent = card.question;
    document.getElementById('flashcard-answer').textContent = card.answer;
    
    // Reset flip state
    document.getElementById('flashcard').classList.remove('flipped');
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentFlashcards.currentIndex === 0;
    document.getElementById('flashcard-next-btn').disabled = currentFlashcards.currentIndex === currentFlashcards.cards.length - 1;
    
    updateFlashcardDots();
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    currentFlashcards.isFlipped = !currentFlashcards.isFlipped;
}

function nextCard() {
    if (currentFlashcards.currentIndex < currentFlashcards.cards.length - 1) {
        currentFlashcards.currentIndex++;
        loadFlashcard();
    }
}

function previousCard() {
    if (currentFlashcards.currentIndex > 0) {
        currentFlashcards.currentIndex--;
        loadFlashcard();
    }
}

function shuffleFlashcards() {
    currentFlashcards.cards = shuffleArray([...currentFlashcards.cards]);
    currentFlashcards.currentIndex = 0;
    loadFlashcard();
    generateFlashcardDots();
}

function generateFlashcardDots() {
    const dotsContainer = document.getElementById('flashcard-dots');
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < currentFlashcards.cards.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.onclick = () => goToCard(i);
        dotsContainer.appendChild(dot);
    }
    
    updateFlashcardDots();
}

function updateFlashcardDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentFlashcards.currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function goToCard(index) {
    currentFlashcards.currentIndex = index;
    loadFlashcard();
}

// Custom Flashcards
function addCustomFlashcard() {
    const subject = document.getElementById('custom-subject').value;
    const question = document.getElementById('custom-question').value.trim();
    const answer = document.getElementById('custom-answer').value.trim();
    
    if (!question || !answer) {
        alert('Please fill in both question and answer!');
        return;
    }
    
    const customCards = JSON.parse(localStorage.getItem('customFlashcards') || '[]');
    const newCard = {
        id: Date.now(),
        subject: subject,
        question: question,
        answer: answer,
        created: new Date().toLocaleDateString()
    };
    
    customCards.push(newCard);
    localStorage.setItem('customFlashcards', JSON.stringify(customCards));
    
    // Clear form
    document.getElementById('custom-question').value = '';
    document.getElementById('custom-answer').value = '';
    
    // Reload display
    loadCustomFlashcards();
    updateCustomCardCount();
    
    alert('Flashcard added successfully!');
}

function loadCustomFlashcards() {
    const customCards = JSON.parse(localStorage.getItem('customFlashcards') || '[]');
    const container = document.getElementById('custom-cards-container');
    
    if (customCards.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">No custom flashcards yet. Create your first one above!</p>';
        return;
    }
    
    container.innerHTML = customCards.map(card => `
        <div class="custom-card-item">
            <div class="custom-card-question">${card.question}</div>
            <div class="custom-card-answer">${card.answer}</div>
            <div class="custom-card-meta">
                <span>${capitalizeFirst(card.subject)} • ${card.created}</span>
                <button onclick="deleteCustomCard(${card.id})" class="delete-btn">Delete</button>
            </div>
        </div>
    `).join('');
}

function deleteCustomCard(id) {
    if (confirm('Are you sure you want to delete this flashcard?')) {
        const customCards = JSON.parse(localStorage.getItem('customFlashcards') || '[]');
        const filteredCards = customCards.filter(card => card.id !== id);
        localStorage.setItem('customFlashcards', JSON.stringify(filteredCards));
        loadCustomFlashcards();
        updateCustomCardCount();
    }
}

function updateCustomCardCount() {
    const customCards = JSON.parse(localStorage.getItem('customFlashcards') || '[]');
    const countEl = document.getElementById('custom-card-count');
    if (countEl) {
        countEl.textContent = `${customCards.length} cards`;
    }
}

function viewCustomFlashcards() {
    const customCards = JSON.parse(localStorage.getItem('customFlashcards') || '[]');
    
    if (customCards.length === 0) {
        alert('No custom flashcards to view. Create some first!');
        return;
    }
    
    // Convert to flashcard format and start viewer
    currentFlashcards.subject = 'custom';
    currentFlashcards.cards = customCards.map(card => ({
        question: card.question,
        answer: card.answer
    }));
    currentFlashcards.currentIndex = 0;
    currentFlashcards.isFlipped = false;
    
    document.getElementById('flashcard-subject').textContent = 'Your Custom Flashcards';
    document.getElementById('total-cards').textContent = currentFlashcards.cards.length;
    
    showScreen('flashcard-viewer-screen');
    loadFlashcard();
    generateFlashcardDots();
}

// Quiz Functions
function startQuiz(subject) {
    currentQuiz.subject = subject;
    currentQuiz.questions = shuffleArray([...questions[subject]]).slice(0, 5);
    currentQuiz.currentIndex = 0;
    currentQuiz.score = 0;
    currentQuiz.correctAnswers = 0;
    currentQuiz.startTime = Date.now();
    
    document.getElementById('quiz-subject').textContent = `${capitalizeFirst(subject)} Quiz`;
    document.getElementById('total-questions').textContent = currentQuiz.questions.length;
    
    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentIndex];
    currentQuiz.selectedAnswer = null;
    currentQuiz.timeLeft = 30;
    
    // Update UI
    document.getElementById('current-question').textContent = currentQuiz.currentIndex + 1;
    document.getElementById('question-difficulty').textContent = capitalizeFirst(question.difficulty);
    document.getElementById('question-difficulty').className = `question-difficulty ${question.difficulty}`;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('quiz-progress').style.width = `${(currentQuiz.currentIndex / currentQuiz.questions.length) * 100}%`;
    
    // Load options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(index);
        optionDiv.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <span>${option}</span>
        `;
        optionsContainer.appendChild(optionDiv);
    });
    
    // Reset UI state
    document.getElementById('explanation').classList.add('hidden');
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('next-btn').classList.add('hidden');
    
    startTimer();
}

function selectOption(index) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Select new option
    document.querySelectorAll('.option')[index].classList.add('selected');
    currentQuiz.selectedAnswer = index;
    
    // Enable submit button
    document.getElementById('submit-btn').disabled = false;
}

function submitAnswer() {
    if (currentQuiz.selectedAnswer === null) return;
    
    stopTimer();
    const question = currentQuiz.questions[currentQuiz.currentIndex];
    const isCorrect = currentQuiz.selectedAnswer === question.correct;
    
    // Update score
    if (isCorrect) {
        currentQuiz.correctAnswers++;
        const points = question.difficulty === 'easy' ? 10 : question.difficulty === 'medium' ? 20 : 30;
        currentQuiz.score += points;
    } else {
        // Add to review queue
        addToReviewQueue(question, currentQuiz.selectedAnswer);
        // Reset streak
        document.getElementById('streak').textContent = '0';
    }
    
    // Show correct/incorrect styling
    document.querySelectorAll('.option').forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === currentQuiz.selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    // Show explanation
    document.getElementById('explanation-text').textContent = question.explanation;
    document.getElementById('explanation').classList.remove('hidden');
    
    // Update UI
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').classList.remove('hidden');
    
    // Update streak if correct
    if (isCorrect) {
        const currentStreak = parseInt(document.getElementById('streak').textContent);
        document.getElementById('streak').textContent = currentStreak + 1;
    }
}

function nextQuestion() {
    currentQuiz.currentIndex++;
    
    if (currentQuiz.currentIndex < currentQuiz.questions.length) {
        loadQuestion();
    } else {
        // Auto-end quiz after 2 seconds for last question
        setTimeout(() => {
            endQuiz();
        }, 2000);
    }
}

function endQuiz() {
    stopTimer();
    
    // Update user stats
    const totalScore = parseInt(document.getElementById('total-score').textContent);
    document.getElementById('total-score').textContent = totalScore + currentQuiz.score;
    
    // Update subject stats
    const subject = currentQuiz.subject;
    const currentQuestions = parseInt(localStorage.getItem(`${subject}_questions`) || '0');
    const currentCorrect = parseInt(localStorage.getItem(`${subject}_correct`) || '0');
    
    localStorage.setItem(`${subject}_questions`, currentQuestions + currentQuiz.questions.length);
    localStorage.setItem(`${subject}_correct`, currentCorrect + currentQuiz.correctAnswers);
    
    updateDisplay();
    showResults();
}

function showResults() {
    const accuracy = Math.round((currentQuiz.correctAnswers / currentQuiz.questions.length) * 100);
    const timeTaken = Math.round((Date.now() - currentQuiz.startTime) / 1000);
    const avgTime = Math.round(timeTaken / currentQuiz.questions.length);
    
    // Set results
    document.getElementById('final-score').textContent = currentQuiz.score;
    document.getElementById('correct-answers').textContent = `${currentQuiz.correctAnswers}/${currentQuiz.questions.length}`;
    document.getElementById('accuracy-percent').textContent = `${accuracy}%`;
    document.getElementById('time-taken').textContent = `${avgTime}s`;
    
    // Set performance message
    let title = "Good Job!";
    let icon = "👍";
    
    if (accuracy >= 90) {
        title = "Excellent!";
        icon = "🎉";
    } else if (accuracy >= 80) {
        title = "Great Work!";
        icon = "⭐";
    } else if (accuracy >= 70) {
        title = "Well Done!";
        icon = "👏";
    } else if (accuracy >= 60) {
        title = "Keep Trying!";
        icon = "💪";
    } else {
        title = "Practice More!";
        icon = "📚";
    }
    
    document.getElementById('results-title').textContent = title;
    document.getElementById('results-icon').textContent = icon;
    
    showScreen('results-screen');
}

function restartQuiz() {
    startQuiz(currentQuiz.subject);
}

// Timer Functions
function startTimer() {
    stopTimer();
    updateTimerDisplay();
    
    currentQuiz.timer = setInterval(() => {
        currentQuiz.timeLeft--;
        updateTimerDisplay();
        
        if (currentQuiz.timeLeft <= 0) {
            timeUp();
        }
    }, 1000);
}

function stopTimer() {
    if (currentQuiz.timer) {
        clearInterval(currentQuiz.timer);
        currentQuiz.timer = null;
    }
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = currentQuiz.timeLeft;
    
    if (currentQuiz.timeLeft <= 10) {
        timerElement.classList.add('warning');
    } else {
        timerElement.classList.remove('warning');
    }
}

function timeUp() {
    stopTimer();
    
    // Auto-submit with no answer
    const question = currentQuiz.questions[currentQuiz.currentIndex];
    addToReviewQueue(question, -1); // -1 indicates timeout
    
    // Reset streak
    document.getElementById('streak').textContent = '0';
    
    // Show correct answer
    document.querySelectorAll('.option')[question.correct].classList.add('correct');
    
    // Show explanation
    document.getElementById('explanation-text').textContent = question.explanation;
    document.getElementById('explanation').classList.remove('hidden');
    
    // Update UI
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').classList.remove('hidden');
    
    // Auto-advance to next question after 3 seconds
    setTimeout(() => {
        nextQuestion();
    }, 3000);
}

// Review System with HashMap
function addToReviewQueue(question, selectedAnswer) {
    const reviewQueue = JSON.parse(localStorage.getItem('reviewQueue') || '[]');
    
    // Check if question already exists in review queue
    const existingIndex = reviewQueue.findIndex(item => item.id === question.id);
    
    if (existingIndex !== -1) {
        // Update existing item
        reviewQueue[existingIndex].selected = selectedAnswer;
        reviewQueue[existingIndex].timestamp = Date.now();
        reviewQueue[existingIndex].incorrectCount = (reviewQueue[existingIndex].incorrectCount || 1) + 1;
    } else {
        // Add new item
        const reviewItem = {
            id: question.id,
            subject: currentQuiz.subject,
            question: question.question,
            options: question.options,
            correct: question.correct,
            selected: selectedAnswer,
            difficulty: question.difficulty,
            explanation: question.explanation,
            timestamp: Date.now(),
            incorrectCount: 1
        };
        reviewQueue.push(reviewItem);
    }
    
    localStorage.setItem('reviewQueue', JSON.stringify(reviewQueue));
    updateReviewHashMap();
}

function loadReviewHashMap() {
    const reviewQueue = JSON.parse(localStorage.getItem('reviewQueue') || '[]');
    reviewHashMap.clear();
    
    // Group by subject
    const subjects = {};
    const difficulties = {};
    
    reviewQueue.forEach(item => {
        // Group by subject
        if (!subjects[item.subject]) subjects[item.subject] = [];
        subjects[item.subject].push(item);
        
        // Group by difficulty
        if (!difficulties[item.difficulty]) difficulties[item.difficulty] = [];
        difficulties[item.difficulty].push(item);
    });
    
    // Store in HashMap
    Object.keys(subjects).forEach(subject => {
        reviewHashMap.set(`subject_${subject}`, subjects[subject]);
    });
    
    Object.keys(difficulties).forEach(difficulty => {
        reviewHashMap.set(`difficulty_${difficulty}`, difficulties[difficulty]);
    });
    
    reviewHashMap.set('all', reviewQueue);
}

function updateReviewHashMap() {
    loadReviewHashMap();
}

function filterReview(filterValue) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${filterValue}"]`).classList.add('active');
    
    let filteredQueue = [];
    
    if (filterValue === 'all') {
        filteredQueue = reviewHashMap.get('all');
    } else if (['english', 'maths', 'science', 'general'].includes(filterValue)) {
        filteredQueue = reviewHashMap.get(`subject_${filterValue}`) || [];
    } else if (['easy', 'medium', 'hard'].includes(filterValue)) {
        filteredQueue = reviewHashMap.get(`difficulty_${filterValue}`) || [];
    }
    
    displayFilteredReview(filteredQueue);
}

function displayFilteredReview(filteredQueue) {
    const reviewContent = document.getElementById('review-content');
    const sortBy = document.getElementById('sort-select').value;
    
    // Sort the filtered queue
    const sortedQueue = sortReviewQueue(filteredQueue, sortBy);
    
    if (sortedQueue.length === 0) {
        reviewContent.innerHTML = `
            <div class="review-empty">
                <div class="empty-icon">✅</div>
                <h3>No mistakes found!</h3>
                <p>Try a different filter or keep practicing!</p>
            </div>
        `;
        document.getElementById('practice-btn').style.display = 'none';
        return;
    }
    
    document.getElementById('practice-btn').style.display = 'block';
    
    reviewContent.innerHTML = sortedQueue.map(item => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-question">${item.question}</div>
                <div class="mistake-badge">${item.incorrectCount || 1}x wrong</div>
            </div>
            <div class="review-meta">
                ${capitalizeFirst(item.subject)} | ${capitalizeFirst(item.difficulty)} | 
                ${new Date(item.timestamp).toLocaleDateString()}
            </div>
            <div class="review-answer review-incorrect">
                Your answer: ${item.selected === -1 ? 'No answer (timeout)' : item.options[item.selected]}
            </div>
            <div class="review-answer review-correct">
                Correct answer: ${item.options[item.correct]}
            </div>
        </div>
    `).join('');
}

function updateReviewScreen() {
    loadReviewHashMap();
    
    // Get current filter
    const activeFilter = document.querySelector('.filter-btn.active');
    const filterValue = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
    
    filterReview(filterValue);
}

function sortReviewQueue(queue, sortBy) {
    const sorted = [...queue];
    
    switch (sortBy) {
        case 'most-incorrect':
            return sorted.sort((a, b) => (b.incorrectCount || 1) - (a.incorrectCount || 1));
        case 'recent':
            return sorted.sort((a, b) => b.timestamp - a.timestamp);
        case 'oldest':
            return sorted.sort((a, b) => a.timestamp - b.timestamp);
        case 'difficulty':
            const diffOrder = { 'easy': 1, 'medium': 2, 'hard': 3 };
            return sorted.sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]);
        case 'subject':
            return sorted.sort((a, b) => a.subject.localeCompare(b.subject));
        default:
            return sorted;
    }
}

// Practice Modal Functions
function showPracticeModal() {
    const reviewQueue = JSON.parse(localStorage.getItem('reviewQueue') || '[]');
    document.getElementById('total-mistakes').textContent = reviewQueue.length;
    document.getElementById('practice-modal').classList.add('active');
}

function closePracticeModal() {
    document.getElementById('practice-modal').classList.remove('active');
}

function startPractice(questionCount) {
    const reviewQueue = JSON.parse(localStorage.getItem('reviewQueue') || '[]');
    
    if (reviewQueue.length === 0) {
        alert('No mistakes to practice!');
        return;
    }
    
    // Sort by most incorrect first
    const sortedQueue = sortReviewQueue(reviewQueue, 'most-incorrect');
    
    // Select questions
    const questionsToUse = questionCount === -1 ? sortedQueue : sortedQueue.slice(0, questionCount);
    
    // Convert review items to question format
    practiceQuiz.questions = questionsToUse.map(item => ({
        id: item.id,
        question: item.question,
        options: item.options,
        correct: item.correct,
        difficulty: item.difficulty,
        explanation: item.explanation,
        incorrectCount: item.incorrectCount || 1
    }));
    
    practiceQuiz.currentIndex = 0;
    practiceQuiz.score = 0;
    practiceQuiz.correctAnswers = 0;
    practiceQuiz.startTime = Date.now();
    
    document.getElementById('practice-total').textContent = practiceQuiz.questions.length;
    
    closePracticeModal();
    showScreen('practice-screen');
    loadPracticeQuestion();
}

// Practice Quiz Functions
function loadPracticeQuestion() {
    const question = practiceQuiz.questions[practiceQuiz.currentIndex];
    practiceQuiz.selectedAnswer = null;
    practiceQuiz.timeLeft = 30;
    
    // Update UI
    document.getElementById('practice-current').textContent = practiceQuiz.currentIndex + 1;
    document.getElementById('practice-difficulty').textContent = capitalizeFirst(question.difficulty);
    document.getElementById('practice-difficulty').className = `question-difficulty ${question.difficulty}`;
    document.getElementById('mistake-count').textContent = question.incorrectCount;
    document.getElementById('practice-question').textContent = question.question;
    document.getElementById('practice-progress').style.width = `${((practiceQuiz.currentIndex + 1) / practiceQuiz.questions.length) * 100}%`;
    
    // Load options
    const optionsContainer = document.getElementById('practice-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectPracticeOption(index);
        optionDiv.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <span>${option}</span>
        `;
        optionsContainer.appendChild(optionDiv);
    });
    
    // Reset UI state
    document.getElementById('practice-explanation').classList.add('hidden');
    document.getElementById('practice-submit-btn').style.display = 'block';
    document.getElementById('practice-submit-btn').disabled = true;
    document.getElementById('practice-next-btn').classList.add('hidden');
    
    startPracticeTimer();
}

function selectPracticeOption(index) {
    // Remove previous selection
    document.querySelectorAll('#practice-options .option').forEach(opt => opt.classList.remove('selected'));
    
    // Select new option
    document.querySelectorAll('#practice-options .option')[index].classList.add('selected');
    practiceQuiz.selectedAnswer = index;
    
    // Enable submit button
    document.getElementById('practice-submit-btn').disabled = false;
}

function submitPracticeAnswer() {
    if (practiceQuiz.selectedAnswer === null) return;
    
    stopPracticeTimer();
    const question = practiceQuiz.questions[practiceQuiz.currentIndex];
    const isCorrect = practiceQuiz.selectedAnswer === question.correct;
    
    // Update score
    if (isCorrect) {
        practiceQuiz.correctAnswers++;
        const points = question.difficulty === 'easy' ? 10 : question.difficulty === 'medium' ? 20 : 30;
        practiceQuiz.score += points;
        
        // Remove from review queue if answered correctly
        removeFromReviewQueue(question.id);
    } else {
        // Update review queue with new incorrect attempt
        updateReviewQueueCount(question.id);
    }
    
    // Show correct/incorrect styling
    document.querySelectorAll('#practice-options .option').forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === practiceQuiz.selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    // Show explanation
    document.getElementById('practice-explanation-text').textContent = question.explanation;
    document.getElementById('practice-explanation').classList.remove('hidden');
    
    // Update UI
    document.getElementById('practice-submit-btn').style.display = 'none';
    document.getElementById('practice-next-btn').classList.remove('hidden');
}

function nextPracticeQuestion() {
    practiceQuiz.currentIndex++;
    
    if (practiceQuiz.currentIndex < practiceQuiz.questions.length) {
        loadPracticeQuestion();
    } else {
        endPracticeQuiz();
    }
}

function endPracticeQuiz() {
    stopPracticeTimer();
    
    // Update user stats
    const totalScore = parseInt(document.getElementById('total-score').textContent);
    document.getElementById('total-score').textContent = totalScore + practiceQuiz.score;
    
    // Update streak if all correct
    if (practiceQuiz.correctAnswers === practiceQuiz.questions.length) {
        const currentStreak = parseInt(document.getElementById('streak').textContent);
        document.getElementById('streak').textContent = currentStreak + practiceQuiz.correctAnswers;
    }
    
    updateDisplay();
    updateReviewHashMap();
    showPracticeResults();
}

function showPracticeResults() {
    const accuracy = Math.round((practiceQuiz.correctAnswers / practiceQuiz.questions.length) * 100);
    const timeTaken = Math.round((Date.now() - practiceQuiz.startTime) / 1000);
    const avgTime = Math.round(timeTaken / practiceQuiz.questions.length);
    
    // Set results
    document.getElementById('final-score').textContent = practiceQuiz.score;
    document.getElementById('correct-answers').textContent = `${practiceQuiz.correctAnswers}/${practiceQuiz.questions.length}`;
    document.getElementById('accuracy-percent').textContent = `${accuracy}%`;
    document.getElementById('time-taken').textContent = `${avgTime}s`;
    
    // Set performance message
    let title = "Practice Complete!";
    let icon = "📚";
    
    if (accuracy >= 90) {
        title = "Excellent Practice!";
        icon = "🎉";
    } else if (accuracy >= 80) {
        title = "Great Improvement!";
        icon = "⭐";
    } else if (accuracy >= 70) {
        title = "Good Progress!";
        icon = "👏";
    } else {
        title = "Keep Practicing!";
        icon = "💪";
    }
    
    document.getElementById('results-title').textContent = title;
    document.getElementById('results-icon').textContent = icon;
    
    showScreen('results-screen');
}

// Practice Timer Functions
function startPracticeTimer() {
    stopPracticeTimer();
    updatePracticeTimerDisplay();
    
    practiceQuiz.timer = setInterval(() => {
        practiceQuiz.timeLeft--;
        updatePracticeTimerDisplay();
        
        if (practiceQuiz.timeLeft <= 0) {
            practiceTimeUp();
        }
    }, 1000);
}

function stopPracticeTimer() {
    if (practiceQuiz.timer) {
        clearInterval(practiceQuiz.timer);
        practiceQuiz.timer = null;
    }
}

function updatePracticeTimerDisplay() {
    const timerElement = document.getElementById('practice-timer');
    timerElement.textContent = practiceQuiz.timeLeft;
    
    if (practiceQuiz.timeLeft <= 10) {
        timerElement.classList.add('warning');
    } else {
        timerElement.classList.remove('warning');
    }
}

function practiceTimeUp() {
    stopPracticeTimer();
    
    // Auto-submit with no answer
    const question = practiceQuiz.questions[practiceQuiz.currentIndex];
    updateReviewQueueCount(question.id); // Increment incorrect count
    
    // Show correct answer
    document.querySelectorAll('#practice-options .option')[question.correct].classList.add('correct');
    
    // Show explanation
    document.getElementById('practice-explanation-text').textContent = question.explanation;
    document.getElementById('practice-explanation').classList.remove('hidden');
    
    // Update UI
    document.getElementById('practice-submit-btn').style.display = 'none';
    document.getElementById('practice-next-btn').classList.remove('hidden');
}

// Review Queue Management
function removeFromReviewQueue(questionId) {
    const reviewQueue = JSON.parse(localStorage.getItem('reviewQueue') || '[]');
    const filteredQueue = reviewQueue.filter(item => item.id !== questionId);
    localStorage.setItem('reviewQueue', JSON.stringify(filteredQueue));
}

function updateReviewQueueCount(questionId) {
    const reviewQueue = JSON.parse(localStorage.getItem('reviewQueue') || '[]');
    const itemIndex = reviewQueue.findIndex(item => item.id === questionId);
    
    if (itemIndex !== -1) {
        reviewQueue[itemIndex].incorrectCount = (reviewQueue[itemIndex].incorrectCount || 1) + 1;
        reviewQueue[itemIndex].timestamp = Date.now();
        localStorage.setItem('reviewQueue', JSON.stringify(reviewQueue));
    }
}

// Progress Screen
function updateProgressScreen() {
    let totalQuestions = 0;
    let totalCorrect = 0;
    
    ['english', 'maths', 'science', 'general'].forEach(subject => {
        const questions = parseInt(localStorage.getItem(`${subject}_questions`) || '0');
        const correct = parseInt(localStorage.getItem(`${subject}_correct`) || '0');
        totalQuestions += questions;
        totalCorrect += correct;
    });
    
    const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    
    document.getElementById('total-questions-answered').textContent = totalQuestions;
    document.getElementById('total-correct').textContent = totalCorrect;
    document.getElementById('overall-accuracy').textContent = `${overallAccuracy}%`;
    
    // Update subject progress list
    const progressList = document.getElementById('subject-progress-list');
    progressList.innerHTML = ['english', 'maths', 'science', 'general'].map(subject => {
        const questions = parseInt(localStorage.getItem(`${subject}_questions`) || '0');
        const correct = parseInt(localStorage.getItem(`${subject}_correct`) || '0');
        const accuracy = questions > 0 ? Math.round((correct / questions) * 100) : 0;
        const level = Math.min(Math.floor(questions / 3) + 1, 10);
        
        return `
            <div class="subject-item">
                <div class="subject-name">${capitalizeFirst(subject)}</div>
                <div class="subject-details">
                    Level ${level} | ${accuracy}% accuracy<br>
                    ${correct}/${questions} correct
                </div>
            </div>
        `;
    }).join('');
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}