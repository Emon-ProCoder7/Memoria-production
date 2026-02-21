// Memoria Production - Main JavaScript
// Handles all interactive features, animations, and effects

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializePortfolio();
    initializeTestimonials();
    initializeServiceSelector();
    initializeScrollEffects();
    initializeContactForm();
});

// Animation initialization using Anime.js
function initializeAnimations() {
    // Typewriter effect for hero headlines
    if (document.querySelector('.hero-title')) {
        new Typed('.hero-title', {
            strings: ['Capturing Life\'s Masterpieces', 'Turning Moments into Memories', 'Your Story, Beautifully Told'],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Animate statistics counters
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        anime({
            targets: stat,
            innerHTML: [0, target],
            duration: 2000,
            delay: 500,
            round: 1,
            easing: 'easeOutExpo'
        });
    });

    // Floating elements animation
    anime({
        targets: '.floating-element',
        translateY: [-10, 10],
        duration: 3000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
}

// Navigation functionality
function initializeNavigation() {
    const nav = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
        });
    }

    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Portfolio gallery functionality
function initializePortfolio() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter items with animation
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    anime({
                        targets: item,
                        opacity: [0, 1],
                        scale: [0.8, 1],
                        duration: 600,
                        easing: 'easeOutExpo'
                    });
                    item.style.display = 'block';
                } else {
                    anime({
                        targets: item,
                        opacity: [1, 0],
                        scale: [1, 0.8],
                        duration: 300,
                        easing: 'easeInExpo',
                        complete: function() {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    });

    // Lightbox functionality
    portfolioItems.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            img.addEventListener('click', function() {
                lightboxImg.src = this.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Testimonials carousel using Splide
function initializeTestimonials() {
    if (document.querySelector('.testimonials-carousel')) {
        new Splide('.testimonials-carousel', {
            type: 'loop',
            perPage: 1,
            perMove: 1,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            gap: '2rem',
            breakpoints: {
                768: {
                    perPage: 1
                }
            }
        }).mount();
    }
}

// Service selector and booking functionality
function initializeServiceSelector() {
    const serviceCards = document.querySelectorAll('.service-card');
    const packageBuilder = document.querySelector('.package-builder');
    const quoteDisplay = document.querySelector('.quote-amount');
    
    let selectedServices = [];
    let basePrice = 0;

    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            const price = parseInt(this.getAttribute('data-price'));
            
            // Toggle selection
            this.classList.toggle('selected');
            
            if (this.classList.contains('selected')) {
                selectedServices.push({service, price});
                basePrice += price;
            } else {
                selectedServices = selectedServices.filter(s => s.service !== service);
                basePrice -= price;
            }
            
            updateQuote();
        });
    });

    function updateQuote() {
        if (quoteDisplay) {
            quoteDisplay.textContent = `$${basePrice.toLocaleString()}`;
        }
    }

    // Date picker functionality
    const datePicker = document.querySelector('.date-picker');
    if (datePicker) {
        // Generate calendar
        generateCalendar();
    }

    function generateCalendar() {
        // Calendar generation logic would go here
        // For now, we'll create a simple date input
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.className = 'form-input';
        if (datePicker) {
            datePicker.appendChild(dateInput);
        }
    }
}

// Scroll effects and parallax
function initializeScrollEffects() {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    const parallaxElements = document.querySelectorAll('.parallax');

    // Intersection Observer for scroll reveals
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0.9, 1],
                    translateY: [20, 0],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    scrollElements.forEach(el => {
        observer.observe(el);
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const formInputs = document.querySelectorAll('.form-input');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            let isValid = true;
            formInputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Simulate form submission
                showNotification('Thank you! We\'ll be in touch within 24 hours.', 'success');
                contactForm.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }

    // Input focus effects
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 300,
        easing: 'easeOutExpo'
    });
    
    // Remove after 5 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            opacity: [1, 0],
            translateY: [0, -20],
            duration: 300,
            easing: 'easeInExpo',
            complete: function() {
                notification.remove();
            }
        });
    }, 5000);
}

// Before/After comparison slider
function initializeComparisonSliders() {
    const sliders = document.querySelectorAll('.comparison-slider');
    
    sliders.forEach(slider => {
        const handle = slider.querySelector('.slider-handle');
        const beforeImg = slider.querySelector('.before-img');
        const afterImg = slider.querySelector('.after-img');
        
        let isDragging = false;
        
        handle.addEventListener('mousedown', startDrag);
        handle.addEventListener('touchstart', startDrag);
        
        function startDrag(e) {
            isDragging = true;
            e.preventDefault();
        }
        
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);
        
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);
        
        function drag(e) {
            if (!isDragging) return;
            
            const rect = slider.getBoundingClientRect();
            const x = (e.clientX || e.touches[0].clientX) - rect.left;
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
            
            handle.style.left = percentage + '%';
            afterImg.style.clipPath = `polygon(${percentage}% 0%, 100% 0%, 100% 100%, ${percentage}% 100%)`;
        }
        
        function stopDrag() {
            isDragging = false;
        }
    });
}

// Initialize comparison sliders when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeComparisonSliders();
});

// Smooth page transitions
function initializePageTransitions() {
    const links = document.querySelectorAll('a[href$=".html"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Fade out current page
            anime({
                targets: 'body',
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInExpo',
                complete: function() {
                    window.location.href = href;
                }
            });
        });
    });
    
    // Fade in new page
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo'
    });
}

// Initialize page transitions
document.addEventListener('DOMContentLoaded', function() {
    initializePageTransitions();
});