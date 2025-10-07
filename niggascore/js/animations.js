/* ============================================
   ANIMATION CONTROLLERS
   3D transforms and interactive animations
   ============================================ */

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typewriter effect for navbar title
function typewriterEffect(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Number counter animation
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const range = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + range * easeOut);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end;
        }
    }
    
    requestAnimationFrame(update);
}

// Progress circle animation
function animateProgressCircle(percentage) {
    const circle = document.getElementById('scoreCircle');
    if (!circle) return;
    
    const circumference = 565.48; // 2 * PI * radius (90)
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)';
    circle.style.strokeDashoffset = offset;
}

// Ripple effect on button click
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple effect to all buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, .option-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
});

// Card tilt effect on mouse move
function initCardTilt() {
    const cards = document.querySelectorAll('.question-card, .welcome-container');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
}

function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
}

// Smooth scroll to element
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Fade in on scroll observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Modal animations
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Escape key closes modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => modal.classList.remove('show'));
        document.body.style.overflow = 'auto';
    }
});

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for title
    const navTitle = document.getElementById('navbarTitle');
    if (navTitle) {
        const originalText = navTitle.textContent;
        typewriterEffect(navTitle, originalText, 80);
    }
    
    // Initialize card tilt
    initCardTilt();
    
    // Observe elements for fade-in
    const fadeElements = document.querySelectorAll('.scroll-animate');
    fadeElements.forEach(el => fadeInObserver.observe(el));
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
        });
    }
});

// Credits modal
document.addEventListener('DOMContentLoaded', () => {
    const creditsBtn = document.getElementById('creditsBtn');
    const modalClose = document.getElementById('modalClose');
    const creditsModal = document.getElementById('creditsModal');
    
    if (creditsBtn) {
        creditsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('creditsModal');
        });
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            closeModal('creditsModal');
        });
    }
    
    if (creditsModal) {
        creditsModal.addEventListener('click', (e) => {
            if (e.target === creditsModal) {
                closeModal('creditsModal');
            }
        });
    }
});

// Export functions for use in other scripts
window.animateCounter = animateCounter;
window.animateProgressCircle = animateProgressCircle;
window.smoothScrollTo = smoothScrollTo;