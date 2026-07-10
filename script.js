// 1. Երաժշտություն և Սրտիկների Էֆեկտ
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');


let heartInterval;
function startHeartsEffect() {
    heartInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.opacity = Math.random();
        document.body.prepend(heart);
        
        setTimeout(() => { heart.remove(); }, 5000);
    }, 500);
}

// 2. Էլեգանտ Scroll Անիմացիա (Intersection Observer)
const fadeElements = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, { threshold: 0.15 });

fadeElements.forEach(element => appearOnScroll.observe(element));


const weddingDate = new Date('August 8, 2026 09:00:00').getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}, 1000);


function audioAutoplay() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '\u23F8'; 
        startHeartsEffect();
    }
}

window.addEventListener("click", audioAutoplay, { once: true }); 
window.addEventListener("touchstart", audioAutoplay, { once: true }); 


musicBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '\u23F8'; 
        startHeartsEffect();
    } else {
        bgMusic.pause();
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '🎵';
        clearInterval(heartInterval);
    }
}, false);

