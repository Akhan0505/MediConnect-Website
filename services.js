
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // DOM Elements with null checks
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const serviceCards = document.querySelectorAll('.service-card');
    const faqItems = document.querySelectorAll('.faq-item');
    const themeToggle = document.querySelector('.theme-toggle');
    const fabMain = document.querySelector('.fab-main');
    const fabMenu = document.querySelector('.fab-menu');
    const navbar = document.querySelector('.navbar');
    const notificationBtn = document.querySelector('.notification-btn');

    // Add CSS animations and styles
    addDynamicStyles();

    // Initialize page loading animation
    initializePageLoading();

    // Mobile Navigation
    if (mobileToggle && navMenu) {
        initializeMobileNavigation(mobileToggle, navMenu);
    }

    // Category Filtering
    if (categoryTabs.length > 0 && serviceCards.length > 0) {
        initializeCategoryFiltering(categoryTabs, serviceCards);
    }

    // FAQ Accordion
    if (faqItems.length > 0) {
        initializeFAQAccordion(faqItems);
    }

    // Dark Theme Toggle
    if (themeToggle) {
        initializeThemeToggle(themeToggle);
    }

    // Floating Action Button
    if (fabMain && fabMenu) {
        initializeFAB(fabMain, fabMenu);
    }

    // Scroll Effects
    if (navbar) {
        initializeScrollEffects(navbar);
    }

    // Smooth Scroll for Navigation Links
    initializeSmoothScroll();

    // Service Card Animations
    if (serviceCards.length > 0) {
        initializeServiceCardAnimations(serviceCards);
    }

    // Notification Badge Animation
    if (notificationBtn) {
        initializeNotificationBadge(notificationBtn);
    }

    // Initialize service card transitions
    if (serviceCards.length > 0) {
        initializeServiceCardTransitions(serviceCards);
    }

    console.log('Services page initialized successfully');
}

function initializeMobileNavigation(mobileToggle, navMenu) {
    // Mobile Navigation Toggle
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

function initializeCategoryFiltering(categoryTabs, serviceCards) {
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            try {
                // Remove active class from all tabs
                categoryTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');

                const category = tab.dataset.category || 'all';
                
                serviceCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            } catch (error) {
                console.error('Error in category filtering:', error);
            }
        });
    });
}

function initializeFAQAccordion(faqItems) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                try {
                    const isActive = item.classList.contains('active');
                    
                    // Close all FAQ items
                    faqItems.forEach(faq => {
                        faq.classList.remove('active');
                    });
                    
                    // Open clicked item if it wasn't active
                    if (!isActive) {
                        item.classList.add('active');
                    }
                } catch (error) {
                    console.error('Error in FAQ accordion:', error);
                }
            });

            // Add keyboard accessibility
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });

            // Make focusable for accessibility
            if (!question.hasAttribute('tabindex')) {
                question.setAttribute('tabindex', '0');
            }
        }
    });
}

function initializeThemeToggle(themeToggle) {
    // Set initial theme
    if (!document.body.dataset.theme) {
        document.body.dataset.theme = 'light';
    }

    themeToggle.addEventListener('click', () => {
        try {
            const currentTheme = document.body.dataset.theme || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.dataset.theme = newTheme;
            
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }

            // Save theme preference
            try {
                localStorage.setItem('theme', newTheme);
            } catch (e) {
                // localStorage not available, continue without saving
                console.warn('Could not save theme preference');
            }
        } catch (error) {
            console.error('Error in theme toggle:', error);
        }
    });

    // Load saved theme preference
    try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            document.body.dataset.theme = savedTheme;
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    } catch (e) {
        // localStorage not available, use default theme
        console.warn('Could not load theme preference');
    }
}

function initializeFAB(fabMain, fabMenu) {
    fabMain.addEventListener('click', (e) => {
        e.stopPropagation();
        fabMain.classList.toggle('active');
        fabMenu.classList.toggle('active');
    });

    // Close FAB menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!fabMain.contains(e.target) && !fabMenu.contains(e.target)) {
            fabMain.classList.remove('active');
            fabMenu.classList.remove('active');
        }
    });

    // Close FAB menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fabMain.classList.remove('active');
            fabMenu.classList.remove('active');
        }
    });
}

