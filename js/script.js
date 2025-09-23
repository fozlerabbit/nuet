// Main JavaScript for NUET Website
// Author: NUET Dev Team
// Version: 1.0.0

/* ===============================
   GLOBAL VARIABLES & CONSTANTS
   =============================== */

const departments = [
    { name: "Nivil Engineering", emoji: "🏗️", specialization: "Building bridges to nowhere" },
    { name: "Nechanical Engineering", emoji: "⚙️", specialization: "Making things that definitely work" },
    { name: "Nigatrical Engineering", emoji: "⚡", specialization: "Shocking discoveries daily" },
    { name: "Nigatronics & Communication", emoji: "📡", specialization: "Lost signals found here" },
    { name: "Nigaputer Science & Engineering", emoji: "💻", specialization: "404: Degree not found" },
    { name: "Nhemical Engineering", emoji: "🧪", specialization: "Explosive chemistry lessons" },
    { name: "Nigadustrial & Production", emoji: "🏭", specialization: "Mass producing confusion" },
    { name: "Aerospace Osama Bin Laden Engineering", emoji: "🚀", specialization: "Sky-high ambitions" },
    { name: "Automobile Engineering", emoji: "🚗", specialization: "Driving innovation backwards" },
    { name: "Narine Engineering", emoji: "🚢", specialization: "Sailing through problems" },
    { name: "Petroleum Engineering", emoji: "🛢️", specialization: "Fuel for thought" },
    { name: "Mining Engineering", emoji: "⛏️", specialization: "Digging deep for answers" },
    { name: "Cotton Materials Engineering", emoji: "🧵", specialization: "Soft solutions to hard problems" },
    { name: "Niga Nuclear Engineering", emoji: "☢️", specialization: "Radioactive personalities welcome" },
    { name: "Environmental Engineering", emoji: "🌱", specialization: "Green thinking, blue collar work" },
    { name: "Food Engineering", emoji: "🍔", specialization: "Cooking up engineering solutions" },
    { name: "Nextile Engineering", emoji: "🧶", specialization: "Weaving dreams into reality" },
    { name: "Niomedical Engineering", emoji: "🏥", specialization: "Fixing humans, one bug at a time" },
    { name: "Noftware Engineering", emoji: "💾", specialization: "Turning coffee into code" },
    { name: "Information Technology", emoji: "📊", specialization: "Have you tried turning it off and on?" },
    { name: "Niga Artificial Intelligence", emoji: "🤖", specialization: "Teaching machines to think like humans" },
    { name: "Robotics & Automation", emoji: "🦾", specialization: "Replacing humans since 2020" },
    { name: "Nechatronics Engineering", emoji: "🔧", specialization: "Mechanical meets electrical" },
    { name: "Nanotechnology Engineering", emoji: "🔬", specialization: "Think small, dream big" },
    { name: "Renewable Energy Engineering", emoji: "🌞", specialization: "Powering the future" },
    { name: "Irony Engineering", emoji: "😏", specialization: "Professionally sarcastic solutions" },
    { name: "Slavery Engineering", emoji: "⛓️", specialization: "Breaking chains since 1865" },
    { name: "Cotton Yarn Manufacturing", emoji: "🧶", specialization: "Spinning tales and fibers" },
    { name: "Water and Soil Engineering", emoji: "💧", specialization: "Keeping it clean and green" },
    { name: "12 inch Engineering", emoji: "📏", specialization: "Size matters in engineering" },
    { name: "Khamba Engineering", emoji: "🏛️", specialization: "Standing tall since forever" },
    { name: "10% Engineering", emoji: "📊", specialization: "We only use 10% of our brain" },
    { name: "Parrot and Crow Rescue", emoji: "🦜", specialization: "Teaching birds to fly again" }
];

const halls = [
    { name: "Bob Marley Hall", description: "Where every little thing is gonna be alright", features: ["Reggae Lounge", "Meditation Garden", "Herb Studies"] },
    { name: "2Pac Shakur Hall", description: "All Eyes On Me residence hall", features: ["Recording Studio", "Poetry Corner", "Thug Mansion"] },
    { name: "Vinícius Jr Hall", description: "Brazilian flair meets academic excellence", features: ["Football Field", "Samba Classes", "Beach Volleyball"] },
    { name: "Pelé Hall", description: "The beautiful game meets beautiful minds", features: ["Champions Lounge", "Goal Gallery", "Soccer Academy"] },
    { name: "Malcolm X Hall", description: "By any means necessary educational facility", features: ["Freedom Library", "Debate Hall", "Revolutionary Café"] },
    { name: "Nelson Mandela Hall", description: "Long walk to freedom starts here", features: ["Peace Garden", "Unity Center", "Democracy Lab"] },
    { name: "IShowSpeed Hall", description: "Where speed meets streaming excellence", features: ["Gaming Arena", "Streaming Studio", "Energy Drinks Bar"] },
    { name: "Will Smith Hall", description: "Fresh Prince of Academia", features: ["Comedy Club", "Acting Studio", "Slap-Free Zone"] }
];

const testimonials = [
    { name: "Jahid Rahman", quote: "NUET taught me that sleep is optional, but coffee is mandatory! ☕", avatar: "😴", year: "2023" },
    { name: "Fatima Ahmed", quote: "I came for engineering, stayed for the memes. Best decision ever! 😂", avatar: "😂", year: "2022" },
    { name: "Rakib Hassan", quote: "My degree says engineer, but my heart says comedian. Thanks NUET! 🎭", avatar: "🎭", year: "2024" }
];

