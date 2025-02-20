// Sidebar toggle functionality
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// Ensure the sidebar closes when clicking outside
document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggleIcon = document.querySelector('.showOnMobile a');

    if (!sidebar.contains(event.target) && !sidebarToggleIcon.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

// Carousel functionality
let currentIndex = 0;

function slideCarousel(direction) {
    const container = document.querySelector('.carousel-container');
    const testimonials = document.querySelectorAll('.testimonial-card');
    const totalCards = testimonials.length;
    const cardWidth = testimonials[0].offsetWidth + parseInt(window.getComputedStyle(testimonials[0]).marginRight); // Width of one card including margin

    if (direction === 'right') {
        currentIndex = (currentIndex + 1) % totalCards;
    } else {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    }

    // Scroll to the new position smoothly
    container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth' // Smooth scrolling
    });
}

// AOS initialization
AOS.init({
    duration: 1200,  // Duration of animation in milliseconds
    once: false,     // Whether animation should happen only once or every time you scroll
    mirror: true,    // Whether elements should animate out while scrolling past them
});

// Reinitialize AOS on scroll or any major event that could affect animations
window.addEventListener('scroll', function() {
    AOS.refresh();
});

// Optional: Reinitialize AOS when resizing the window
window.addEventListener('resize', function() {
    AOS.refresh();
});