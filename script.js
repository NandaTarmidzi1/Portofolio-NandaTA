const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
});

const hoverElements = document.querySelectorAll('a, .btn, .skill-item');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.borderColor = 'var(--accent-color)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.borderColor = 'var(--main-color-glow)';
    });
});

const typed = new Typed('.multiple-text', {
    strings: ['Cyber Security Specialist', 'Penetration Tester', 'Security Researcher', 'Tech Enthusiast'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

const revealElements = document.querySelectorAll('.reveal');
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};
const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.15 });
revealElements.forEach(el => revealObserver.observe(el));

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = 'none';
    }

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

const contactForm = document.querySelector('.contact form');
const successMsg = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Mengirim...';
    
    setTimeout(() => {
        successMsg.style.display = 'block'; 
        submitBtn.innerText = originalText; 
        this.reset(); 
        
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }, 1500);
});


particlesJS("particles-js", {
    "particles": {
        "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": ["#10b981", "#f59e0b"] },
        "shape": { "type": "circle" },
        "opacity": { 
            "value": 0.5, 
            "random": true, 
            "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } 
        },
        "size": { 
            "value": 3, 
            "random": true, 
            "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } 
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#10b981",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 180, "line_linked": { "opacity": 1 } },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});