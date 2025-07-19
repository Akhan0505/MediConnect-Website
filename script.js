document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    });

    // --- Mobile Navigation Toggle ---
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('open'); // Optional: add a class for burger icon animation
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('open');
            }
        });
    });

    // --- Navbar Active State on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - sectionHeight / 3) { // Adjust offset as needed
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === current) {
                link.classList.add('active');
            }
        });
    });

    // --- Hero Section Typing Animation ---
    const typingTextElement = document.getElementById('typingText');
    const words = ["Fingertips", "Doorstep", "Convenience"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        const displayedText = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
        typingTextElement.textContent = displayedText;

        const typingSpeed = isDeleting ? 70 : 150; // Slower deleting, faster typing
        const delayAfterWord = 1500; // Delay after typing a word

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, typingSpeed);
        } else if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayAfterWord);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500); // Delay before typing next word
        }
    }
    typeEffect(); // Start the typing animation

    // --- Hero Section Stat Counter Animation ---
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCountUp = (entry) => {
        if (entry.isIntersecting) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.dataset.count);
                let currentCount = 0;
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 10); // Calculate increment for 10ms intervals

                const counter = setInterval(() => {
                    currentCount += increment;
                    if (currentCount < target) {
                        stat.textContent = Math.ceil(currentCount);
                    } else {
                        stat.textContent = target;
                        clearInterval(counter);
                    }
                }, 10);
            });
            observer.disconnect(); // Stop observing after animation
        }
    };

    const observer = new IntersectionObserver(animateCountUp, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    const heroStatsSection = document.querySelector('.hero-stats');
    if (heroStatsSection) {
        observer.observe(heroStatsSection);
    }

    // --- Floating Action Button (FAB) ---
    const fabMain = document.getElementById('fabMain');
    const fabMenu = document.getElementById('fabMenu');

    fabMain.addEventListener('click', () => {
        fabMain.classList.toggle('active');
        fabMenu.classList.toggle('active');
    });

    document.querySelectorAll('.fab-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            alert(`FAB action: ${action}`);
            // In a real application, you'd trigger specific functionalities here
            fabMain.classList.remove('active');
            fabMenu.classList.remove('active');
        });
    });

    // --- Search Tabs Functionality ---
    const searchTabs = document.querySelectorAll('.search-tab');
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            searchTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // In a real application, you'd change the search form based on the active tab
            alert(`Switched to ${tab.dataset.tab} search`);
        });
    });

    // --- Dynamic Specialist Cards ---
    const specialists = [{
            name: "Dr. Aisha Khan",
            specialty: "Cardiologist",
            rating: 4.9,
            experience: 12,
            patients: "8,000+",
            location: "Lahore",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197bc2?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Dr. Bilal Ahmed",
            specialty: "Neurologist",
            rating: 4.8,
            experience: 10,
            patients: "6,500+",
            location: "Karachi",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da60bce?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Dr. Fatima Zahra",
            specialty: "Pediatrician",
            rating: 5.0,
            experience: 15,
            patients: "10,000+",
            location: "Islamabad",
            image: "https://images.unsplash.com/photo-1579165466949-cb73879a838d?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Dr. Usman Tariq",
            specialty: "Dermatologist",
            rating: 4.7,
            experience: 8,
            patients: "4,200+",
            location: "Rawalpindi",
            image: "https://images.unsplash.com/photo-1636360662660-f0c131495c0c?w=400&h=400&fit=crop&crop=face"
        }
    ];

    const specialistsGrid = document.getElementById('specialistsGrid');

    function createSpecialistCard(specialist) {
        const card = document.createElement('div');
        card.classList.add('specialist-card');

        card.innerHTML = `
            <div class="avatar">
                <img src="${specialist.image}" alt="Dr. ${specialist.name}">
            </div>
            <h3>Dr. ${specialist.name}</h3>
            <p>${specialist.specialty}</p>
            <div class="info">
                <span><i class="fas fa-briefcase-medical"></i> ${specialist.experience} Years Exp.</span>
                <span><i class="fas fa-users"></i> ${specialist.patients} Patients</span>
            </div>
            <div class="rating">
                <i class="fas fa-star"></i> ${specialist.rating}
            </div>
            <button class="btn-book">Book Appointment</button>
        `;
        specialistsGrid.appendChild(card);
    }

    specialists.forEach(createSpecialistCard);

    // --- Service Card Interactions ---
    document.querySelectorAll('.service-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const serviceCard = event.target.closest('.service-card');
            const serviceType = serviceCard.dataset.service;
            alert(`You clicked to learn more about ${serviceType} services.`);
            // Implement specific logic for each service type here
        });
    });

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }

    // --- Scroll to sections on 'Get Started' and Nav Link Clicks ---
    document.getElementById('getStarted').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
    });

    // Example for 'Watch Demo' button
    document.getElementById('watchDemo').addEventListener('click', () => {
        alert('Launching demo video! (This would open a modal or new page in a real app)');
    });

    // Example for 'View All Specialists' button
    document.getElementById('viewAllSpecialists').addEventListener('click', () => {
        alert('Redirecting to the full list of specialists! (This would link to a dedicated page)');
    });
});