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
let lastScrollY = window.scrollY;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        gsap.to(nav, { y: -100, duration: 0.3, ease: "power4.out" });
    } else {
        gsap.to(nav, { y: 0, duration: 0.3, ease: "power4.out" });
    }
    lastScrollY = window.scrollY;
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
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Handle mobile menu
const mobileMenuButton = document.querySelector('[data-mobile-menu]');
const mobileMenu = document.querySelector('[data-mobile-menu-items]');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Initialize smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Let me know if you want me to tweak anything or add new features! 🚀
