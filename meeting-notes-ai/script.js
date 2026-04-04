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

    // Interactive mouse parallax effect for background
    const bgAnimated = document.querySelector('.bg-animated');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;

        if (bgAnimated) {
            bgAnimated.style.transform = `translate(${mouseX * 20 - 10}px, ${mouseY * 20 - 10}px)`;
        }
    });

    // Add floating animation to promo images
    const promoWrappers = document.querySelectorAll('.promo-wrapper');
    promoWrappers.forEach((wrapper, index) => {
        wrapper.style.animationDelay = `${index * 0.5}s`;
        wrapper.classList.add('floating');
    });

    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.05)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});
