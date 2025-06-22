document.addEventListener('DOMContentLoaded', function() {
    // Hamburger navigation
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');
    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
        hamburger.addEventListener('keypress', function(e) {
            if (e.key === "Enter" || e.key === " ") {
                navUl.classList.toggle('active');
            }
        });
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('active');
            });
        });
    }

    // Terms and Conditions: Toggle all content on h2 click/keypress
    const termsHeader = document.querySelector('.terms-conditions h2');
    const termsDetails = document.querySelector('.terms-details');
    if (termsHeader && termsDetails) {
        termsDetails.style.display = 'none'; // ensure hidden on load

        function toggleTerms() {
            termsDetails.style.display = (termsDetails.style.display === 'block') ? 'none' : 'block';
        }
        termsHeader.addEventListener('click', toggleTerms);
        termsHeader.addEventListener('keypress', (e) => {
            if (e.key === "Enter" || e.key === " ") {
                toggleTerms();
            }
        });
    }

    // Mobile: Use service image as background on mobile only
    function setServiceBackgrounds() {
        if (window.innerWidth <= 650) {
            document.querySelectorAll('.service').forEach(service => {
                const img = service.querySelector('.service-img');
                if (img) {
                    service.style.backgroundImage = `url('${img.src}')`;
                }
            });
        } else {
            // Remove mobile-specific background and restore in case of resize
            document.querySelectorAll('.service').forEach(service => {
                service.style.backgroundImage = '';
            });
        }
    }
    setServiceBackgrounds();
    window.addEventListener('resize', setServiceBackgrounds);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.transform = 'translate(-50%, calc(-50% + ' + window.scrollY * 0.3 + 'px))';
    }
});