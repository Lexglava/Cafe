let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');
const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
};
showSlide(currentSlide);
document.querySelector('#next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});
document.querySelector('#reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reservation submitted!');
});
function scrollToSection(id) {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
}
const form = document.getElementById('reservation-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reservation submitted successfully!');
    form.reset();
});
