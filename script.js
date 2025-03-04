/**
 * Main Script File
 * This file handles all interactive functionality for Deeksha's personal website
 */

// Initialize both vanilla JS and jQuery functionality when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeVanillaJS();
    
    // If jQuery is available, initialize jQuery-dependent components
    if (typeof jQuery !== 'undefined') {
      $(document).ready(function() {
        initializeSlickSlider();
      });
    } else {
      console.warn('jQuery not loaded. Slick slider functionality will not work.');
    }
  });
  
  /**
   * Initialize all vanilla JavaScript functionality
   */
  function initializeVanillaJS() {
    initializeGSAP();
    initializeNavbar();
    initializeMobileMenu();
    initializeSmoothScrolling();
  }
  
  /**
   * Initialize GSAP animations if available
   */
  function initializeGSAP() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Animate sections on scroll with GSAP
      gsap.utils.toArray('section').forEach(section => {
        gsap.from(section.querySelectorAll('h2, h3, p, .skill-card, .primary-btn, .grid > div'), {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        });
      });
    }
  }
  
  /**
   * Initialize navbar functionality
   */
  function initializeNavbar() {
    // Navigation scroll effect
    const navbar = document.querySelector('nav');
    const navAnimated = document.querySelector('.nav-animated');
    
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('shadow-md', window.scrollY > 20);
      });
    }
    
    if (navAnimated) {
      window.addEventListener('scroll', () => {
        navAnimated.classList.toggle('scrolled', window.scrollY > 50);
      });
    }
    
    // Highlight active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 100;
          const sectionId = section.getAttribute('id');
          const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
          
          if (navLink) {
            const isActive = scrollY > sectionTop && scrollY <= sectionTop + sectionHeight;
            navLink.classList.toggle('active-nav', isActive);
          }
        });
      });
    }
  }
  
  /**
   * Initialize mobile menu functionality
   */
  function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector('nav button');
    
    if (!mobileMenuButton) return;
    
    // Check if mobile menu already exists
    let mobileMenu = document.querySelector('.mobile-menu');
    
    if (!mobileMenu) {
      // Create mobile menu if it doesn't exist
      mobileMenu = document.createElement('div');
      mobileMenu.classList.add('mobile-menu', 'md:hidden', 'bg-white', 'shadow-lg', 'rounded-lg', 'absolute', 'top-20', 'right-4', 'p-4', 'hidden', 'z-50');
      mobileMenu.innerHTML = `
        <div class="flex flex-col space-y-4">
          <a href="#home" class="nav-link font-medium hover:text-primary primary-text">Home</a>
          <a href="about.html" class="nav-link text-gray-600 hover:text-primary">About</a>
          <a href="portfolio.html" class="nav-link text-gray-600 hover:text-primary">Experience</a>
          <a href="contact.html" class="nav-link text-gray-600 hover:text-primary">Contact</a>
        </div>
      `;
      
      const navContainer = document.querySelector('nav > div');
      if (navContainer) {
        navContainer.appendChild(mobileMenu);
      }
    }
    
    // Toggle mobile menu on button click
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
  
  /**
   * Initialize smooth scrolling for anchor links
   */
  function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    if (anchorLinks.length === 0) return;
    
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Avoid scrolling for empty links or just "#"
        if (targetId === '#' || targetId === '') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Hide mobile menu if open
          const mobileMenu = document.querySelector('.mobile-menu');
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      });
    });
  }
  
  /**
   * Initialize Slick slider (jQuery-dependent)
   */
  function initializeSlickSlider() {
    // Only initialize if slider elements exist
    if ($('.work-slider').length === 0) return;
    
    // Initialize the work slider with center mode
    $('.work-slider').slick({
      centerMode: true,
      centerPadding: '15%',
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      dots: true,
      prevArrow: $('.work-slider-prev'),
      nextArrow: $('.work-slider-next'),
      appendDots: $('.work-slider-dots'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '10%'
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '5%'
          }
        }
      ]
    });
  
    // Enhance slider functionality
    enhanceSliderFunctionality();
  }
  
  /**
   * Add additional functionality to the slick slider
   */
  function enhanceSliderFunctionality() {
    // Pause autoplay on hover
    $('.work-slider').on('mouseenter', function() {
      $(this).slick('slickPause');
    });
  
    // Resume autoplay on mouseleave
    $('.work-slider').on('mouseleave', function() {
      $(this).slick('slickPlay');
    });
  
    // Fix height issue after slide change
    $('.work-slider').on('afterChange', function() {
      $(this).find('.slick-slide').height('auto');
    });
  
    // Add placeholder for missing images
    $('.work-slide img').on('error', function() {
      $(this).attr('src', 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22100%25%22 height%3D%22100%25%22 viewBox%3D%220 0 800 600%22%3E%3Crect fill%3D%22%23f0f0f0%22 width%3D%22800%22 height%3D%22600%22%2F%3E%3Ctext fill%3D%22%23999%22 font-family%3D%22Arial%2C sans-serif%22 font-size%3D%2236%22 text-anchor%3D%22middle%22 x%3D%22400%22 y%3D%22300%22%3EImage Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E');
    });
  }