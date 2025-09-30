document.addEventListener('DOMContentLoaded', function() {

    // --- Header Scroll Effect ---
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Setup for Watercolor Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach(el => {
        // We set the data-text attribute to the element's content.
        // The CSS ::before pseudo-element will use this to create the fill effect.
        el.setAttribute('data-text', el.textContent);
    });

    // --- Scroll Animation Observer ---
    const animatedElements = document.querySelectorAll('.fade-in, .reveal-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});