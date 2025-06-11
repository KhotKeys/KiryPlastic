// Statistics Animation Script
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    
    // Function to animate statistics
    function animateStats() {
        console.log("Animating stats...");
        const stats = document.querySelectorAll('.stat-number');
        console.log("Found stats elements:", stats.length);
        
        if (stats.length === 0) {
            console.error("No stat elements found!");
            return;
        }
        
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            console.log("Target value:", target);
            
            // Reset to 0 first
            stat.textContent = "0";
            
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;

            const updateCount = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target;
                }
            };

            updateCount();
        });
    }
    
    // Run animation immediately
    setTimeout(() => {
        console.log("Running initial stats animation...");
        animateStats();
    }, 500);
    
    // Also run animation when stats section comes into view
    function checkStatsVisibility() {
        const statsSection = document.querySelector('.impact-stats-section');
        if (statsSection) {
            const statsPosition = statsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (statsPosition < screenPosition) {
                console.log("Stats section in view, animating...");
                animateStats();
            }
        }
    }
    
    // Check on scroll
    window.addEventListener('scroll', checkStatsVisibility);
    
    // Check on load
    window.addEventListener('load', checkStatsVisibility);
}); 