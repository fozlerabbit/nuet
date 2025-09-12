// NUET University Website JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    handleLoadingScreen();
    setupNavigation();
    setupScrollEffects();
    setupAnimations();
    setupEasterEggs();
    setupKonamiCode();
    setupCounters();
    setupExamCountdown();
    setupNewsletterForm();
    setupEventCalendar();
}

// Loading Screen Animation
function handleLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Animate loading progress
    setTimeout(() => {
        if (loadingProgress) {
            loadingProgress.style.width = '100%';
        }
    }, 2000);
    
    // Hide loading screen after animations complete
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 4000);
}

// Navigation Setup
function setupNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Smooth scrolling for navigation links
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
}

// Scroll Effects and Animations
function setupScrollEffects() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Parallax effect for floating blobs
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-blob');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Setup Various Animations
function setupAnimations() {
    // Add entrance animations to cards
    const cards = document.querySelectorAll('.glass-panel');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-card');
    });
    
    // Hover effects for department cards
    const deptCards = document.querySelectorAll('.dept-card');
    deptCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(10deg) translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
    
    // Glowing button effects
    const glowButtons = document.querySelectorAll('.glow-btn');
    glowButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 40px rgba(32, 227, 178, 0.6)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '0 0 20px rgba(32, 227, 178, 0.3)';
        });
    });
}

// Easter Eggs Setup
function setupEasterEggs() {
    // Logo sunglasses easter egg
    const logo = document.getElementById('logo-easter-egg');
    let clickCount = 0;
    
    if (logo) {
        logo.addEventListener('click', () => {
            clickCount++;
            if (clickCount >= 5) {
                logo.classList.toggle('sunglasses');
                showToast('🕶️ Cool logo activated!');
                clickCount = 0;
            }
        });
    }
    
    // Random syllabus generator easter egg
    const syllabusBtn = createEasterEggButton('Generate Random Syllabus', generateRandomSyllabus);
    document.body.appendChild(syllabusBtn);
}

// Create easter egg button
function createEasterEggButton(text, callback) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = 'easter-egg-btn';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--gradient-secondary);
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 25px;
        font-size: 12px;
        cursor: pointer;
        z-index: 1000;
        opacity: 0.7;
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', callback);
    button.addEventListener('mouseenter', () => {
        button.style.opacity = '1';
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.opacity = '0.7';
        button.style.transform = 'scale(1)';
    });
    
    return button;
}

// Random Syllabus Generator
function generateRandomSyllabus() {
    const subjects = [
        'Advanced Netflix Binge-Watching',
        'Strategic Napping Techniques',
        'Meme Creation & Analysis',
        'Tea Science & Optimization',
        'Procrastination Management',
        'Social Media Scrolling Efficiency',
        'Pizza Ordering Algorithms',
        'Weekend Planning Theory',
        'Deadline Avoidance Strategies',
        'Coffee-to-Productivity Ratios'
    ];
    
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    showToast(`📚 Today's Subject: ${randomSubject}`);
}

// Konami Code Setup
function setupKonamiCode() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateDiscoMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

// Disco Mode Activation
function activateDiscoMode() {
    showToast('🎉 DISCO MODE ACTIVATED!');
    
    // Create confetti
    createConfetti();
    
    // Flash colors
    const body = document.body;
    const originalFilter = body.style.filter;
    
    let colorIndex = 0;
    const colors = ['hue-rotate(0deg)', 'hue-rotate(60deg)', 'hue-rotate(120deg)', 'hue-rotate(180deg)', 'hue-rotate(240deg)', 'hue-rotate(300deg)'];
    
    const discoInterval = setInterval(() => {
        body.style.filter = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 200);
    
    // Stop disco mode after 5 seconds
    setTimeout(() => {
        clearInterval(discoInterval);
        body.style.filter = originalFilter;
        showToast('🎵 Disco mode ended!');
    }, 5000);
}

// Create Confetti Effect
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#20E3B2', '#8B5CF6', '#667eea', '#764ba2'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// Counter Animations
function setupCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);
            
            counter.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                counter.textContent = target;
            }
        };
        
        requestAnimationFrame(animate);
    };
    
    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Exam Countdown (Always shows 00:00:00)
