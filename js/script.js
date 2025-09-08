// ===== GLOBAL VARIABLES =====
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let konamiSequence = [];
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

// Sample course names for random syllabus generator
const courses = [
    "Advanced Netflix Binge-Watching",
    "Strategic Procrastination Theory",
    "Meme Creation and Analysis",
    "Professional Napping Techniques",
    "Social Media Scrolling Optimization",
    "Coffee Break Management",
    "Deadline Avoidance Strategies",
    "Weekend Planning Science",
    "YouTube Algorithm Psychology",
    "Advanced Excuse Generation",
    "Pizza Ordering Logistics",
    "Wi-Fi Troubleshooting Mastery",
    "Smartphone Addiction Studies",
    "Indoor Plant Psychology",
    "Snack Management Systems",
    "Remote Work Pajama Fashion",
    "Video Game Achievement Theory",
    "Spotify Playlist Curation",
    "Amazon Cart Abandonment",
    "Tuesday Survival Techniques"
];

const credits = [1, 2, 3, 4, 5];

// Event data for calendar
const events = {
    15: {
        title: "Annual Meme Olympiad 2025",
        description: "Competitive meme creation contest judged by our AI overlords. Prizes include premium WiFi access and a year's supply of energy drinks.",
        location: "Virtual Reality Lab",
        time: "10:00 AM - 6:00 PM"
    },
    22: {
        title: "Procrastination Workshop",
        description: "Learn advanced techniques in deadline avoidance and the art of 'productive procrastination'. Note: This workshop has been postponed indefinitely.",
        location: "TBD (To Be Decided... Eventually)",
        time: "Whenever"
    },
    30: {
        title: "Tea & Biscuit Symposium",
        description: "Scientific discourse on optimal dunking methodologies, tea temperature analysis, and biscuit structural integrity studies.",
        location: "Faculty Lounge",
        time: "3:00 PM - 5:00 PM"
    }
};

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    initializeLoadingScreen();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize calendar
    generateCalendar();
    
    // Initialize counter animations
    initializeCounters();
    
    // Initialize chart animations
    initializeCharts();
    
    // Initialize konami code
    initializeKonamiCode();
    
    // Initialize logo easter egg
    initializeLogoEasterEgg();
});

// ===== LOADING SCREEN =====
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        
        // Remove loading screen from DOM after animation
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 4000);
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Parallax effect for floating blobs
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const blobs = document.querySelectorAll('.floating-blob');
        
        blobs.forEach((blob, index) => {
            const speed = 0.2 + (index * 0.1);
            blob.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Trigger specific animations based on element
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target);
                }
                
                if (entry.target.classList.contains('chart-progress')) {
                    animateChart(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToObserve = document.querySelectorAll(
        '.glass-panel, .department-card, .media-item, .testimonial-card, .stat-item, .chart-progress'
    );
    
    elementsToObserve.forEach(el => observer.observe(el));
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Add CSS for animation classes
    const style = document.createElement('style');
    style.textContent = `
        .glass-panel, .department-card, .media-item, .testimonial-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ===== COUNTER ANIMATIONS =====
function initializeCounters() {
    // This will be called by the intersection observer
}

function animateCounter(element) {
    const counter = element.querySelector('.stat-number');
    if (!counter || counter.dataset.animated) return;
    
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    counter.dataset.animated = 'true';
    
    const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
    }, stepDuration);
}

// ===== CHART ANIMATIONS =====
function initializeCharts() {
    // This will be called by the intersection observer
}

function animateChart(element) {
    if (element.dataset.animated) return;
    
    const percent = element.dataset.percent;
    element.dataset.animated = 'true';
    
    setTimeout(() => {
        element.style.width = percent + '%';
    }, 200);
}

// ===== CALENDAR FUNCTIONALITY =====
function generateCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthElement = document.getElementById('current-month');
    
    if (!calendarGrid || !currentMonthElement) return;
    
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Clear previous calendar
    calendarGrid.innerHTML = '';
    
    // Add day headers
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('calendar-day', 'calendar-header-day');
        dayHeader.textContent = day;
        dayHeader.style.fontWeight = '600';
        dayHeader.style.color = 'var(--text-secondary)';
        dayHeader.style.cursor = 'default';
        calendarGrid.appendChild(dayHeader);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('calendar-day');
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        
        // Check if day has events
        if (events[day]) {
            dayElement.classList.add('has-event');
            dayElement.addEventListener('click', () => showEventModal(day));
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

function changeMonth(direction) {
    currentMonth += direction;
    
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    
    generateCalendar();
}

function showEventModal(day) {
    const modal = document.getElementById('event-modal');
    const modalContent = document.getElementById('event-modal-content');
    const event = events[day];
    
    if (!modal || !modalContent || !event) return;
    
    modalContent.innerHTML = `
        <h2>${event.title}</h2>
        <div style="margin: 1rem 0; padding: 1rem; background: rgba(32, 227, 178, 0.1); border-radius: 10px; border: 1px solid rgba(32, 227, 178, 0.2);">
            <strong>📅 Date:</strong> September ${day}, 2025<br>
            <strong>🕒 Time:</strong> ${event.time}<br>
            <strong>📍 Location:</strong> ${event.location}
        </div>
        <p style="line-height: 1.6; color: var(--text-secondary);">${event.description}</p>
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="closeEventModal()">Close</button>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeEventModal();
        }
    });
}

