// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    // Create observer for budget section
    const budgetObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the section title first
                if (entry.target.classList.contains('budget-section')) {
                    entry.target.querySelector('h2').classList.add('animate-in');
                }
                
                // Animate each budget item
                if (entry.target.classList.contains('budget-item')) {
                    entry.target.classList.add('animate-in');
                    
                    // Set the progress width based on the percentage
                    const progressBar = entry.target.querySelector('.progress');
                    if (progressBar) {
                        const percentage = progressBar.getAttribute('data-progress');
                        progressBar.style.setProperty('--progress-width', `${percentage}%`);
                    }
                }
                
                // Once animated, stop observing
                budgetObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe budget section and items
    const budgetSection = document.querySelector('.budget-section');
    if (budgetSection) {
        budgetObserver.observe(budgetSection);
        
        const budgetItems = budgetSection.querySelectorAll('.budget-item');
        budgetItems.forEach(item => {
            budgetObserver.observe(item);
        });
    }

    // Initialize timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineHeader = document.querySelector('.impact-timeline-section h3');

    // Make header visible
    if (timelineHeader) {
        timelineHeader.style.opacity = '1';
    }

    // Make all timeline items visible
    timelineItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    });

    // Simple scroll animation for timeline items
    function checkTimelineVisibility() {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const isInView = (rect.top <= window.innerHeight * 0.8);
            
            if (isInView) {
                item.classList.add('visible');
            }
        });
    }

    // Check visibility on load and scroll
    checkTimelineVisibility();
    window.addEventListener('scroll', checkTimelineVisibility);

    // Original animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll, .stat-item').forEach(element => {
        observer.observe(element);
    });

    // Animated Statistics
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16); // 60fps
        let current = start;
        
        const updateValue = () => {
            current += increment;
            if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
                element.textContent = Math.round(current);
                requestAnimationFrame(updateValue);
            } else {
                element.textContent = end;
            }
        };
        
        updateValue();
    }

    // Animate budget amounts
    function animateBudgetAmounts() {
        document.querySelectorAll('.budget-amount').forEach(amount => {
            const value = parseInt(amount.getAttribute('data-amount'));
            animateValue(amount, 0, value, 1500);
        });
    }

    // Check if budget section is in view
    function checkBudgetVisibility() {
        const budgetSection = document.querySelector('.budget-section');
        if (budgetSection) {
            const position = budgetSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (position < screenPosition) {
                animateBudgetAmounts();
                window.removeEventListener('scroll', checkBudgetVisibility);
            }
        }
    }

    // Initial check and scroll listener for budget animations
    checkBudgetVisibility();
    window.addEventListener('scroll', checkBudgetVisibility);
});

// Timeline Animation Handler
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Initialize timeline items on page load
    timelineItems.forEach(item => {
        // Add animate-in class immediately if the item is in viewport
        if (isElementInViewport(item)) {
            item.classList.add('animate-in');
        }
    });
    
    // Create intersection observer for timeline items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Keep the animation state after scrolling
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
    });
    
    // Observe each timeline item
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Handle reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleReducedMotion() {
        if (prefersReducedMotion.matches) {
            timelineItems.forEach(item => {
                item.classList.add('animate-in');
            });
        }
    }
    
    handleReducedMotion();
    prefersReducedMotion.addListener(handleReducedMotion);
});

// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    // Show first testimonial on load
    if (testimonials.length > 0) {
        testimonials[0].classList.add('active');
    }
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
            testimonial.style.display = 'none';
        });
        testimonials[index].classList.add('active');
        testimonials[index].style.display = 'block';
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    
    // Add event listeners to navigation buttons
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    
    if (prevButton) {
        prevButton.addEventListener('click', prevTestimonial);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', nextTestimonial);
    }
    
    // Auto-advance testimonials every 5 seconds
    const autoAdvance = setInterval(nextTestimonial, 5000);
    
    // Pause auto-advance on hover
    const testimonialContainer = document.querySelector('.testimonials-slider');
    if (testimonialContainer) {
        testimonialContainer.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
        
        testimonialContainer.addEventListener('mouseleave', () => {
            setInterval(nextTestimonial, 5000);
        });
    }
}); 