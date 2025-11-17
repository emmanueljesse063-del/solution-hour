// ===== HERO SWIPER =====
const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade",
  speed: 1000,
  on: {
    slideChangeTransitionStart: function () {
      const items = document.querySelectorAll(".hero-swiper .slide-text li");
      items.forEach((li) => {
        li.style.opacity = "0";
        li.style.transform = "translateY(40px)";
        li.style.animation = "none";
      });
    },
    slideChangeTransitionEnd: function () {
      const activeItems = document.querySelectorAll(".hero-swiper .swiper-slide-active .slide-text li");
      activeItems.forEach((li, index) => {
        li.style.animation = `slideUp 0.6s ease forwards ${0.4 + index}s`;
      });
    },
  },
});

// ===== TESTIMONIALS SWIPER =====
const testimonialsSwiper = new Swiper(".testimonials-swiper", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.testimonials-swiper .swiper-pagination',
    clickable: true,
  },
});

// ===== SERVICE CARDS ANIMATION =====
const serviceCards = document.querySelectorAll('.service-card');
const appear = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
}, { threshold: 0.2 });
serviceCards.forEach(card => appear.observe(card));

// ===== MINISTRY CARDS ANIMATION =====
const cards = document.querySelectorAll(".ministry-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });
cards.forEach(card => observer.observe(card));






  // --- Countdown Timer for Featured Event ---
  const countDownDate = new Date("Dec 12, 2025 00:00:00").getTime();

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "<h3>Event Started!</h3>";
    }
  }, 1000);

  // --- Auto-update Mini Event Badges ---
  const badges = document.querySelectorAll(".event-badge");
  badges.forEach((badge, index) => {
    const eventDate = new Date(badge.getAttribute("data-date")).getTime();
    const today = new Date().getTime();
    const distance = eventDate - today;
    const daysLeft = Math.ceil(distance / (1000 * 60 * 60 * 24));

    if (daysLeft > 0) {
      badge.textContent = `${daysLeft} ${daysLeft === 1 ? "Day" : "Days"} Left`;
    } else if (daysLeft === 0) {
      badge.textContent = "Today!";
      badge.style.background = "linear-gradient(90deg, #4ade80, #22c55e)";
    } else {
      badge.textContent = "Event Started!";
      badge.style.background = "linear-gradient(90deg, #94a3b8, #64748b)";
    }

    // Staggered fade-in delay
    badge.style.animationDelay = `${index * 0.4}s`;
  });















// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
//   hamburger.classList.toggle('toggle');
// });






// Smooth scroll
document.querySelectorAll('.rect-nav-list a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu if open
    document.querySelector('.rect-nav-list').classList.remove('show');
  });
});

// Active highlight on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.rect-nav-list li');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for navbar
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  navItems.forEach(li => {
    li.classList.remove('active');
    if (li.querySelector('a').getAttribute('href') === `#${current}`) {
      li.classList.add('active');
    }
  });
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const rectNav = document.querySelector('.rect-nav-list');

hamburger.addEventListener('click', () => {
  rectNav.classList.toggle('show');
});














  




























