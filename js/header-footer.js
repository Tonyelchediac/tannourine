const header = document.getElementById('header')
header.innerHTML = `<div class="logo">
            <a href="#hero"><img src="images/tannourine new logo.jpg" alt="Tannourine Water Logo"></a>
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Our Products</a></li>
                <li><a href="production-process.html">production Process</a></li>
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

const footer = document.getElementById('footer')
footer.innerHTML = `
        <p>&copy; 2024 Tannourine Water | All rights reserved | By <a href="chedix.netlify.app">ChediX</a></p>
        <div class="social-links">
            <a href="https://www.facebook.com/tannourinewater" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/tannourinewater/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/tannourine-water/" target="_blank"><i
                    class="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/@tannourinewater" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
`;
