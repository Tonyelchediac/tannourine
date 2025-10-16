// header code
const header = document.getElementById('header')
header.innerHTML = `<div class="logo">
            <a href="#hero"><img src="images/tannourine logo.png" alt="Tannourine Water Logo"></a>
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Our Products</a></li>
                <li><a href="production-process.html">Production Process</a></li>
                <li><a href="safety-policy.html">F.S.P. ISO:22000</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
                <li><a href="tel:1522"><i class="fa-solid fa-phone-volume"></i> 1522</a></li>
            </ul>
        </nav>
        <div class="menu-toggle">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>`;

// footer code
const footer = document.getElementById('footer')
footer.innerHTML = `
        <p>&copy; 2024 Tannourine Water | All rights reserved. <br><br> By <a href="https://chedix.netlify.app">ChediX</a></p>
        <div class="social-links">
            <a href="https://www.facebook.com/tannourinewater" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/tannourinewater/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/tannourine-water/" target="_blank"><i
                    class="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/@tannourinewater" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
`;

// load img
const load = document.getElementById('load');
load.innerHTML = `
<img src="images/tannourine logo.png" alt="Tannourine Water Logo">
`;

// hotline call code
    document.addEventListener('DOMContentLoaded', function() {
      const hotlineBtn = document.createElement('button');
      hotlineBtn.innerHTML = `<i class="fa-solid fa-phone-volume"></i>`;
      hotlineBtn.style.textDecoration = 'none';
      hotlineBtn.style.position = 'fixed';
        hotlineBtn.style.bottom = '20px';
        hotlineBtn.style.right = '20px';
      hotlineBtn.style.zIndex = '10';
      hotlineBtn.style.fontSize = '13px';
      hotlineBtn.style.border = '2px solid var(--shine-color)';
      hotlineBtn.style.outline = 'none';
      hotlineBtn.style.backgroundColor = 'var(--primary-color)';
      hotlineBtn.style.color = 'var(--second-text-color)';
      hotlineBtn.style.cursor = 'pointer';
      hotlineBtn.style.padding = '12px 14px';
      hotlineBtn.style.borderRadius = '50%';
      hotlineBtn.style.display = 'block';

      window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
          hotlineBtn.style.bottom = '75px';
          hotlineBtn.style.right = '20px';
        } else {
          hotlineBtn.style.bottom = '20px';
          hotlineBtn.style.right = '20px';
        }
      });

      hotlineBtn.addEventListener('click', function() {
        window.location.href = 'tel:1522';
      });

      document.body.appendChild(hotlineBtn);
    });