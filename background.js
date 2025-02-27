// Configure the background animations
const initBackground = () => {
    // Add simple animation for decorative elements
    const decorElements = document.querySelectorAll('.decorative-circle-light, .decorative-circle-gold');
    decorElements.forEach(elem => {
        elem.style.transition = 'transform 3s ease-in-out';
        setInterval(() => {
            elem.style.transform = elem.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
        }, 3000);
    });
};

// Initialize background effects
document.addEventListener('DOMContentLoaded', initBackground);