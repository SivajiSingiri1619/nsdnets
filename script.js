// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Hero Slider
// Hero Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto-scroll every 5 seconds
setInterval(nextSlide, 5000);

// Click on dots to navigate
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// about page

document.addEventListener('DOMContentLoaded', function() {
    // Force redraw for animations
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => void el.offsetHeight);
    
    // Add animation class on scroll
    const animateOnScroll = () => {
        elements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elTop < windowHeight - 100) {
                el.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
});




// gallery section
// Gallery Tab Switching
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const gallerySections = document.querySelectorAll('.gallery-section');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons & sections
            tabBtns.forEach(btn => btn.classList.remove('active'));
            gallerySections.forEach(section => section.classList.remove('active-tab'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding section
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active-tab');
        });
    });
});


// WhatsApp Form Submission
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.name.value;
    const phone = this.phone.value;
    const service = this.service.value;
    
    // WhatsApp API Link
    const whatsappUrl = `https://wa.me/918332005642?text=
        Namaste!%0A%0A
        *Name:* ${encodeURIComponent(name)}%0A
        *Phone:* ${encodeURIComponent(phone)}%0A
        *Service Needed:* ${encodeURIComponent(service)}%0A%0A
        Please contact me for installation!`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
});





// contact-form
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
      alert("Please fill all the fields");
      return;
    }

    // ✅ Your WhatsApp number (no + symbol)
    let whatsappNumber = "918332005642";

    let finalMessage = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
    )}`;

    // ✅ Open WhatsApp chat in new tab
    window.open(finalMessage, "_blank");
  });
});

