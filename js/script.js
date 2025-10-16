    // load page
    document.addEventListener('DOMContentLoaded', function() {
        const preloader = document.querySelector('.load');
        window.addEventListener('load', function() {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 800);
        });

        // Handle details elements to allow only one open at a time
        const details = document.querySelectorAll('details');
        details.forEach(detail => {
            detail.addEventListener('toggle', function() {
                if (this.open) {
                    details.forEach(otherDetail => {
                        if (otherDetail !== this) {
                            otherDetail.open = false;
                        }
                    });
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // menu toggle
    const menuBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('show');
        menuBtn.classList.toggle('show');
    });

    // Close menu on link click (for single page applications)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('show');
            menuBtn.classList.remove('show');
        });
    });

    // scrolled header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 150) {
            header.classList.add('scrolled');
            nav.style.display = 'block';
            document.getElementById('topBtn').style.display = 'flex';
        } else {
            header.classList.remove('scrolled');
            nav.style.display = 'none';
            document.getElementById('topBtn').style.display = 'none';
        }
    });