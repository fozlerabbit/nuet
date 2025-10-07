/* ============================================
   NUET QUIZ - MAIN LOGIC
   Quiz state management and interactions
   ============================================ */

class NUETQuiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.startTime = null;
        this.categoryScores = {};
        
        this.init();
    }
    
    async init() {
        await this.loadQuestions();
        this.checkSavedProgress();
        this.setupEventListeners();
    }
    
    async loadQuestions() {
        try {
            const response = await fetch('data/questions.json');
            const data = await response.json();
            this.questions = data.questions;
        } catch (error) {
            console.error('Error loading questions:', error);
            // Fallback to inline questions if file fails to load
            this.questions = this.getFallbackQuestions();
        }
    }
    
    getFallbackQuestions() {
        // Inline questions as fallback
        return [
            {
                id: 1,
                category: "Procrastination",
                question: "Assignment due in 6 hours. Progress: 0%. Your move? 🤔",
                options: [
                    "🎮 Play one more game to 'relax' first",
                    "☕ Make coffee and accept my fate",
                    "📧 Email professor: 'Sick grandmother'",
                    "😴 Sleep now, regret later"
                ],
                correctAnswer: 1,
                points: 10,
                feedback: {
                    correct: "Wise choice! Caffeine is the engineer's superpower! ⚡",
                    wrong: "Bold strategy! Let's see if it pays off... 😅"
                },
                funFact: "Studies show 83% of engineers complete assignments in the last 17% of available time.",
                difficulty: "easy"
            }
            // More questions loaded from JSON
        ];
    }
    
    checkSavedProgress() {
        const saved = localStorage.getItem('nuetQuizProgress');
        if (saved) {
            const data = JSON.parse(saved);
            const continueSection = document.getElementById('continueSection');
            if (continueSection) {
                continueSection.style.display = 'block';
            }
        }
    }
    
    setupEventListeners() {
        // Start quiz button
        const startBtn = document.getElementById('startQuizBtn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startQuiz());
        }
        
        // Continue button
        const continueBtn = document.getElementById('continueBtn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => this.continueQuiz());
        }
        
        // Restart button
        const restartBtn = document.getElementById('restartBtn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.startQuiz(true));
        }
        
        // Navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousQuestion());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
        
        // Results buttons
        const retakeBtn = document.getElementById('retakeBtn');
        const shareBtn = document.getElementById('shareBtn');
        
        if (retakeBtn) {
            retakeBtn.addEventListener('click', () => this.retakeQuiz());
        }
        
        if (shareBtn) {
            shareBtn.addEventListener('click', () => this.toggleShareButtons());
        }
        
        // Share platform buttons
        const sharePlatformBtns = document.querySelectorAll('.share-platform-btn');
        sharePlatformBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const platform = e.currentTarget.dataset.platform;
                this.shareResults(platform);
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    startQuiz(reset = false) {
        if (reset) {
            this.resetQuiz();
        }
        
        this.startTime = Date.now();
        this.showScreen('quizScreen');
        this.loadQuestion(0);
    }
    
    continueQuiz() {
        const saved = localStorage.getItem('nuetQuizProgress');
        if (saved) {
            const data = JSON.parse(saved);
            this.currentQuestionIndex = data.currentQuestionIndex;
            this.userAnswers = data.userAnswers;
            this.score = data.score;
            this.startTime = data.startTime;
            this.categoryScores = data.categoryScores || {};
        }
        
        this.showScreen('quizScreen');
        this.loadQuestion(this.currentQuestionIndex);
    }
    
    resetQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.startTime = null;
        this.categoryScores = {};
        localStorage.removeItem('nuetQuizProgress');
    }
    
    showScreen(screenId) {
        const screens = ['welcomeScreen', 'quizScreen', 'resultsScreen'];
        screens.forEach(id => {
            const screen = document.getElementById(id);
            if (screen) {
                screen.style.display = id === screenId ? 'flex' : 'none';
            }
        });
    }
    
    loadQuestion(index) {
        if (index < 0 || index >= this.questions.length) return;
        
        this.currentQuestionIndex = index;
        const question = this.questions[index];
        
        // Update progress
        this.updateProgress();
        
        // Update question card
        const questionCard = document.getElementById('questionCard');
        const categoryBadge = document.getElementById('categoryBadge');
        const questionText = document.getElementById('questionText');
        const difficultyValue = document.getElementById('difficultyValue');
        
        if (categoryBadge) categoryBadge.textContent = question.category;
        if (questionText) questionText.textContent = question.question;
        if (difficultyValue) {
            difficultyValue.textContent = question.difficulty;
            difficultyValue.className = `difficulty-value ${question.difficulty}`;
        }
        
        // Animate card
        if (questionCard) {
            questionCard.style.animation = 'none';
            setTimeout(() => {
                questionCard.style.animation = 'cardSlideIn 0.6s ease';
            }, 10);
        }
        
        // Load options
        this.loadOptions(question);
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Save progress
        this.saveProgress();
    }
    
    loadOptions(question) {
        const container = document.getElementById('optionsContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.dataset.index = index;
            
            // Check if previously answered
            const previousAnswer = this.userAnswers[this.currentQuestionIndex];
            if (previousAnswer !== undefined) {
                btn.classList.add('disabled');
                if (index === previousAnswer) {
                    btn.classList.add('selected');
                }
                if (index === question.correctAnswer) {
                    btn.classList.add('correct');
                } else if (index === previousAnswer) {
                    btn.classList.add('wrong');
                }
            } else {
                btn.addEventListener('click', () => this.selectAnswer(index));
            }
            
            // Stagger animation
            btn.style.opacity = '0';
            btn.style.animation = `fadeInUp 0.4s ease ${index * 0.1}s forwards`;
            
            container.appendChild(btn);
        });
    }
    
    selectAnswer(answerIndex) {
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = answerIndex === question.correctAnswer;
        
        // Store answer
        this.userAnswers[this.currentQuestionIndex] = answerIndex;
        
        // Update score
        if (isCorrect) {
            this.score += question.points;
            
            // Update category score
            if (!this.categoryScores[question.category]) {
                this.categoryScores[question.category] = { correct: 0, total: 0 };
            }
            this.categoryScores[question.category].correct++;
        }
        
        if (!this.categoryScores[question.category]) {
            this.categoryScores[question.category] = { correct: 0, total: 0 };
        }
        this.categoryScores[question.category].total++;
        
        // Update UI
        this.updateScore();
        this.showFeedback(isCorrect, question.feedback);
        this.highlightAnswer(answerIndex, question.correctAnswer);
        
        // Enable next button
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
        
        // Auto-advance after delay
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.nextQuestion();
            } else {
                this.showResults();
            }
        }, 2500);
        
        // Save progress
        this.saveProgress();
    }
    
    highlightAnswer(userAnswer, correctAnswer) {
        const options = document.querySelectorAll('.option-btn');
        
        options.forEach((btn, index) => {
            btn.classList.add('disabled');
            
            if (index === correctAnswer) {
                btn.classList.add('correct');
            } else if (index === userAnswer && userAnswer !== correctAnswer) {
                btn.classList.add('wrong');
            }
            
            if (index === userAnswer) {
                btn.classList.add('selected');
            }
        });
    }
    
    showFeedback(isCorrect, feedback) {
        const toast = document.getElementById('feedbackToast');
        if (!toast) return;
        
        toast.textContent = isCorrect ? feedback.correct : feedback.wrong;
        toast.className = `feedback-toast show ${isCorrect ? 'correct' : 'wrong'}`;
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
    
    updateProgress() {
        const current = this.currentQuestionIndex + 1;
        const total = this.questions.length;
        const percentage = Math.round((current / total) * 100);
        
        const currentEl = document.getElementById('currentQuestion');
        const totalEl = document.getElementById('totalQuestions');
        const percentageEl = document.getElementById('progressPercentage');
        const progressBar = document.getElementById('progressBar');
        
        if (currentEl) currentEl.textContent = current;
        if (totalEl) totalEl.textContent = total;
        if (percentageEl) percentageEl.textContent = `${percentage}%`;
        if (progressBar) progressBar.style.width = `${percentage}%`;
    }
    
    updateScore() {
        const maxScore = this.questions.reduce((sum, q) => sum + q.points, 0);
        const scoreValue = document.querySelector('.score-value');
        
        if (scoreValue) {
            window.animateCounter(scoreValue, parseInt(scoreValue.textContent), this.score, 500);
            scoreValue.textContent = `${this.score}/${maxScore}`;
        }
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
        }
        
        if (nextBtn) {
            const answered = this.userAnswers[this.currentQuestionIndex] !== undefined;
            nextBtn.disabled = !answered;
            nextBtn.querySelector('span').textContent = 
                this.currentQuestionIndex === this.questions.length - 1 ? 'Finish →' : 'Next →';
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.loadQuestion(this.currentQuestionIndex - 1);
        }
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.loadQuestion(this.currentQuestionIndex + 1);
        } else {
            this.showResults();
        }
    }
    
    saveProgress() {
        const data = {
            currentQuestionIndex: this.currentQuestionIndex,
            userAnswers: this.userAnswers,
            score: this.score,
            startTime: this.startTime,
            categoryScores: this.categoryScores
        };
        
        localStorage.setItem('nuetQuizProgress', JSON.stringify(data));
    }
    
    showResults() {
        this.showScreen('resultsScreen');
        
        const maxScore = this.questions.reduce((sum, q) => sum + q.points, 0);
        const percentage = Math.round((this.score / maxScore) * 100);
        const correctAnswers = this.userAnswers.filter((answer, index) => 
            answer === this.questions[index].correctAnswer
        ).length;
        
        // Calculate time taken
        const timeTaken = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        
        // Find best category
        let bestCategory = null;
        let bestPercentage = 0;
        
        Object.keys(this.categoryScores).forEach(cat => {
            const catPercentage = (this.categoryScores[cat].correct / this.categoryScores[cat].total) * 100;
            if (catPercentage > bestPercentage) {
                bestPercentage = catPercentage;
                bestCategory = cat;
            }
        });
        
        // Get tier info
        const tierInfo = this.getTierInfo(this.score, maxScore);
        
        // Update UI
        this.updateResultsUI(percentage, correctAnswers, minutes, seconds, bestCategory, tierInfo);
        
        // Trigger confetti for good scores
        if (percentage >= 70) {
            setTimeout(() => window.triggerConfetti(), 500);
        }
        
        // Clear saved progress
        localStorage.removeItem('nuetQuizProgress');
    }
    
    getTierInfo(score, maxScore) {
        const percentage = (score / maxScore) * 100;
        
        if (percentage >= 90) {
            return {
                title: "🔥 LEGENDARY NUET MATERIAL 👑",
                message: "You're not just NUET material - you ARE NUET! Coffee flows through your veins, deadlines fear you, and WiFi bows to your presence. Apply now and lead the meme revolution!",
                badge: this.createBadgeSVG('gold'),
                recommendation: "Irony Engineering, Niga AI",
                achievement: "Achievement: Coffee Deity ☕👑"
            };
        } else if (percentage >= 80) {
            return {
                title: "⚡ CERTIFIED NUET STUDENT 🎓",
                message: "You've mastered the art of surviving on 3 hours of sleep and infinite coffee. Welcome to the chaos! The library nap spots are calling your name.",
                badge: this.createBadgeSVG('silver'),
                recommendation: "Nigaputer Science, Procrastination Engineering",
                achievement: "Achievement: All-Nighter Champion 🌙"
            };
        } else if (percentage >= 70) {
            return {
                title: "💪 NUET ENTHUSIAST",
                message: "You understand the struggle! A few more late nights and questionable life choices, and you'll be a full-fledged NUET legend. Keep grinding!",
                badge: this.createBadgeSVG('bronze'),
                recommendation: "Nechanical Engineering, Nivil Engineering",
                achievement: "Achievement: Deadline Dancer ⏰"
            };
        } else if (percentage >= 60) {
            return {
                title: "📚 ENGINEERING ROOKIE",
                message: "Welcome to the chaos, young padawan! You've got potential. Pro tip: Coffee is not optional, it's a lifestyle. Start your training now!",
                badge: this.createBadgeSVG('iron'),
                recommendation: "Any NUET department (we accept all!)",
                achievement: "Achievement: Freshman Energy 🌟"
            };
        } else {
            return {
                title: "🌱 FUTURE NUET STAR",
                message: "Every legend starts somewhere! You might not be ready NOW, but with enough coffee, memes, and sleep deprivation, you'll get there. Never give up!",
                badge: this.createBadgeSVG('participant'),
                recommendation: "10% Engineering (we all need it!)",
                achievement: "Achievement: Brave Soul 💫"
            };
        }
    }
    
    createBadgeSVG(type) {
        const colors = {
            gold: ['#ffd700', '#ffed4e'],
            silver: ['#c0c0c0', '#e8e8e8'],
            bronze: ['#cd7f32', '#e89a5e'],
            iron: ['#6b7280', '#9ca3af'],
            participant: ['#6366f1', '#ec4899']
        };
        
        const color = colors[type] || colors.participant;
        
        return `
            <svg class="badge-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:${color[0]};stop-opacity:1" />
                        <stop offset="100%" style="stop-color:${color[1]};stop-opacity:1" />
                    </linearGradient>
                    <filter id="badgeGlow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#badgeGradient)" filter="url(#badgeGlow)"/>
                <circle cx="100" cy="100" r="70" fill="none" stroke="${color[0]}" stroke-width="3"/>
                <text x="100" y="110" font-family="Inter" font-size="48" font-weight="800" fill="#0a0b1e" text-anchor="middle">★</text>
            </svg>
        `;
    }
    
    updateResultsUI(percentage, correctAnswers, minutes, seconds, bestCategory, tierInfo) {
        // Update title and message
        const titleEl = document.getElementById('resultsTitle');
        const messageEl = document.getElementById('resultsMessage');
        
        if (titleEl) titleEl.textContent = tierInfo.title;
        if (messageEl) messageEl.textContent = tierInfo.message;
        
        // Update badge
        const badgeEl = document.getElementById('resultsBadge');
        if (badgeEl) badgeEl.innerHTML = tierInfo.badge;
        
        // Animate score
        const scoreEl = document.getElementById('finalScore');
        const percentageEl = document.getElementById('scorePercentage');
        
        if (scoreEl) {
            window.animateCounter(scoreEl, 0, this.score, 2000);
        }
        
        if (percentageEl) {
            setTimeout(() => {
                percentageEl.textContent = `${percentage}%`;
            }, 2000);
        }
        
        // Animate progress circle
        setTimeout(() => {
            window.animateProgressCircle(percentage);
        }, 500);
        
        // Update breakdown
        const correctAnswersEl = document.getElementById('correctAnswers');
        const timeTakenEl = document.getElementById('timeTaken');
        const bestCategoryEl = document.getElementById('bestCategory');
        
        if (correctAnswersEl) {
            correctAnswersEl.textContent = `${correctAnswers}/${this.questions.length}`;
        }
        
        if (timeTakenEl) {
            timeTakenEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
        
        if (bestCategoryEl) {
            bestCategoryEl.textContent = bestCategory || 'N/A';
        }
        
        // Update recommendation
        const recommendationEl = document.getElementById('recommendationText');
        if (recommendationEl) {
            recommendationEl.textContent = tierInfo.recommendation;
        }
        
        // Update achievement
        const achievementEl = document.getElementById('achievementText');
        if (achievementEl) {
            achievementEl.textContent = tierInfo.achievement;
        }
    }
    
    retakeQuiz() {
        this.resetQuiz();
        this.startQuiz();
    }
    
    toggleShareButtons() {
        const shareButtons = document.getElementById('shareButtons');
        if (shareButtons) {
            const isVisible = shareButtons.style.display === 'flex';
            shareButtons.style.display = isVisible ? 'none' : 'flex';
        }
    }
    
    shareResults(platform) {
        const maxScore = this.questions.reduce((sum, q) => sum + q.points, 0);
        const percentage = Math.round((this.score / maxScore) * 100);
        const message = `I scored ${this.score}/${maxScore} (${percentage}%) on the NUET Engineering Survival Quiz! 🎓☕ Can you beat my score?`;
        const url = window.location.href;
        
        switch (platform) {
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`, '_blank');
                break;
            case 'whatsapp':
                window.open(`https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`, '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(message + ' ' + url).then(() => {
                    const btn = document.querySelector('.copy-btn span');
                    const originalText = btn.textContent;
                    btn.textContent = '✅ Copied!';
                    setTimeout(() => {
                        btn.textContent = originalText;
                    }, 2000);
                });
                break;
        }
    }
    
    handleKeyboard(e) {
        const quizScreen = document.getElementById('quizScreen');
        if (!quizScreen || quizScreen.style.display === 'none') return;
        
        // Number keys (1-4) to select answers
        if (e.key >= '1' && e.key <= '4') {
            const index = parseInt(e.key) - 1;
            const options = document.querySelectorAll('.option-btn:not(.disabled)');
            if (options[index]) {
                options[index].click();
            }
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowLeft') {
            this.previousQuestion();
        } else if (e.key === 'ArrowRight') {
            const answered = this.userAnswers[this.currentQuestionIndex] !== undefined;
            if (answered) {
                this.nextQuestion();
            }
        }
        
        // Enter to submit/next
        if (e.key === 'Enter') {
            const nextBtn = document.getElementById('nextBtn');
            if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            }
        }
        
        // Space for next
        if (e.key === ' ') {
            e.preventDefault();
            const nextBtn = document.getElementById('nextBtn');
            if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            }
        }
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.nuetQuiz = new NUETQuiz();
});