// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});
// Navbar scroll effect with smoother animation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav-animated');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Highlight active nav item based on scroll position
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active-nav');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active-nav');
        }
    });
});
// Animate sections on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.querySelectorAll('h2, h3, p, .skill-card, .primary-btn, .grid > div'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        }
    });
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('button');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('md:hidden', 'bg-white', 'shadow-lg', 'rounded-lg', 'absolute', 'top-20', 'right-4', 'p-4', 'hidden');
mobileMenu.innerHTML = `
    <div class="flex flex-col space-y-4">
        <a href="#home" class="nav-link font-medium hover:text-primary-500 primary-text">Home</a>
        <a href="about.html" class="nav-link text-gray-600 hover:text-primary-500">About</a>
        <a href="ProfessionalExperience.html" class="nav-link text-gray-600 hover:text-primary-500">Experience</a>
        <a href="projects.html" class="nav-link text-gray-600 hover:text-primary-500">Projects</a>
        <a href="achievements.html" class="nav-link text-gray-600 hover:text-primary-500">Achievements</a>
        <a href="contact.html" class="nav-link text-gray-600 hover:text-primary-500">Contact</a>
    </div>
`;
document.querySelector('nav > div').appendChild(mobileMenu);

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Hide mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});