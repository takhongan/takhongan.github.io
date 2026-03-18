document.addEventListener('DOMContentLoaded', () => {
    // Elegant Scroll reveal animation using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if(href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
