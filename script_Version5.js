// ========================================
// GLOBAL VARIABLES
// ========================================

const PASSWORD = 'love'; // Change this to your special word
let giftOpenCount = 0;

// Base URL for GitHub images (replace with your repo)
const GITHUB_REPO = 'tinyfeett15-hash/birthday-gift-for-john'; // Change this!
const IMAGE_BASE_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/images`;

// ========================================
// PASSWORD PROTECTION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordBtn = document.getElementById('passwordBtn');
    
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    passwordBtn.addEventListener('click', checkPassword);
    passwordInput.focus();
});

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const enteredPassword = passwordInput.value.toLowerCase().trim();
    
    if (enteredPassword === PASSWORD.toLowerCase()) {
        document.getElementById('passwordScreen').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        
        triggerConfetti();
        setupGiftBoxes();
    } else {
        const container = document.querySelector('.password-container');
        container.style.animation = 'none';
        setTimeout(() => {
            container.style.animation = 'shake 0.5s ease';
        }, 10);
        
        passwordInput.value = '';
        passwordInput.focus();
        alert('❌ Wrong password! Try again.');
    }
}

// ========================================
// GIFT BOX SETUP
// ========================================

function setupGiftBoxes() {
    const giftBoxes = document.querySelectorAll('.gift-box');
    
    giftBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const giftNumber = this.dataset.gift;
            openGift(giftNumber);
            triggerConfetti();
        });
    });
}

function openGift(giftNumber) {
    const modal = document.getElementById('giftModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = '';
    
    switch(parseInt(giftNumber)) {
        case 1:
            modalBody.innerHTML = createBirthdayMessage();
            break;
        case 2:
            modalBody.innerHTML = createPhotoGallery();
            break;
        case 3:
            modalBody.innerHTML = createMusicPlayer();
            break;
        case 4:
            modalBody.innerHTML = createSecretMessage();
            break;
        case 5:
            modalBody.innerHTML = createGitHubSurprise();
            break;
        case 6:
            modalBody.innerHTML = createCelebration();
            break;
    }
    
    modal.classList.add('show');
    setupModalClose();
    giftOpenCount++;
}

// ========================================
// GIFT CONTENT CREATORS
// ========================================

function createBirthdayMessage() {
    return `
        <h2>💌 Happy Birthday My Love! 💌</h2>
        <div class="birthday-message">
            <p>
                Today is YOUR day, and I wanted to create something special just for you.
                You mean the world to me, and I'm so grateful to celebrate your birthday with you.
            </p>
            <p>
                You light up my world in ways I never thought possible. 
                Your smile, your laugh, your kindness – everything about you makes me the happiest person alive.
            </p>
            <p>
                This year, I wish for you to achieve all your dreams, to smile even more, 
                and to always remember how incredibly loved and appreciated you are.
            </p>
            <p>
                Thank you for being the most amazing partner. 
                Here's to another year of creating beautiful memories together.
            </p>
            <p style="margin-top: 30px; font-size: 1.3rem; font-weight: bold; color: #ff6b9d;">
                I love you so much! 💕 Happy Birthday! 🎂
            </p>
        </div>
    `;
}

/**
 * Photo gallery using GitHub-hosted images
 */
function createPhotoGallery() {
    return `
        <h2>📸 Our Precious Moments Together 📸</h2>
        <p>Every moment with you is a treasure. Here are some of my favorites:</p>
        
        <div class="photo-container">
            <img src="${IMAGE_BASE_URL}/photo1.jpg" 
                 alt="Our romantic park moment" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23999%22%3EImage not loaded%3C/text%3E%3C/svg%3E'"
                 style="margin-bottom: 15px; width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <p style="font-size: 0.9rem; color: #999; margin-top: 10px; font-style: italic;">
                ✨ Under the golden light, with you by my side 💕
            </p>
        </div>
        
        <div class="photo-container">
            <img src="${IMAGE_BASE_URL}/photo2.jpg" 
                 alt="Adventure in nature"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23999%22%3EImage not loaded%3C/text%3E%3C/svg%3E'"
                 style="margin-bottom: 15px; width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <p style="font-size: 0.9rem; color: #999; margin-top: 10px; font-style: italic;">
                🌍 Exploring the world with my favorite person
            </p>
        </div>
        
        <div class="photo-container">
            <img src="${IMAGE_BASE_URL}/photo3.jpg" 
                 alt="Fun night out"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23999%22%3EImage not loaded%3C/text%3E%3C/svg%3E'"
                 style="margin-bottom: 15px; width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <p style="font-size: 0.9rem; color: #999; margin-top: 10px; font-style: italic;">
                🎉 Your smile makes every moment special
            </p>
        </div>
        
        <div class="photo-container">
            <img src="${IMAGE_BASE_URL}/photo4.jpg" 
                 alt="Shopping mall selfie"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23999%22%3EImage not loaded%3C/text%3E%3C/svg%3E'"
                 style="margin-bottom: 15px; width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <p style="font-size: 0.9rem; color: #999; margin-top: 10px; font-style: italic;">
                😊 So grateful for these everyday moments
            </p>
        </div>
        
        <div class="photo-container">
            <img src="${IMAGE_BASE_URL}/photo5.jpg" 
                 alt="Cozy time together"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23999%22%3EImage not loaded%3C/text%3E%3C/svg%3E'"
                 style="margin-bottom: 15px; width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <p style="font-size: 0.9rem; color: #999; margin-top: 10px; font-style: italic;">
                🥰 Comfort and peace with you
            </p>
        </div>
        
        <p style="margin-top: 30px; font-style: italic; color: #666; text-align: center; font-size: 1.05rem;">
            These are just some of the countless moments that make me fall in love with you more and more every day. 💝
        </p>
    `;
}

function createMusicPlayer() {
    return `
        <h2>🎵 Our Song 🎵</h2>
        <div class="music-player">
            <h3>🎶 Something Special for You 🎶</h3>
            <p>Click play and let this be our moment together:</p>
            <audio controls style="width: 100%; margin: 20px 0;">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <p style="margin-top: 20px; font-size: 0.95rem;">
                💫 Music is the language of love, and this is for you. 
                Play it and think of all the special moments we've shared. 💫
            </p>
        </div>
    `;
}

function createSecretMessage() {
    return `
        <h2>🔐 A Secret Just For You 🔐</h2>
        <div class="secret-message">
            <p style="margin-bottom: 20px; font-size: 1.1rem;">✨ You've unlocked something special! ✨</p>
            <p style="font-size: 1.15rem; letter-spacing: 1.5px; line-height: 2;">
                "I love you not just for who you are,<br>
                but for who I am when I'm with you.<br><br>
                You're my today and all of my tomorrows." 💕
            </p>
            <p style="margin-top: 25px; font-size: 0.95rem; font-weight: normal;">
                🌟 This message was written with all my love, hidden just for you! 🌟
            </p>
        </div>
    `;
}

function createGitHubSurprise() {
    return `
        <h2>💻 One More Thing... 💻</h2>
        <p>
            I made this special birthday gift website for you! 🚀
        </p>
        <p style="margin: 20px 0;">
            This entire page was created with love, just to make your birthday extra special.
            Every gift, every message, every animation – it's all from my heart to yours.
        </p>
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 15px; color: white; margin: 20px 0;">
            <p style="font-size: 1.05rem; margin-bottom: 15px;">
                💝 Fun Fact: This website was created specifically for you using code and creativity!
            </p>
        </div>
        <p style="margin-top: 20px; font-size: 0.9rem; color: #999;">
            But more importantly, remember: You're the best gift I could ever have. 🎁
        </p>
    `;
}

function createCelebration() {
    return `
        <h2>🎊 Celebration! 🎊</h2>
        <div class="celebration-container">
            <div class="emoji-container">
                🎉 🎈 🎁 🎂 🎊 💕
            </div>
            <div class="celebration-text">
                You've opened ${giftOpenCount} gift${giftOpenCount !== 1 ? 's' : ''}!
            </div>
            <p style="font-size: 1.1rem; margin: 20px 0;">
                You're experiencing the joy of love! 🎯
            </p>
            <p style="font-style: italic; color: #999; font-size: 1rem;">
                ${giftOpenCount === 6 
                    ? '🌟 You\'ve opened everything! I hope this made your birthday extra special. Happy Birthday My Love! 💕' 
                    : 'Try opening the other gifts to see all the wonderful surprises waiting for you! 🌈'}
            </p>
        </div>
    `;
}

// ========================================
// MODAL MANAGEMENT
// ========================================

function setupModalClose() {
    const modal = document.getElementById('giftModal');
    const closeBtn = document.querySelector('.close-btn');
    
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
}

// ========================================
// CONFETTI ANIMATION
// ========================================

function triggerConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 5 + 5,
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
            color: getRandomColor()
        });
    }
    
    let animationFrameId;
    const startTime = Date.now();
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const elapsedTime = Date.now() - startTime;
        const duration = 2000;
        const progress = Math.min(elapsedTime / duration, 1);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.2;
            particle.rotation += 6;
            
            const opacity = 1 - progress;
            
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.translate(particle.x, particle.y);
            ctx.rotate((particle.rotation * Math.PI) / 180);
            ctx.fillStyle = particle.color;
            ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            ctx.restore();
        });
        
        if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}

function getRandomColor() {
    const colors = [
        '#ff6b9d',
        '#c06c84',
        '#ffd166',
        '#667eea',
        '#764ba2',
        '#f8b195',
        '#f67676',
        '#aa96da',
        '#fcbad3',
        '#a8d8ea'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

window.addEventListener('resize', function() {
    const canvas = document.getElementById('confettiCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});