const admins = [
    {
        name: "Mahdi Shihab",
        title: "Founder 👑",
        description: "The mastermind behind NUET's legendary reputation. Known for making impossible things happen with a Drake meme and a crown.",
        email: "mahdi@nuet.world",
        avatar: "https://raw.githubusercontent.com/fozlerabbit/nuet/refs/heads/main/images%20(1).jpeg",
        memeStyle: "Drake with crown"
    },
    {
        name: "Al Arafat Rohman",
        title: "Vice Chancellor 🥤",
        description: "Shocked Pikachu energy with tea-sipping wisdom. Makes all academic decisions while maintaining perfect surprise face.",
        email: "arafat@nuet.world", 
        avatar: "https://raw.githubusercontent.com/fozlerabbit/nuet/refs/heads/main/images%20(1).jpeg",
        memeStyle: "Shocked Pikachu sipping tea"
    },
    {
        name: "Cherin Raiyan",
        title: "Proctor 🔥", 
        description: "Disaster Girl vibes with campus handbook authority. Everything's fine while chaos reigns supreme.",
        email: "cherin@nuet.world",
        avatar: "https://raw.githubusercontent.com/fozlerabbit/nuet/refs/heads/main/images%20(1).jpeg",
        memeStyle: "Disaster Girl holding campus handbook"
    }
];

const events = [
    { date: "2025-03-15", title: "Annual Meme Olympiad 2025", description: "May the best meme win! 🏆", type: "competition" },
    { date: "2025-03-22", title: "Tea vs Coffee Debate", description: "The ultimate showdown ☕", type: "debate" },
    { date: "2025-03-28", title: "Procrastination Workshop", description: "Learn to delay like a pro 🕐", type: "workshop" },
    { date: "2025-04-05", title: "Midnight Coding Marathon", description: "Code till you drop 💻", type: "hackathon" },
    { date: "2025-04-12", title: "WiFi Password Hunt", description: "Find the hidden network 📶", type: "treasure-hunt" },
    { date: "2025-04-20", title: "420 Engineering Day", description: "Blaze it with knowledge 🌿", type: "celebration" },
   
    { date: "2025-09-15", title: "Annual Meme Olympiad 2025", description: "May the best meme win! 🏆", type: "competition" },
    { date: "2025-09-22", title: "Tea vs Coffee Debate", description: "The ultimate showdown ☕", type: "debate" },
    { date: "2025-09-28", title: "Procrastination Workshop", description: "Learn to delay like a pro 🕐", type: "workshop" },
    { date: "2025-09-05", title: "Midnight Coding Marathon", description: "Code till you drop 💻", type: "hackathon" },
    { date: "2025-09-12", title: "WiFi Password Hunt", description: "Find the hidden network 📶", type: "treasure-hunt" },
    { date: "2025-09-20", title: "420 Engineering Day", description: "Blaze it with knowledge 🌿", type: "celebration" }
];

const fakeNews = [
    "Breaking: NUET students discover new way to attend classes while sleeping 😴",
    "Research shows 99% of engineering problems can be solved with duct tape 🔧",
    "Campus cat elected as new Dean of Purr-ing Sciences 🐱",
    "NUET cafeteria finally serves edible food, students in shock 🍽️",
    "Local student passes exam without cramming, professors investigating 📚",
    "WiFi password changed to 'password123', chaos ensues 📶",
    "Engineering building elevator breaks, students learn to use stairs 🏃‍♂️",
    "Professor arrives on time, students check if it's opposite day 🕐"
];

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let discoMode = false;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

/* ===============================
   INITIALIZATION & EVENT LISTENERS
   =============================== */

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    startLoadingAnimation();
});

function initializeWebsite() {
    console.log('🎓 Welcome to NUET - Where Degrees Are Optional, Humour Is Mandatory!');
    
    // Load all sections
    loadDepartments();
    loadHalls();
    loadTestimonials();
    loadAdmins();
    loadEvents();
    generateCalendar();
    startNewsticker();
    
    // Setup animations
    setupScrollAnimations();
    setupLetterGlowAnimation();
    
    setTimeout(() => {
        hideLoadingScreen();
    }, 3000);
}

function setupEventListeners() {
    // Navigation
    setupNavigation();
    
    // Konami Code
    document.addEventListener('keydown', handleKonamiCode);
    
    // Logo Easter Egg
    const logo = document.getElementById('easter-logo');
    if (logo) {
        logo.addEventListener('click', logoEasterEgg);
    }
    
    // Window events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Close modal on outside click
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    });
}

/* ===============================
   LOADING SCREEN & ANIMATIONS
   =============================== */

function startLoadingAnimation() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.querySelector('.loading-progress');
    
    if (progressBar) {
        progressBar.style.animation = 'loadProgress 3s ease-in-out forwards';
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

function setupLetterGlowAnimation() {
    const nuetText = document.getElementById('nuet-text');
    if (nuetText) {
        const text = nuetText.textContent;
        nuetText.innerHTML = '';
        nuetText.classList.add('glow-effect');
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.className = 'letter';
            span.style.setProperty('--i', i);
            nuetText.appendChild(span);
        }
    }
}

/* ===============================
   NAVIGATION & MENU
   =============================== */

