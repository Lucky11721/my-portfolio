document.addEventListener('DOMContentLoaded', function() {

    // 1. AOS (Animate on Scroll) Initialization
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true,     // whether animation should happen only once - while scrolling down
    });

    // 2. Typed.js Initialization
    var options = {
        strings: ['Big Data Analytics Enthusiast', 'Engineering Student', 'Passionate Developer'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
    };
    var typed = new Typed('#typed-text', options);

    // 3. particles.js Initialization
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
        },
        "retina_detect": true
    });

    // 4. Back to Top button functionality
    var backToTopBtn = document.getElementById('back-to-top');

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    };

    // 5. Animate progress bars on scroll
    const skillSection = document.querySelector('.skills-section');
    const progressBars = document.querySelectorAll('.progress-bar');

    function showProgress() {
        progressBars.forEach(progressBar => {
            const value = progressBar.dataset.width;
            progressBar.style.width = `${value}`;
        });
    }

    function hideProgress() {
        progressBars.forEach(p => {
            p.style.width = '0%';
        });
    }

    // Using Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                showProgress();
            } else {
                // Optional: reset animation when out of view
                // hideProgress(); 
            }
        });
    }, {
      threshold: 0.5 // Trigger when 50% of the section is visible
    });

    observer.observe(skillSection);
});