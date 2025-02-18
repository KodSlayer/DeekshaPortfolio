// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Home Section Animations
gsap.from("#home .animate-fade-in", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

gsap.from("#home .animate-fade-in-delay", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.out"
});

// Navbar Animation
gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

// About Section Animations
gsap.from("#about h2", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out"
});

gsap.from("#about p", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%"
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
});

// Animate skill bars
gsap.from(".skill-bar .h-2 > div", {
    scrollTrigger: {
        trigger: ".skill-bar",
        start: "top 80%"
    },
    width: "0%",
    duration: 1.5,
    ease: "power4.out",
    stagger: 0.2
});

// Projects Section Animations
gsap.from("#projects h2", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out"
});

gsap.from("#projects .group", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power4.out"
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Button Handlers for Navigation
const viewMoreAbout = document.querySelector('.viewMoreAbout');
const viewAllProjects = document.querySelector('.viewAllProjects');

// Function to handle page transitions
function pageTransition(url) {
    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#2563EB';
    overlay.style.transform = 'scaleX(0)';
    overlay.style.transformOrigin = 'left';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);

    // Animate overlay
    gsap.to(overlay, {
        scaleX: 1,
        duration: 0.5,
        ease: "power4.inOut",
        onComplete: () => {
            window.location.href = url;
        }
    });
}

// Initialize page transition handlers
if (viewMoreAbout) {
    viewMoreAbout.addEventListener('click', (e) => {
        e.preventDefault();
        pageTransition('/about.html');
    });
}

if (viewAllProjects) {
    viewAllProjects.addEventListener('click', (e) => {
        e.preventDefault();
        pageTransition('/projects.html');
    });
}

// Handle mobile menu
const mobileMenuButton = document.querySelector('[data-mobile-menu]');
const mobileMenu = document.querySelector('[data-mobile-menu-items]');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Handle scroll events
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// Initialize smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';