function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
                
                // Close mobile menu
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
            }
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = section.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function handleScroll() {
    const navbar = document.getElementById('navbar');
    const scrolled = window.scrollY > 100;
    
    if (navbar) {
        navbar.classList.toggle('scrolled', scrolled);
    }
    
    // Animate stats on scroll
    animateStatsOnScroll();
    
    // Update active nav link
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navHeight = document.querySelector('.navbar').offsetHeight;
        
        if (window.scrollY >= (sectionTop - navHeight - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

/* ===============================
   CONTENT LOADING FUNCTIONS
   =============================== */

function loadDepartments() {
    const grid = document.getElementById('departments-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    departments.forEach((dept, index) => {
        const card = document.createElement('div');
        card.className = 'department-card glass-card';
        card.setAttribute('data-emoji', dept.emoji);
        
        if (index % 5 === 0) {
            card.classList.add('special-dept');
        }
        
        card.innerHTML = `
            <div class="department-name">${dept.name}</div>
            <div class="department-specialization">${dept.specialization}</div>
            <div class="dept-specializations">
                <div class="specialization-item">🎓 Advanced Procrastination Techniques</div>
                <div class="specialization-item">☕ Professional Coffee Consumption</div>
                <div class="specialization-item">😴 Mastery of Power Napping</div>
                <div class="specialization-item">🧠 Creative Problem Avoidance</div>
            </div>
        `;
        
        card.addEventListener('click', () => showDepartmentDetails(dept));
        grid.appendChild(card);
    });
}

function loadHalls() {
    const grid = document.getElementById('halls-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    halls.forEach(hall => {
        const card = document.createElement('div');
        card.className = 'hall-card glass-card';
        
        card.innerHTML = `
            <div class="hall-name">${hall.name}</div>
            <div class="hall-description">${hall.description}</div>
            <div class="hall-features">
                ${hall.features.map(feature => `<span class="hall-feature">${feature}</span>`).join('')}
            </div>
        `;
        
        card.addEventListener('click', () => showHallDetails(hall));
        grid.appendChild(card);
    });
}

function loadTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card glass-card';
        
        card.innerHTML = `
            <div class="testimonial-avatar">${testimonial.avatar}</div>
            <div class="testimonial-quote">"${testimonial.quote}"</div>
            <div class="testimonial-author">- ${testimonial.name} (Class of ${testimonial.year})</div>
        `;
        
        grid.appendChild(card);
    });
}

