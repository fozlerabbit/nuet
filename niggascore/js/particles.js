/* ============================================
   PARTICLE BACKGROUND SYSTEM
   Floating particles with animation
   ============================================ */

class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = this.getParticleCount();
        this.mouse = { x: null, y: null, radius: 150 };
        
        this.init();
    }
    
    getParticleCount() {
        // Reduce particles on mobile for performance
        if (window.innerWidth < 768) return 30;
        if (window.innerWidth < 1024) return 50;
        return 80;
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.animate();
        
        // Event listeners
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('mouseout', () => this.handleMouseOut());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Recreate particles on resize
        const newCount = this.getParticleCount();
        if (newCount !== this.particleCount) {
            this.particleCount = newCount;
            this.createParticles();
        }
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas));
        }
    }
    
    handleMouseMove(e) {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
    }
    
    handleMouseOut() {
        this.mouse.x = null;
        this.mouse.y = null;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(particle => {
            particle.update(this.mouse);
            particle.draw(this.ctx);
        });
        
        // Draw connections between nearby particles
        this.connectParticles();
        
        requestAnimationFrame(() => this.animate());
    }
    
    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.3;
                    this.ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = this.getRandomColor();
        this.opacity = Math.random() * 0.5 + 0.3;
        this.twinkle = Math.random() * Math.PI * 2;
    }
    
    getRandomColor() {
        const colors = [
            '99, 102, 241',   // purple
            '236, 72, 153',   // pink
            '20, 184, 166',   // teal
            '248, 250, 252'   // white
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    update(mouse) {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around screen
        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
        
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                const angle = Math.atan2(dy, dx);
                this.x += Math.cos(angle) * force * 2;
                this.y += Math.sin(angle) * force * 2;
            }
        }
        
        // Twinkle effect
        this.twinkle += 0.02;
    }
    
    draw(ctx) {
        const twinkleOpacity = (Math.sin(this.twinkle) + 1) / 2 * 0.3 + this.opacity;
        
        ctx.fillStyle = `rgba(${this.color}, ${twinkleOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, ${twinkleOpacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// Initialize particle system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
});