// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Loading animation
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle visibility of links
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Animate timeline items when they come into view
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }

    // Animate metric numbers
    const metricNumbers = document.querySelectorAll('.metric-number');
    if (metricNumbers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const value = target.textContent;
                    let currentValue = 0;
                    const duration = 2000; // 2 seconds
                    const increment = value / (duration / 16); // 60fps
                    
                    const updateValue = () => {
                        currentValue += increment;
                        if (currentValue < value) {
                            target.textContent = Math.floor(currentValue);
                            requestAnimationFrame(updateValue);
                        } else {
                            target.textContent = value;
                        }
                    };
                    
                    updateValue();
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        metricNumbers.forEach(number => {
            observer.observe(number);
        });
    }

    // Form validation and submission
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const interest = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            if (!name || !email || !interest) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            
            setTimeout(() => {
                submitBtn.textContent = 'Thank You!';
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Image gallery lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="" alt="Gallery Image">
            </div>
        `;
        document.body.appendChild(lightbox);
        
        // Add click event to gallery items
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const lightboxImg = lightbox.querySelector('img');
                lightboxImg.src = imgSrc;
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close lightbox
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to impact cards
    const impactCards = document.querySelectorAll('.impact-card');
    if (impactCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        impactCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            observer.observe(card);
        });
    }

    // Add animation to budget items
    const budgetItems = document.querySelectorAll('.budget-item');
    if (budgetItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.progress-bar');
                    const width = progressBar.getAttribute('aria-valuenow');
                    progressBar.style.width = width + '%';
                }
            });
        }, { threshold: 0.5 });

        budgetItems.forEach(item => {
            const progressBar = item.querySelector('.progress-bar');
            progressBar.style.width = '0%';
            observer.observe(item);
        });
    }

    // Scroll to Top Functionality
    document.body.insertAdjacentHTML('beforeend', '<button class="scroll-to-top"><i class="fas fa-arrow-up"></i></button>');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Newsletter Form Submission
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing! We will keep you updated.');
            e.target.reset();
        });
    });
});