function loadAdmins() {
    const grid = document.getElementById('admin-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    admins.forEach(admin => {
        const card = document.createElement('div');
        card.className = 'admin-card glass-card';
        
        card.innerHTML = `
            <div class="admin-avatar">
                <img src="${admin.avatar}" alt="${admin.name} avatar at NUET" loading="lazy">
                <div class="admin-meme-overlay">${admin.memeStyle}</div>
            </div>
            <div class="admin-info">
                <h3 class="admin-name">${admin.name}</h3>
                <div class="admin-title">${admin.title}</div>
                <p class="admin-description">${admin.description}</p>
                <a href="mailto:${admin.email}" class="admin-email btn btn-secondary">
                    Contact ${admin.name.split(' ')[0]} 📧
                </a>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function loadEvents() {
    const eventList = document.getElementById('event-list');
    if (!eventList) return;
    
    eventList.innerHTML = '';
    
    const upcomingEvents = events
        .filter(event => new Date(event.date) > new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);
    
    upcomingEvents.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
        
        eventItem.innerHTML = `
            <div class="event-date">${formattedDate}</div>
            <div class="event-info">
                <div class="event-title">${event.title}</div>
                <div class="event-description">${event.description}</div>
                <div class="event-type">${event.type}</div>
            </div>
        `;
        
        eventItem.addEventListener('click', () => showEventDetails(event));
        eventList.appendChild(eventItem);
    });
}

/* ===============================
   CALENDAR FUNCTIONALITY
   =============================== */

function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const monthDisplay = document.getElementById('current-month');
    
    if (!calendar || !monthDisplay) return;
    
    const date = new Date(currentYear, currentMonth);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    monthDisplay.textContent = date.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
    });
    
    calendar.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });
    
    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        calendar.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Check if there's an event on this day
        const dayDate = new Date(currentYear, currentMonth, day);
        const dayEvents = events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === dayDate.toDateString();
        });
        
        if (dayEvents.length > 0) {
            dayElement.classList.add('has-event');
            dayElement.addEventListener('click', () => showDayEvents(dayEvents));
        }
        
        if (dayDate.toDateString() === new Date().toDateString()) {
            dayElement.classList.add('today');
        }
        
        calendar.appendChild(dayElement);
    }
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
}

/* ===============================
   STATS ANIMATION
   =============================== */

function animateStatsOnScroll() {
    const statsSection = document.getElementById('stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (!statsSection || statNumbers.length === 0) return;
    
    const sectionTop = statsSection.offsetTop;
    const sectionHeight = statsSection.clientHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    
    if (scrollTop + windowHeight > sectionTop + sectionHeight / 2) {
        statNumbers.forEach(statNumber => {
            if (!statNumber.classList.contains('animated')) {
                animateNumber(statNumber);
                statNumber.classList.add('animated');
            }
        });
    }
}

function animateNumber(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

/* ===============================
   NEWS TICKER
   =============================== */

function startNewsticker() {
    const tickerText = document.getElementById('ticker-text');
    if (!tickerText) return;
    
    let currentNewsIndex = 0;
    
    setInterval(() => {
        currentNewsIndex = (currentNewsIndex + 1) % fakeNews.length;
        tickerText.textContent = fakeNews.join(' | ');
    }, 5000);
}

/* ===============================
   EASTER EGGS & FUN FEATURES
   =============================== */

function handleKonamiCode(event) {
    konamiCode.push(event.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateDiscoMode();
        konamiCode = [];
    }
}

function activateDiscoMode() {
    if (discoMode) return;
    
    discoMode = true;
    const discoElement = document.getElementById('disco-mode');
    
    if (discoElement) {
        discoElement.style.display = 'flex';
        
        // Create confetti
        createConfetti();
        
        // Play disco animation
        document.body.style.animation = 'rainbow 0.5s infinite';
        
        setTimeout(() => {
            deactivateDiscoMode();
        }, 10000);
    }
}

function deactivateDiscoMode() {
    discoMode = false;
    const discoElement = document.getElementById('disco-mode');
    
    if (discoElement) {
        discoElement.style.display = 'none';
    }
    
    document.body.style.animation = '';
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    if (!confettiContainer) return;
    
    confettiContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confettiContainer.appendChild(confetti);
    }
}

function logoEasterEgg() {
    const logo = document.getElementById('easter-logo');
    if (logo) {
        logo.classList.add('sunglasses');
        
        setTimeout(() => {
            logo.classList.remove('sunglasses');
        }, 2000);
    }
}

/* ===============================
   MODAL & POPUP FUNCTIONS
   =============================== */

function showModal(title, content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalBody) {
        modalBody.innerHTML = `
            <h2>${title}</h2>
            ${content}
        `;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function showDepartmentDetails(dept) {
    const content = `
        <div class="dept-detail">
            <div class="dept-icon">${dept.emoji}</div>
            <p><strong>Specialization:</strong> ${dept.specialization}</p>
            <h3>Course Highlights:</h3>
            <ul>
                <li>Advanced Procrastination Techniques</li>
                <li>Professional Coffee Consumption</li>
                <li>Mastery of Power Napping</li>
                <li>Creative Problem Avoidance</li>
                <li>Last-Minute Genius Development</li>
            </ul>
            <p><strong>Career Prospects:</strong> Guaranteed confusion and occasional breakthrough moments!</p>
        </div>
    `;
    showModal(dept.name, content);
}

function showHallDetails(hall) {
    const content = `
        <div class="hall-detail">
            <p><strong>Description:</strong> ${hall.description}</p>
            <h3>Facilities:</h3>
            <ul>
                ${hall.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <p><strong>Capacity:</strong> 200 students (or 300 if they're good friends)</p>
            <p><strong>Special Features:</strong> 24/7 WiFi, Unlimited Tea/Coffee, Meme Gallery</p>
        </div>
    `;
    showModal(hall.name, content);
}

function showEventDetails(event) {
    const content = `
        <div class="event-detail">
            <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Type:</strong> ${event.type}</p>
            <p><strong>Description:</strong> ${event.description}</p>
            <p><strong>Location:</strong> NUET Main Campus</p>
            <p><strong>Registration:</strong> Just show up with enthusiasm! 🎉</p>
        </div>
    `;
    showModal(event.title, content);
}

function showDayEvents(dayEvents) {
    const content = dayEvents.map(event => `
        <div class="day-event">
            <h4>${event.title}</h4>
            <p>${event.description}</p>
            <small>${event.type}</small>
        </div>
    `).join('');
    showModal('Events for this day', content);
}

/* ===============================
   FUN EXTRAS FUNCTIONS
   =============================== */

function showSyllabusGenerator() {
    const courses = [
        "Advanced Netflix Binge-Watching (3 credits)",
        "Professional Procrastination (4 credits)",
        "Introduction to Overthinking (2 credits)",
        "Quantum Confusion Theory (5 credits)",
        "Applied Sarcasm Engineering (3 credits)",
        "Meme Studies and Analysis (2 credits)",
        "Coffee Dependency Management (1 credit)",
        "Social Media Scrolling Optimization (2 credits)",
        "Crisis Management Through Panic (4 credits)",
        "The Art of Looking Busy (3 credits)"
    ];
    
    const randomCourses = [];
    for (let i = 0; i < 5; i++) {
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];
        if (!randomCourses.includes(randomCourse)) {
            randomCourses.push(randomCourse);
        }
    }
    
    const content = `
        <div class="syllabus-generator">
            <h3>Your Random NUET Syllabus:</h3>
            <ul>
                ${randomCourses.map(course => `<li>${course}</li>`).join('')}
            </ul>
            <p><strong>Total Credits:</strong> ${randomCourses.length * 3} (give or take)</p>
            <button class="btn btn-primary" onclick="showSyllabusGenerator()">Generate New Syllabus 🎲</button>
        </div>
    `;
    showModal('Random Syllabus Generator', content);
}

function showMiniGame() {
    const content = `
        <div class="mini-game">
            <h3>Catch the Textbook! 📚</h3>
            <p>Don't let knowledge escape!</p>
            <div class="game-area" id="game-area">
                <div class="game-score">Score: <span id="game-score">0</span></div>
                <div class="game-instructions">Click the falling textbooks!</div>
            </div>
            <button class="btn btn-primary" onclick="startMiniGame()">Start Game 🎮</button>
        </div>
    `;
    showModal('Mini Game', content);
}

function startMiniGame() {
    const gameArea = document.getElementById('game-area');
    const scoreElement = document.getElementById('game-score');
    
    if (!gameArea || !scoreElement) return;
    
    let score = 0;
    let gameRunning = true;
    
    gameArea.innerHTML = `
        <div class="game-score">Score: <span id="game-score">${score}</span></div>
        <div class="game-canvas" id="game-canvas" style="position: relative; width: 100%; height: 300px; background: var(--glass-bg); border-radius: 10px; overflow: hidden;"></div>
    `;
    
    const canvas = document.getElementById('game-canvas');
    
    function createTextbook() {
        if (!gameRunning) return;
        
        const textbook = document.createElement('div');
        textbook.className = 'falling-textbook';
        textbook.innerHTML = '📚';
        textbook.style.cssText = `
            position: absolute;
            top: -30px;
            left: ${Math.random() * (canvas.offsetWidth - 30)}px;
            font-size: 24px;
            cursor: pointer;
            transition: top 3s linear;
            z-index: 1000;
        `;
        
        textbook.addEventListener('click', () => {
            score += 10;
            document.getElementById('game-score').textContent = score;
            textbook.remove();
        });
        
        canvas.appendChild(textbook);
        
        // Animate textbook falling
        setTimeout(() => {
            textbook.style.top = canvas.offsetHeight + 'px';
        }, 100);
        
        // Remove textbook after animation
        setTimeout(() => {
            if (textbook.parentNode) {
                textbook.remove();
            }
        }, 3100);
    }
    
    // Create textbooks every 800ms
    const gameInterval = setInterval(createTextbook, 800);
    
    // End game after 15 seconds
    setTimeout(() => {
        gameRunning = false;
        clearInterval(gameInterval);
        
        canvas.innerHTML = `
            <div style="text-align: center; padding: 50px; color: var(--text-primary);">
                <h3>Game Over! 🎉</h3>
                <p>Final Score: ${score}</p>
                <p>${score > 50 ? 'Excellent knowledge catching!' : score > 20 ? 'Not bad, keep practicing!' : 'You let too much knowledge escape! 😅'}</p>
                <button class="btn btn-primary" onclick="startMiniGame()">Play Again 🔄</button>
            </div>
        `;
    }, 15000);
}

function showMemeGenerator() {
    const memeTemplates = [
        { name: "Drake", top: "Studying normally", bottom: "Studying at NUET" },
        { name: "Distracted Boyfriend", top: "Regular University", bottom: "NUET's Meme Culture" },
        { name: "This is Fine", top: "Everything's fine", bottom: "During NUET Finals" },
        { name: "Expanding Brain", levels: ["Study", "Cram", "Pray", "NUET Student"] }
    ];
    
    const randomMeme = memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
    
    const content = `
        <div class="meme-generator">
            <h3>NUET Meme Generator 😂</h3>
            <div class="meme-preview">
                <div class="meme-template ${randomMeme.name.toLowerCase().replace(' ', '-')}">
                    <div class="meme-text top-text">${randomMeme.top || randomMeme.levels?.[0] || 'TOP TEXT'}</div>
                    <div class="meme-text bottom-text">${randomMeme.bottom || randomMeme.levels?.[3] || 'BOTTOM TEXT'}</div>
                </div>
            </div>
            <div class="meme-controls">
                <input type="text" id="meme-top" placeholder="Top text" value="${randomMeme.top || ''}">
                <input type="text" id="meme-bottom" placeholder="Bottom text" value="${randomMeme.bottom || ''}">
                <button class="btn btn-primary" onclick="generateNewMeme()">Generate New Meme 🎲</button>
                <button class="btn btn-secondary" onclick="downloadMeme()">Download Meme 💾</button>
            </div>
        </div>
    `;
    showModal('Meme Generator', content);
}

function generateNewMeme() {
    showMemeGenerator();
}

function downloadMeme() {
    alert('Meme saved to your heart! ❤️ (Feature coming soon in NUET v2.0)');
}

function showLeaderboard() {
    const leaderboardData = [
        { name: "Jahid 'The Procrastinator' Rahman", title: "Master of Last-Minute Genius", score: "∞" },
        { name: "Fatima 'Meme Queen' Ahmed", title: "Legendary Meme Creator", score: "404" },
        { name: "Rakib 'Coffee Addict' Hassan", title: "Caffeine Dependency Champion", score: "69420" },
        { name: "Aisha 'Never Sleeps' Khan", title: "Insomnia Engineering Expert", score: "24/7" },
        { name: "Omar 'WiFi Hunter' Ali", title: "Network Password Detective", score: "WPA2" }
    ];
    
    const content = `
        <div class="leaderboard">
            <h3>🏆 NUET Student Leaderboard</h3>
            <p>Rankings based on absolutely scientific methods!</p>
            <div class="leaderboard-list">
                ${leaderboardData.map((student, index) => `
                    <div class="leaderboard-item">
                        <div class="rank">${index + 1}</div>
                        <div class="student-info">
                            <div class="student-name">${student.name}</div>
                            <div class="student-title">${student.title}</div>
                        </div>
                        <div class="student-score">${student.score}</div>
                    </div>
                `).join('')}
            </div>
            <p class="leaderboard-note">*Rankings updated whenever we remember to do it</p>
        </div>
    `;
    showModal('Student Leaderboard', content);
}

function showCampusMap() {
    const content = `
        <div class="campus-map">
            <h3>🗺️ Interactive Campus Map</h3>
            <div class="map-container">
                <div class="map-location dept" style="top: 20%; left: 30%;" data-tooltip="Nivil Engineering">
                    <div class="map-tooltip">Nivil Engineering - Building bridges to nowhere</div>
                </div>
                <div class="map-location hall" style="top: 40%; left: 60%;" data-tooltip="Bob Marley Hall">
                    <div class="map-tooltip">Bob Marley Hall - Don't worry, be happy</div>
                </div>
                <div class="map-location facility" style="top: 60%; left: 20%;" data-tooltip="Meme Research Center">
                    <div class="map-tooltip">Meme Research Center - Where humor meets science</div>
                </div>
                <div class="map-location dept" style="top: 30%; left: 80%;" data-tooltip="Nigaputer Science">
                    <div class="map-tooltip">Computer Science - 404: Building not found</div>
                </div>
                <div class="map-location hall" style="top: 70%; left: 70%;" data-tooltip="2Pac Hall">
                    <div class="map-tooltip">2Pac Hall - All eyes on me</div>
                </div>
                <div class="map-location facility" style="top: 50%; left: 40%;" data-tooltip="Central Cafeteria">
                    <div class="map-tooltip">Central Cafeteria - Questionable food, great vibes</div>
                </div>
            </div>
            <div class="map-legend">
                <div class="legend-item"><span class="legend-color dept"></span> Departments</div>
                <div class="legend-item"><span class="legend-color hall"></span> Halls</div>
                <div class="legend-item"><span class="legend-color facility"></span> Facilities</div>
            </div>
        </div>
    `;
    showModal('Campus Map', content);
}

/* ===============================
   ADMISSION FUNCTIONS
   =============================== */

function showApplicationForm() {
    const content = `
        <div class="application-form">
            <h3>🎓 NUET Application Form</h3>
            <p>Fill out this comprehensive form to begin your journey at NUET!</p>
            
            <form class="admission-form" onsubmit="submitApplication(event)">
                <div class="form-group">
                    <label for="fullName">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" required placeholder="Enter your full name">
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="your.email@example.com">
                </div>
                
                <div class="form-group">
                    <label for="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+880 1234567890">
                </div>
                
                <div class="form-group">
                    <label for="department">Preferred Department *</label>
                    <select id="department" name="department" required>
                        <option value="">Select a department</option>
                        <option value="nivil">Nivil Engineering</option>
                        <option value="nechanical">Nechanical Engineering</option>
                        <option value="nigaputer">Nigaputer Science & Engineering</option>
                        <option value="irony">Irony Engineering</option>
                        <option value="meme">Meme Studies and Analysis</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="gpa">Current GPA</label>
                    <input type="number" id="gpa" name="gpa" min="0" max="5" step="0.01" placeholder="3.14">
                </div>
                
                <div class="form-group">
                    <label for="coffeeIntake">Daily Coffee Consumption *</label>
                    <select id="coffeeIntake" name="coffeeIntake" required>
                        <option value="">Select your level</option>
                        <option value="beginner">0-2 cups (Beginner)</option>
                        <option value="intermediate">3-5 cups (Intermediate)</option>
                        <option value="advanced">6-10 cups (Advanced)</option>
                        <option value="expert">11+ cups (Expert Level)</option>
                        <option value="godlike">I AM COFFEE (God Mode)</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="memeKnowledge">Rate your meme knowledge (1-10) *</label>
                    <input type="range" id="memeKnowledge" name="memeKnowledge" min="1" max="10" value="5" required>
                    <div class="range-value">Level: <span id="memeLevel">5</span></div>
                </div>
                
                <div class="form-group">
                    <label for="sleepSkills">Power Napping Skills</label>
                    <textarea id="sleepSkills" name="sleepSkills" rows="3" placeholder="Describe your ability to sleep in uncomfortable positions..."></textarea>
                </div>
                
                <div class="form-group">
                    <label for="motivation">Why do you want to join NUET? *</label>
                    <textarea id="motivation" name="motivation" rows="4" required placeholder="Tell us why NUET is the perfect place for your academic journey..."></textarea>
                </div>
                
                <div class="form-group checkbox-group">
                    <label>
                        <input type="checkbox" required> I understand that degrees at NUET are optional, but humor is mandatory *
                    </label>
                </div>
                
                <div class="form-group checkbox-group">
                    <label>
                        <input type="checkbox" required> I agree to participate in the daily meme creation activities *
                    </label>
                </div>
                
                <div class="form-buttons">
                    <button type="submit" class="btn btn-primary">Submit Application 🚀</button>
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                </div>
            </form>
        </div>
    `;
    showModal('Application Form', content);
    
    // Add event listener for range slider
    const memeRange = document.getElementById('memeKnowledge');
    const memeLevel = document.getElementById('memeLevel');
    
    if (memeRange && memeLevel) {
        memeRange.addEventListener('input', function() {
            memeLevel.textContent = this.value;
        });
    }
}

function submitApplication(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('fullName');
    
    // Simulate processing
    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.innerHTML = 'Processing... ⏳';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert(`🎉 Congratulations ${name}!\n\nYour application has been submitted successfully!\n\nApplication ID: NUET-2025-${Math.floor(Math.random() * 10000)}\n\nWhat happens next:\n• You'll receive a confirmation email\n• Meme portfolio review (if applicable)\n• Caffeine tolerance test scheduling\n• Procrastination interview (sometime next week)\n\nRemember: Everyone gets in eventually! 😄`);
        closeModal();
    }, 2000);
}

function showVirtualTour() {
    const tourStops = [
        {
            title: "🏛️ Main Campus Entrance",
            description: "Welcome to NUET! Notice our motto carved in stone: 'Where Degrees Are Optional, Humour Is Mandatory'"
        },
        {
            title: "📚 Central Library",
            description: "Home to thousands of books, most of which are used as laptop stands. Free WiFi and unlimited coffee!"
        },
        {
            title: "🔬 Meme Research Lab",
            description: "Our cutting-edge facility where students create and analyze viral content. PhD in Memeology available!"
        },
        {
            title: "☕ Coffee Engineering Department",
            description: "The heart of campus! Advanced brewing techniques and caffeine dependency research conducted here."
        },
        {
            title: "🏠 Bob Marley Hall",
            description: "Most chill residence hall on campus. Every little thing is gonna be alright here!"
        },
        {
            title: "🎯 Procrastination Observatory",
            description: "Where we study the art of delaying tasks. Tours available... sometime next week."
        }
    ];
    
    let currentStop = 0;
    
    function showTourStop(index) {
        const stop = tourStops[index];
        return `
            <div class="virtual-tour">
                <h3>🚶‍♂️ Virtual Campus Tour</h3>
                <div class="tour-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${((index + 1) / tourStops.length) * 100}%"></div>
                    </div>
                    <p>Stop ${index + 1} of ${tourStops.length}</p>
                </div>
                
                <div class="tour-stop">
                    <div class="tour-image">🏛️</div>
                    <h4>${stop.title}</h4>
                    <p>${stop.description}</p>
                </div>
                
                <div class="tour-controls">
                    ${index > 0 ? '<button class="btn btn-secondary" onclick="showPrevStop()">← Previous</button>' : ''}
                    ${index < tourStops.length - 1 ? 
                        '<button class="btn btn-primary" onclick="showNextStop()">Next →</button>' : 
                        '<button class="btn btn-primary" onclick="finishTour()">Finish Tour 🎉</button>'
                    }
                </div>
            </div>
        `;
    }
    
    const content = showTourStop(0);
    showModal('Virtual Tour', content);
    
    // Add tour navigation to global scope
    window.showNextStop = () => {
        if (currentStop < tourStops.length - 1) {
            currentStop++;
            document.getElementById('modal-body').innerHTML = showTourStop(currentStop);
        }
    };
    
    window.showPrevStop = () => {
        if (currentStop > 0) {
            currentStop--;
            document.getElementById('modal-body').innerHTML = showTourStop(currentStop);
        }
    };
    
    window.finishTour = () => {
        alert('🎉 Tour complete! Thanks for visiting NUET virtually!\n\nDid you know?\n• Our WiFi password is "password123"\n• The cafeteria serves questionable but entertaining food\n• Every bathroom has motivational memes\n• Students get free stress balls (they\'re just tennis balls)\n\nReady to apply? 😄');
        closeModal();
    };
}

function showFAQ() {
    const faqs = [
        {
            question: "Is NUET a real university?",
            answer: "As real as your chances of graduating without procrastinating! We're legally authorized to provide entertainment disguised as education."
        },
        {
            question: "What makes NUET different from other universities?",
            answer: "We're the only university where sleeping in class is considered 'meditation practice' and meme creation counts as research credits."
        },
        {
            question: "Do I really need to drink coffee to survive at NUET?",
            answer: "Coffee is not mandatory, but neither is staying awake during lectures. We also accept tea, energy drinks, and pure willpower."
        },
        {
            question: "What's the job placement rate?",
            answer: "100% of our graduates get jobs! (Disclaimer: This includes any job, anywhere, at any time after graduation, including self-employment as professional procrastinators.)"
        },
        {
            question: "Is the WiFi really that bad?",
            answer: "Our WiFi is like our students' motivation - it comes and goes. But hey, it builds character! And problem-solving skills!"
        },
        {
            question: "Can I change my major after enrollment?",
            answer: "Of course! We encourage exploration. Many students start in engineering and end up majoring in Advanced Netflix Studies."
        },
        {
            question: "What's the campus food like?",
            answer: "Our cafeteria food is... an adventure! Think of it as edible chemistry experiments. The chai is legendary though!"
        },
        {
            question: "Do you have sports facilities?",
            answer: "We have a world-class napping facility (aka the library), competitive procrastination leagues, and Olympic-level WiFi password guessing competitions."
        }
    ];
    
    const content = `
        <div class="faq-section">
            <h3>❓ Frequently Asked Questions</h3>
            <p>Got questions? We've got answers! (Some of them might even be helpful)</p>
            
            <div class="faq-list">
                ${faqs.map((faq, index) => `
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(${index})">
                            <span>${faq.question}</span>
                            <span class="faq-toggle" id="toggle-${index}">+</span>
                        </div>
                        <div class="faq-answer" id="answer-${index}" style="display: none;">
                            <p>${faq.answer}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="faq-contact">
                <p>Still have questions? Contact our admission team:</p>
                <p>📧 admissions@nuet.world | 📞 +880 1731746828</p>
                <p><small>*Response time may vary depending on our coffee supply</small></p>
            </div>
        </div>
    `;
    showModal('FAQ', content);
    
    // Add FAQ toggle function
    window.toggleFAQ = (index) => {
        const answer = document.getElementById(`answer-${index}`);
        const toggle = document.getElementById(`toggle-${index}`);
        
        if (answer.style.display === 'none') {
            answer.style.display = 'block';
            toggle.textContent = '-';
        } else {
            answer.style.display = 'none';
            toggle.textContent = '+';
        }
    };
}

/* ===============================
   UTILITY FUNCTIONS
   =============================== */

function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        alert(`Thanks for subscribing with ${email}! 📧\n\nYou'll now receive our weekly newsletter "The NUET Nugget" featuring:\n• Latest campus memes\n• Procrastination tips\n• Coffee recommendations\n• WiFi password updates`);
        event.target.reset();
    }
}

