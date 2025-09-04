// NUET University Website JavaScript

// ========== GLOBAL VARIABLES ========== 
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let discoMode = false;

// ========== DOM CONTENT LOADED ========== 
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ========== INITIALIZATION ========== 
function initializeApp() {
    setupLoadingScreen();
    setupNavigation();
    setupHeroInteractions();
    setupDepartmentCards();
    setupSyllabusGenerator();
    setupStatsCounters();
    setupApplicationModal();
    setupKonamiCode();
    setupScrollAnimations();
    setupLogoEasterEgg();
    setupExamCountdown();
    
    // Add loading texts rotation
    rotateLoadingTexts();
}

// ========== LOADING SCREEN ========== 
function setupLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);
}

function rotateLoadingTexts() {
    const loadingTexts = [
        "Compiling jokes... please don't close browser",
        "Loading memes from the cloud...",
        "Initializing procrastination protocols...",
        "Brewing virtual tea...",
        "Calibrating banter algorithms...",
        "Downloading more RAM for humor...",
        "Synchronizing with comedy servers..."
    ];
    
    const loadingTextElement = document.getElementById('loading-text');
    let currentIndex = 0;
    
    const rotateText = setInterval(() => {
        if (document.getElementById('loading-screen').classList.contains('hidden')) {
            clearInterval(rotateText);
            return;
        }
        
        currentIndex = (currentIndex + 1) % loadingTexts.length;
        loadingTextElement.textContent = loadingTexts[currentIndex];
    }, 800);
}

// ========== NAVIGATION ========== 
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(11, 15, 20, 0.98)';
        } else {
            navbar.style.background = 'rgba(11, 15, 20, 0.95)';
        }
    });
}

// ========== HERO INTERACTIONS ========== 
function setupHeroInteractions() {
    const watchReelsBtn = document.getElementById('watch-reels-btn');
    
    watchReelsBtn.addEventListener('click', () => {
        const funnyVideos = [
            "Our latest graduation ceremony (spoiler: nobody graduated)",
            "Professor attempts to teach Procrastination 101",
            "Students discovering the library exists",
            "Epic ping pong tournament finals",
            "Cafeteria mystery meat investigation"
        ];
        
        const randomVideo = funnyVideos[Math.floor(Math.random() * funnyVideos.length)];
        showNotification(`🎬 Now playing: "${randomVideo}"`, 'info');
    });
}

// ========== DEPARTMENT CARDS ========== 
function setupDepartmentCards() {
    const departmentCards = document.querySelectorAll('.department-card');
    
    departmentCards.forEach(card => {
        const nameElement = card.querySelector('.department-name');
        const originalName = card.dataset.original;
        const sillyName = card.dataset.silly;
        
        card.addEventListener('mouseenter', () => {
            nameElement.textContent = sillyName;
            nameElement.style.color = 'var(--accent-teal)';
        });
        
        card.addEventListener('mouseleave', () => {
            nameElement.textContent = originalName;
            nameElement.style.color = 'var(--text-primary)';
        });
        
        // Add random floating animation
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'float 2s ease-in-out infinite';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.animation = '';
        });
    });
}

// ========== SYLLABUS GENERATOR ========== 
function setupSyllabusGenerator() {
    const syllabusBtn = document.getElementById('syllabus-btn');
    const syllabusOutput = document.getElementById('syllabus-output');
    
    const courses = [
        {
            title: "Advanced Netflix Binge-Watching",
            credits: 3,
            description: "Master the art of consecutive episode consumption while maintaining optimal snack-to-drama ratios."
        },
        {
            title: "Professional Procrastination Techniques",
            credits: 2,
            description: "Learn to delay important tasks with scientific precision and creative excuses."
        },
        {
            title: "Meme Theory & Applied Humor",
            credits: 4,
            description: "Deep dive into viral content creation, internet culture, and the psychology of shareability."
        },
        {
            title: "Strategic Napping & Sleep Optimization",
            credits: 1,
            description: "Maximize rest efficiency in unconventional locations and time constraints."
        },
        {
            title: "Coffee Shop WiFi Ethics",
            credits: 2,
            description: "Understanding the moral implications of occupying premium seating for minimal purchases."
        },
        {
            title: "Social Media Stalking (Ethical)",
            credits: 3,
            description: "Professional reconnaissance techniques for casual acquaintance research."
        },
        {
            title: "Quantum Excuse Generation",
            credits: 5,
            description: "Advanced probability theory applied to believable reason fabrication."
        },
        {
            title: "Passive-Aggressive Communication",
            credits: 2,
            description: "Mastering the subtle art of indirect confrontation and emoji warfare."
        }
    ];
    
    syllabusBtn.addEventListener('click', () => {
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];
        
        syllabusOutput.innerHTML = `
            <h4>${randomCourse.title} (${randomCourse.credits} credits)</h4>
            <p>${randomCourse.description}</p>
        `;
        
        syllabusOutput.classList.remove('hidden');
        
        // Add some animation
        syllabusOutput.style.animation = 'fadeInUp 0.5s ease';
        
        setTimeout(() => {
            syllabusOutput.style.animation = '';
        }, 500);
    });
}