function initializeScrollEffects(navbar) {
    let ticking = false;

    function updateNavbar() {
        try {
            const currentTheme = document.body.dataset.theme || 'light';
            
            if (window.scrollY > 100) {
                if (currentTheme === 'dark') {
                    navbar.style.background = 'rgba(30, 30, 30, 0.95)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                }
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = '';
                navbar.style.backdropFilter = '';
                navbar.style.boxShadow = '';
            }
        } catch (error) {
            console.error('Error in scroll effects:', error);
        }
        ticking = false;
    }

    // Throttle scroll events for better performance
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            try {
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } catch (error) {
                console.error('Error in smooth scroll:', error);
            }
        });
    });
}

function initializeServiceCardAnimations(serviceCards) {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                    // Unobserve after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        serviceCards.forEach(card => {
            observer.observe(card);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        serviceCards.forEach(card => {
            card.style.animation = 'slideInUp 0.6s ease-out forwards';
        });
    }
}

function initializeNotificationBadge(notificationBtn) {
    const badge = notificationBtn.querySelector('.notification-badge');
    
    if (badge) {
        const animateBadge = () => {
            badge.style.animation = 'none';
            setTimeout(() => {
                badge.style.animation = 'pulse 1s ease-in-out';
            }, 10);
        };

        // Initial animation
        animateBadge();
        
        // Repeat animation every 5 seconds
        setInterval(animateBadge, 5000);
    }
}

function initializePageLoading() {
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
}

function initializeServiceCardTransitions(serviceCards) {
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// FAB Action Functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    const fabMain = document.querySelector('.fab-main');
    const fabMenu = document.querySelector('.fab-menu');
    if (fabMain && fabMenu) {
        fabMain.classList.remove('active');
        fabMenu.classList.remove('active');
    }
}

function openChat() {
    // You can customize this function based on your chat system
    const confirmed = confirm('Open live chat support?');
    if (confirmed) {
        // Replace with your actual chat integration
        console.log('Opening chat system...');
        // Example: window.open('your-chat-url', '_blank');
    }
    
    const fabMain = document.querySelector('.fab-main');
    const fabMenu = document.querySelector('.fab-menu');
    if (fabMain && fabMenu) {
        fabMain.classList.remove('active');
        fabMenu.classList.remove('active');
    }
}

function bookAppointment() {
    // You can customize this function based on your booking system
    const confirmed = confirm('Redirect to appointment booking?');
    if (confirmed) {
        // Replace with your actual booking URL
        console.log('Redirecting to booking system...');
        // Example: window.location.href = 'your-booking-url';
    }
    
    const fabMain = document.querySelector('.fab-main');
    const fabMenu = document.querySelector('.fab-menu');
    if (fabMain && fabMenu) {
        fabMain.classList.remove('active');
        fabMenu.classList.remove('active');
    }
}

function emergencyCall() {
    const confirmed = confirm('Call emergency services? This will dial your local emergency number.');
    if (confirmed) {
        // Use appropriate emergency number for your region
        // 911 for US, 999 for UK, 112 for EU, etc.
        window.location.href = 'tel:911';
    }
    
    const fabMain = document.querySelector('.fab-main');
    const fabMenu = document.querySelector('.fab-menu');
    if (fabMain && fabMenu) {
        fabMain.classList.remove('active');
        fabMenu.classList.remove('active');
    }
}

function addDynamicStyles() {
    // Check if styles are already added to avoid duplicates
    if (document.querySelector('#services-dynamic-styles')) {
        return;
    }

    const style = document.createElement('style');
    style.id = 'services-dynamic-styles';
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }
        
        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #ef4444;
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 1s ease-in-out infinite;
            font-weight: bold;
        }

        /* Accessibility improvements */
        .faq-question {
            cursor: pointer;
        }

        .faq-question:focus {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
        }

        /* Smooth transitions for theme changes */
        body {
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Reduced motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Error handling for global errors
window.addEventListener('error', (e) => {
    console.error('Global error in services.js:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection in services.js:', e.reason);
});

// Expose functions to global scope for use in HTML onclick attributes
window.scrollToTop = scrollToTop;
window.openChat = openChat;
window.bookAppointment = bookAppointment;
window.emergencyCall = emergencyCall;