function handleResize() {
    // Recalculate positions for responsive elements
    if (window.innerWidth <= 768) {
        // Mobile adjustments
        const newsTickerContainer = document.querySelector('.news-ticker');
        if (newsTickerContainer && !document.querySelector('.mobile-ticker')) {
            // Create mobile ticker at bottom
            const mobileTicker = document.createElement('div');
            mobileTicker.className = 'mobile-ticker';
            mobileTicker.innerHTML = '<div class="ticker-content" id="mobile-ticker-text"></div>';
            document.body.appendChild(mobileTicker);
            
            // Copy ticker content
            const mobileTickerText = document.getElementById('mobile-ticker-text');
            if (mobileTickerText) {
                mobileTickerText.textContent = fakeNews.join(' | ');
            }
        }
    } else {
        // Remove mobile ticker on desktop
        const mobileTicker = document.querySelector('.mobile-ticker');
        if (mobileTicker) {
            mobileTicker.remove();
        }
    }
}

function setupScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll('.glass-card, .section-title');
    elementsToAnimate.forEach(el => observer.observe(el));
}

/* ===============================
   CSS ANIMATIONS (Added via JavaScript)
   =============================== */

function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
        
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            animation: confettiFall 3s linear infinite;
        }
        
        @keyframes confettiFall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        .disco-mode {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255,0,150,0.3) 0%, rgba(0,255,255,0.3) 100%);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            animation: discoFlash 0.5s infinite alternate;
        }
        
        @keyframes discoFlash {
            0% { background: radial-gradient(circle, rgba(255,0,150,0.3) 0%, rgba(0,255,255,0.3) 100%); }
            100% { background: radial-gradient(circle, rgba(0,255,255,0.3) 0%, rgba(255,0,150,0.3) 100%); }
        }
        
        .disco-ball {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: conic-gradient(from 0deg, #ff0080, #00ff80, #8000ff, #ff0080);
            animation: spin 1s linear infinite;
        }
        
        .falling-textbook {
            user-select: none;
            transition: transform 0.1s ease;
        }
        
        .falling-textbook:hover {
            transform: scale(1.2);
        }
        
        .meme-template {
            width: 300px;
            height: 200px;
            background: var(--glass-bg);
            border: 2px solid var(--glass-border);
            border-radius: 10px;
            position: relative;
            margin: 1rem auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
        }
        
        .meme-text {
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 0.5rem;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 5px;
        }
        
        .leaderboard-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            margin: 0.5rem 0;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        
        .leaderboard-item:hover {
            transform: translateX(10px);
            border-color: var(--accent-purple);
        }
        
        .rank {
            width: 40px;
            height: 40px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 1rem;
        }
        
        .student-info {
            flex: 1;
        }
        
        .student-name {
            font-weight: bold;
            color: var(--text-primary);
        }
        
        .student-title {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
        
        .student-score {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--accent-purple);
        }
        
        .map-legend {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .legend-color {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
        
        .legend-color.dept { background: var(--accent-purple); }
        .legend-color.hall { background: var(--accent-teal); }
        .legend-color.facility { background: var(--accent-pink); }
    `;
    
    document.head.appendChild(style);
}

/* ===============================
   INITIALIZE EVERYTHING
   =============================== */

// Add dynamic styles when DOM loads
document.addEventListener('DOMContentLoaded', addDynamicStyles);

// Console Easter Egg
console.log(`
    ███╗   ██╗██╗   ██╗███████╗████████╗
    ████╗  ██║██║   ██║██╔════╝╚══██╔══╝
    ██╔██╗ ██║██║   ██║█████╗     ██║   
    ██║╚██╗██║██║   ██║██╔══╝     ██║   
    ██║ ╚████║╚██████╔╝███████╗   ██║   
    ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝   ╚═╝   
    
    🎓 Welcome to NUET - Where Degrees Are Optional, Humour Is Mandatory!
    
    Try the Konami Code: ↑↑↓↓←→←→BA
    Click the logo for a surprise!
    
    Made with ❤️ and lots of coffee by the NUET Dev Team
`);

// Export functions for global access
window.NUET = {
    scrollToSection,
    showSyllabusGenerator,
    showMiniGame,
    showMemeGenerator,
    showLeaderboard,
    showCampusMap,
    subscribeNewsletter,
    prevMonth,
    nextMonth,
    closeModal

};