function setupExamCountdown() {
    const countdownDisplay = document.getElementById('countdown-display');
    
    if (countdownDisplay) {
        // Always show time's up
        countdownDisplay.textContent = '00:00:00';
        
        // Add blinking effect
        setInterval(() => {
            countdownDisplay.style.opacity = countdownDisplay.style.opacity === '0.5' ? '1' : '0.5';
        }, 1000);
    }
}

// Newsletter Form
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-btn');
    
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                showToast('📧 Thanks for subscribing! You\'ll get our weekly memes!');
                newsletterInput.value = '';
            } else {
                showToast('❌ Please enter a valid email address!');
            }
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Event Calendar Setup
function setupEventCalendar() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('click', () => {
            const eventTitle = card.querySelector('h3').textContent;
            const eventTime = card.querySelector('.event-time').textContent;
            
            showModal(`
                <h3>${eventTitle}</h3>
                <p><strong>Time:</strong> ${eventTime}</p>
                <p>More details coming soon! Stay tuned for updates.</p>
                <p><em>Note: This is a parody event. Please don't show up expecting real classes! 😄</em></p>
            `);
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Toast Notification System
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(32, 227, 178, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: 500;
        z-index: 10000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Modal System
function showModal(content) {
    // Remove existing modal
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        border-radius: 16px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: var(--shadow-glass);
        transform: scale(0.9);
        transition: transform 0.3s ease;
        color: var(--text-primary);
    `;
    
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        background: none;
        border: none;
        font-size: 20px;
        color: var(--text-muted);
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
    `;
    
    closeButton.addEventListener('click', closeModal);
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.background = 'rgba(255, 255, 255, 0.1)';
        closeButton.style.color = 'var(--text-primary)';
    });
    
    modalContent.innerHTML = content;
    modalContent.style.position = 'relative';
    modalContent.appendChild(closeButton);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Animate in
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 50);
    
    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
    
    function closeModal() {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'scale(0.9)';
        setTimeout(() => {
            modalOverlay.remove();
        }, 300);
    }
}

// Typing Animation for Text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Random Quote Generator for Additional Fun
function getRandomQuote() {
    const quotes = [
        "Education is important, but big biceps are importanter. - NUET Philosophy",
        "I don't always study, but when I do, I prefer tea. - Most Interesting Student",
        "Procrastination is like a credit card: it's a lot of fun until you get the bill. - NUET Wisdom",
        "The only time SUCCESS comes before WORK is in the dictionary. - And on NUET's website",
        "I haven't failed. I've just found 10,000 ways that won't work. - Every NUET Student"
    ];
    
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Add random quote to footer periodically
setInterval(() => {
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom && Math.random() < 0.3) { // 30% chance every 30 seconds
        const originalText = footerBottom.innerHTML;
        footerBottom.innerHTML = getRandomQuote();
        
        setTimeout(() => {
            footerBottom.innerHTML = originalText;
        }, 5000);
    }
}, 30000);

// Performance optimizations
const debouncedResize = debounce(() => {
    // Handle resize events
    console.log('Window resized');
}, 250);

const throttledScroll = throttle(() => {
    // Handle scroll events efficiently
}, 16);

window.addEventListener('resize', debouncedResize);
window.addEventListener('scroll', throttledScroll);

// Console Easter Egg
console.log(`
🎓 Welcome to NUET Developer Console! 🎓

Available Easter Eggs:
- Click the NUET logo 5 times for sunglasses
- Try the Konami Code: ↑↑↓↓←→←→BA
- Check out the Random Syllabus Generator button

Fun Commands:
- showToast("Your message") - Show a toast notification
- getRandomQuote() - Get a random NUET quote
- generateRandomSyllabus() - Generate a random course
- activateDiscoMode() - Party time!

Remember: NUET is a parody project. Don't actually drop out! 😄
`);

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-in-card {
        opacity: 0;
        transform: translateY(20px);
        animation: cardFadeIn 0.6s ease forwards;
    }
    
    @keyframes cardFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .toast {
        animation: toastSlide 0.3s ease;
    }
    
    @keyframes toastSlide {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);