function closeEventModal() {
    const modal = document.getElementById('event-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ===== UTILITY FUNCTIONS =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===== RANDOM SYLLABUS GENERATOR =====
function generateSyllabus() {
    const output = document.getElementById('syllabus-output');
    if (!output) return;
    
    // Generate 3-5 random courses
    const numCourses = Math.floor(Math.random() * 3) + 3;
    const selectedCourses = [];
    
    for (let i = 0; i < numCourses; i++) {
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];
        const randomCredits = credits[Math.floor(Math.random() * credits.length)];
        
        if (!selectedCourses.some(course => course.name === randomCourse)) {
            selectedCourses.push({
                name: randomCourse,
                credits: randomCredits
            });
        }
    }
    
    let syllabusHTML = '<h4>🎓 Random Semester Syllabus</h4><ul style="margin-top: 1rem;">';
    
    selectedCourses.forEach(course => {
        syllabusHTML += `<li style="margin: 0.5rem 0; padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 5px;">
            <strong>${course.name}</strong> - ${course.credits} credit${course.credits > 1 ? 's' : ''}
        </li>`;
    });
    
    syllabusHTML += '</ul>';
    
    output.innerHTML = syllabusHTML;
    output.style.display = 'block';
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        output.style.display = 'none';
    }, 10000);
}

// ===== NEWSLETTER SUBSCRIPTION =====
function subscribeNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    const messages = [
        "🎉 Welcome to the NUET family! Prepare for weekly meme updates!",
        "✅ Subscription successful! Your first dose of academic humor is on its way!",
        "🚀 You're now part of our exclusive procrastination community!",
        "📧 Newsletter subscription confirmed! May the WiFi be with you!",
        "🎊 Congratulations! You'll never miss another deadline... to procrastinate!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Replace form with success message
    form.innerHTML = `
        <div style="text-align: center; padding: 1rem; background: rgba(32, 227, 178, 0.1); border: 1px solid rgba(32, 227, 178, 0.3); border-radius: 10px;">
            <p style="margin: 0; color: var(--accent-teal);">${randomMessage}</p>
        </div>
    `;
    
    // Reset form after 5 seconds
    setTimeout(() => {
        form.innerHTML = `
            <input type="email" placeholder="Enter your email" required>
            <button type="submit" class="btn btn-primary">Subscribe</button>
        `;
    }, 5000);
}

// ===== LOGO EASTER EGG =====
function initializeLogoEasterEgg() {
    const logo = document.getElementById('nav-logo');
    const sunglasses = document.getElementById('sunglasses');
    
    if (!logo || !sunglasses) return;
    
    let clickCount = 0;
    
    logo.addEventListener('click', () => {
        clickCount++;
        
        if (clickCount >= 3) {
            sunglasses.classList.add('show');
            logo.style.transform = 'rotate(360deg)';
            
            // Add cool effect
            setTimeout(() => {
                sunglasses.classList.remove('show');
                logo.style.transform = 'rotate(0deg)';
                clickCount = 0;
            }, 3000);
        }
    });
}

// ===== KONAMI CODE =====
function initializeKonamiCode() {
    document.addEventListener('keydown', (e) => {
        konamiSequence.push(e.keyCode);
        
        // Keep only the last 10 keys
        if (konamiSequence.length > 10) {
            konamiSequence.shift();
        }
        
        // Check if sequence matches Konami code
        if (konamiSequence.join(',') === konamiCode.join(',')) {
            triggerKonamiEffect();
            konamiSequence = [];
        }
    });
}

function triggerKonamiEffect() {
    // Add disco mode to body
    document.body.classList.add('disco-mode');
    
    // Create confetti effect
    createConfetti();
    
    // Show special message
    const message = document.createElement('div');
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: var(--accent-teal);
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            z-index: 10001;
            font-size: 1.5rem;
            font-weight: bold;
        ">
            🎉 KONAMI CODE ACTIVATED! 🎉<br>
            <small style="color: var(--text-secondary); font-size: 1rem;">You've unlocked the secret disco mode!</small>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Remove effects after 10 seconds
    setTimeout(() => {
        document.body.classList.remove('disco-mode');
        message.remove();
    }, 10000);
}

function createConfetti() {
    const confettiCount = 50;
    const confettiColors = ['#20E3B2', '#8B5CF6', '#3B82F6', '#F59E0B', '#EF4444'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${confettiColors[Math.floor(Math.random() * confettiColors.length)]};
            top: -10px;
            left: ${Math.random() * 100}vw;
            z-index: 10000;
            border-radius: 50%;
            animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    // Add confetti animation if not already added
    if (!document.querySelector('#confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== ADDITIONAL INTERACTIVE FEATURES =====

// Smooth reveal animations for sections
function initializeSmoothReveals() {
    const revealElements = document.querySelectorAll('.glass-panel, .department-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        revealObserver.observe(el);
    });
}

// Initialize additional features after DOM load
document.addEventListener('DOMContentLoaded', () => {
    initializeSmoothReveals();
});

// ===== PERFORMANCE OPTIMIZATIONS =====

// Throttle scroll events
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
    }
}

// Apply throttling to scroll-heavy functions
window.addEventListener('scroll', throttle(() => {
    // Parallax and other scroll effects here
}, 16)); // ~60fps