// ========== STATS COUNTERS ========== 
function setupStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const animateCounters = () => {
        if (hasAnimated) return;
        hasAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            const duration = 2000; // 2 seconds
            const start = Date.now();
            
            const updateCount = () => {
                const now = Date.now();
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(target * easeOutQuart);
                
                stat.textContent = current.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                }
            };
            
            updateCount();
        });
    };
    
    // Trigger animation when stats section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// ========== APPLICATION MODAL ========== 
function setupApplicationModal() {
    const applicationBtn = document.getElementById('application-btn');
    const applyBtn = document.getElementById('apply-btn');
    const modal = document.getElementById('application-modal');
    const closeBtn = document.querySelector('.modal-close');
    const form = document.getElementById('application-form');
    const funnyReasonInput = document.getElementById('funny-reason');
    
    // Open modal
    [applicationBtn, applyBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        }
    });
    
    // Close modal
    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    };
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Joke validation
    funnyReasonInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        if (value.includes("i'm not funny") || value.includes("im not funny") || value.includes("not funny")) {
            showNotification("❌ Application rejected! We only accept certified comedians!", 'error');
            e.target.style.borderColor = 'var(--accent-orange)';
            e.target.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                e.target.style.animation = '';
            }, 500);
        } else {
            e.target.style.borderColor = 'var(--accent-teal)';
        }
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const funnyReason = formData.get('funny-reason');
        
        if (funnyReason.toLowerCase().includes("i'm not funny") || funnyReason.toLowerCase().includes("im not funny")) {
            showNotification("❌ Sorry, we don't accept applications from people who aren't funny!", 'error');
            return;
        }
        
        showNotification(`🎉 Welcome to NUET, ${name}! Your application for the Department of Advanced Hilarity has been approved!`, 'success');
        closeModal();
        form.reset();
        
        // Trigger confetti
        triggerConfetti();
    });
}

// ========== KONAMI CODE ========== 
function setupKonamiCode() {
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        
        // Keep only the last 10 key presses
        if (konamiCode.length > 10) {
            konamiCode.shift();
        }
        
        // Check if the sequence matches
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateDiscoMode();
            konamiCode = []; // Reset
        }
    });
}

function activateDiscoMode() {
    if (discoMode) return;
    
    discoMode = true;
    const discoLights = document.getElementById('disco-lights');
    
    showNotification("🕺 DISCO MODE ACTIVATED! Dance like nobody's grading!", 'success');
    
    discoLights.classList.remove('hidden');
    document.body.style.animation = 'rainbow 0.5s infinite';
    
    // Trigger confetti
    triggerConfetti();
    
    // Play disco for 10 seconds
    setTimeout(() => {
        discoLights.classList.add('hidden');
        document.body.style.animation = '';
        discoMode = false;
        showNotification("🎉 Disco mode deactivated. Back to regular programming!", 'info');
    }, 10000);
}

// ========== SCROLL ANIMATIONS ========== 
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.department-card, .media-card, .testimonial-card, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ========== LOGO EASTER EGG ========== 
function setupLogoEasterEgg() {
    const logo = document.getElementById('logo');
    let clickCount = 0;
    
    logo.addEventListener('click', () => {
        clickCount++;
        
        if (clickCount >= 3) {
            logo.classList.add('sunglasses-mode');
            showNotification("😎 Cool logo activated! NUET just got 100% cooler!", 'info');
            clickCount = 0;
            
            // Remove sunglasses after 5 seconds
            setTimeout(() => {
                logo.classList.remove('sunglasses-mode');
            }, 5000);
        }
    });
}

// ========== EXAM COUNTDOWN ========== 
function setupExamCountdown() {
    const countdown = document.getElementById('countdown');
    
    // Always show "Time's Up!" with some random scary messages
    const timeUpMessages = [
        "00:00:00 – Time's Up!",
        "00:00:00 – Still Time's Up!",
        "00:00:00 – Eternally Time's Up!",
        "00:00:00 – Time's Up Forever!",
        "00:00:00 – The Clock Stopped!",
        "00:00:00 – Tick Tock... Nope!"
    ];
    
    let messageIndex = 0;
    
    setInterval(() => {
        countdown.textContent = timeUpMessages[messageIndex];
        messageIndex = (messageIndex + 1) % timeUpMessages.length;
    }, 3000);
}

