// Contact page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Form submission
    contactForm.addEventListener('submit', handleFormSubmission);
    
    // FAQ functionality
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            toggleFAQItem(item);
        });
    });
    
    function handleFormSubmission(e) {
        e.preventDefault();
        
        if (!validateForm(contactForm)) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const resetLoading = showButtonLoading(submitBtn, 'Sending Message...');
        
        // Simulate form submission delay
        setTimeout(() => {
            // Get form data
            const formData = new FormData(contactForm);
            const contactData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                submittedAt: new Date().toISOString()
            };
            
            // Save to localStorage (in a real app, this would be sent to a server)
            const existingMessages = storage.get('contactMessages') || [];
            existingMessages.push(contactData);
            storage.set('contactMessages', existingMessages);
            
            // Reset loading state
            resetLoading();
            
            // Show success modal
            successModal.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Show success toast
            showToast('Message sent successfully!', 'success');
            
        }, 2000); // Simulate 2 second delay
    }
    
    function toggleFAQItem(item) {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't already active
        if (!isActive) {
            item.classList.add('active');
        }
    }
    
    // Close success modal
    window.closeSuccessModal = function() {
        successModal.style.display = 'none';
    };
    
    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            closeSuccessModal();
        }
    });
    
    // Auto-expand FAQ based on URL hash
    if (window.location.hash) {
        const targetFAQ = document.querySelector(window.location.hash);
        if (targetFAQ && targetFAQ.classList.contains('faq-item')) {
            setTimeout(() => {
                toggleFAQItem(targetFAQ);
                targetFAQ.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    }
    
    // Add smooth scrolling to FAQ links
    document.querySelectorAll('a[href^="#faq"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    toggleFAQItem(targetElement);
                }, 500);
            }
        });
    });
    
    // Form field validation with real-time feedback
    const formFields = contactForm.querySelectorAll('input, select, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        field.addEventListener('input', function() {
            // Remove error styling when user starts typing
            if (this.style.borderColor === 'rgb(220, 53, 69)') {
                this.style.borderColor = '';
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        
        if (isRequired && !value) {
            field.style.borderColor = '#dc3545';
            return false;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.style.borderColor = '#dc3545';
                return false;
            }
        }
        
        // Phone validation (basic)
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                field.style.borderColor = '#dc3545';
                return false;
            }
        }
        
        field.style.borderColor = '#28a745';
        return true;
    }
    
    // Character counter for message field
    const messageField = document.getElementById('message');
    if (messageField) {
        const maxLength = 1000;
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 0.9rem;
            color: #666;
            margin-top: 0.5rem;
        `;
        messageField.parentNode.appendChild(counter);
        
        function updateCounter() {
            const remaining = maxLength - messageField.value.length;
            counter.textContent = `${remaining} characters remaining`;
            counter.style.color = remaining < 50 ? '#dc3545' : '#666';
        }
        
        messageField.addEventListener('input', updateCounter);
        messageField.setAttribute('maxlength', maxLength);
        updateCounter();
    }
});