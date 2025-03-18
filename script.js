// Select DOM elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Toggle menu function
const toggleMenu = () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
};

// Close menu function
const closeMenu = () => {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
    body.style.overflow = '';
};

// Smooth scroll function
const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        // Close mobile menu if open
        closeMenu();
        
        // Get the target's position
        const headerOffset = 80; // Height of fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Smooth scroll to target
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Event Listeners
mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMenu();
    }
});

// Add smooth scroll to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Close menu on window resize (if screen size becomes larger than mobile breakpoint)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for header
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`a[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});


const gallery = document.getElementById("gallery");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {
  gallery.scrollBy({
    left: -320, // Width + gap
    behavior: "smooth"
  });
});

rightArrow.addEventListener("click", () => {
  gallery.scrollBy({
    left: 320,
    behavior: "smooth"
  });
});