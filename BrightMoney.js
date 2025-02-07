let currentSlide = 0;
const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Sarah Johnson",
    role: "Small Business Owner",
    text: "NextGen AI Banking transformed how I manage my business finances."
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    name: "David Chen",
    role: "Tech Entrepreneur",
    text: "The AI-powered insights have helped me make better financial decisions."
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Emily Rodriguez",
    role: "Freelancer",
    text: "Finally, a banking solution that understands my unique needs."
  }
];

function showSlide(index) {
  const testimonialCard = document.querySelector(".testimonial-card");
  testimonialCard.innerHTML = `
    <img src="${testimonials[index].image}" alt="${testimonials[index].name}" class="testimonial-image">
    <p>"${testimonials[index].text}"</p>
    <div class="testimonial-info">
      <p class="name">${testimonials[index].name}</p>
      <p class="role">${testimonials[index].role}</p>
    </div>
  `;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  showSlide(currentSlide);
}

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

// Initialize first slide
showSlide(currentSlide);

// Track button click event
document.getElementById("get-started-btn").addEventListener("click", function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "button_click",
      button_id: "get-started-btn"
    });
});