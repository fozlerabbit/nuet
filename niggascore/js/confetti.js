/* ============================================
   CONFETTI CELEBRATION SYSTEM
   3D falling confetti for quiz completion
   ============================================ */

class ConfettiSystem {
    constructor(container) {
        this.container = container;
        this.confettiPieces = [];
        this.colors = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#10b981', '#8b5cf6'];
    }
    
    createConfetti(count = 100) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';
                
                // Random properties
                const left = Math.random() * 100;
                const animationDuration = Math.random() * 3 + 2; // 2-5 seconds
                const size = Math.random() * 10 + 5; // 5-15px
                const rotation = Math.random() * 360;
                const color = this.colors[Math.floor(Math.random() * this.colors.length)];
                const delay = Math.random() * 0.5;
                
                // Apply styles
                confetti.style.cssText = `
                    position: absolute;
                    left: ${left}%;
                    top: -20px;
                    width: ${size}px;
                    height: ${size}px;
                    background: ${color};
                    opacity: 0.8;
                    animation: confettiFall ${animationDuration}s linear ${delay}s forwards,
                               confettiSpin ${animationDuration * 0.5}s linear infinite;
                    transform: rotate(${rotation}deg);
                    border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                    z-index: 1000;
                `;
                
                this.container.appendChild(confetti);
                this.confettiPieces.push(confetti);
                
                // Remove after animation
                setTimeout(() => {
                    confetti.remove();
                }, (animationDuration + delay) * 1000);
            }, i * 20); // Stagger creation
        }
    }
    
    clear() {
        this.confettiPieces.forEach(piece => piece.remove());
        this.confettiPieces = [];
    }
}

// Global function to trigger confetti
window.triggerConfetti = function() {
    const container = document.getElementById('confettiContainer');
    if (container) {
        const confetti = new ConfettiSystem(container);
        confetti.createConfetti(150);
    }
};