// ========== UTILITY FUNCTIONS ========== 

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '12px',
        color: 'white',
        fontWeight: '600',
        zIndex: '9999',
        maxWidth: '400px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        backdropFilter: 'blur(10px)'
    });
    
    // Set background based on type
    const backgrounds = {
        success: 'linear-gradient(135deg, #20E3B2, #17A589)',
        error: 'linear-gradient(135deg, #FF6B6B, #E74C3C)',
        info: 'linear-gradient(135deg, #8B5CF6, #7E57C2)',
        warning: 'linear-gradient(135deg, #FFD93D, #FFC107)'
    };
    
    notification.style.background = backgrounds[type] || backgrounds.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#20E3B2', '#8B5CF6', '#FF6B6B', '#FFD93D', '#4ECDC4'];
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -10,
            dx: (Math.random() - 0.5) * 4,
            dy: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 6 + 4,
            gravity: 0.1
        });
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((piece, index) => {
            piece.x += piece.dx;
            piece.y += piece.dy;
            piece.dy += piece.gravity;
            piece.rotation += piece.rotationSpeed;
            
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.size/2, -piece.size/2, piece.size, piece.size);
            ctx.restore();
            
            // Remove confetti that's off screen
            if (piece.y > canvas.height + 10) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animateConfetti);
        }
    }
    
    animateConfetti();
}

// ========== CSS ANIMATIONS ========== 

// Add CSS keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(-8px); }
        50% { transform: translateY(-16px); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .notification {
        animation: slideInRight 0.3s ease;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

document.head.appendChild(style);

// ========== ADDITIONAL INTERACTIVE FEATURES ========== 

// Random fun facts that appear occasionally
const funFacts = [
    "🎓 Did you know? NUET has a 200% job satisfaction rate!",
    "☕ Fun fact: Our cafeteria serves liquid motivation 24/7!",
    "🎮 NUET fact: We have more gaming chairs than lecture halls!",
    "🛌 Did you know? Strategic napping is our most popular course!",
    "🎭 Fun fact: Our comedy club has never had an unfunny member!",
    "📚 NUET fact: Our library's fiction section is larger than reality!",
    "🎸 Did you know? Air guitar is considered a legitimate elective!"
];

// Show random fun fact every 30 seconds
setInterval(() => {
    if (Math.random() < 0.3) { // 30% chance every 30 seconds
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        showNotification(randomFact, 'info');
    }
}, 30000);

// Add some easter eggs to media cards
document.addEventListener('DOMContentLoaded', () => {
    const mediaCards = document.querySelectorAll('.media-card');
    
    mediaCards.forEach(card => {
        card.addEventListener('click', () => {
            const captions = [
                "🎬 Now playing in NUET Cinema!",
                "📸 Added to your memories!",
                "🎥 This content is NUET-approved!",
                "⭐ Rated 5 stars by procrastinators!",
                "🍿 Perfect with popcorn!"
            ];
            
            const randomCaption = captions[Math.floor(Math.random() * captions.length)];
            showNotification(randomCaption, 'success');
        });
    });
});

// Performance optimization - lazy loading for heavy animations
const performanceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

// Smooth scrolling fallback for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };
    smoothScrollPolyfill();
}

// Console easter egg for developers
console.log(`
    ███╗   ██╗██╗   ██╗███████╗████████╗
    ████╗  ██║██║   ██║██╔════╝╚══██╔══╝
    ██╔██╗ ██║██║   ██║█████╗     ██║   
    ██║╚██╗██║██║   ██║██╔══╝     ██║   
    ██║ ╚████║╚██████╔╝███████╗   ██║   
    ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝   ╚═╝   
    
    🎓 Welcome to NUET's console!
    🕵️ You found the secret developer area!
    
    Try these commands:
    - Type "nuet.activateDiscoMode()" for instant party!
    - Type "nuet.generateSyllabus()" for random courses!
    - Type "nuet.showStats()" for hidden statistics!
    
    Happy coding from NUET! 🚀
`);

// Make some functions available globally for console fun
window.nuet = {
    activateDiscoMode: () => activateDiscoMode(),
    generateSyllabus: () => document.getElementById('syllabus-btn').click(),
    showStats: () => {
        console.log('📊 NUET Hidden Stats:');
        console.log('🎭 Total jokes compiled: Over 9000');
        console.log('☕ Coffee consumed: ∞ liters');
        console.log('😴 Naps taken: Still counting...');
        console.log('🎮 High score in procrastination: Legendary');
    },
    showFunFact: () => {
        const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
        showNotification(fact, 'info');
    },
    triggerConfetti: () => triggerConfetti()
};
