document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    
    if (contactForm && emailInput && emailError) {
        emailInput.addEventListener('blur', function() {
            if (emailInput.value && !isValidEmail(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address.';
                emailInput.setAttribute('aria-invalid', 'true');
            } else {
                emailError.textContent = '';
                emailInput.removeAttribute('aria-invalid');
            }
        });
        
        contactForm.addEventListener('submit', function(event) {
            let valid = true;
            
            // Email validation
            if (!isValidEmail(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address.';
                emailInput.setAttribute('aria-invalid', 'true');
                valid = false;
            }
            
            if (!valid) {
                event.preventDefault();
            }
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Set focus to the target section
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });
});