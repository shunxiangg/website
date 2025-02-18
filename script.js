document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const icon = hamburgerButton.querySelector('i');
    
    // Toggle menu when hamburger is clicked
    hamburgerButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document
        mobileMenu.classList.toggle('open');
        
        // Toggle between hamburger and close icons
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Prevent clicks inside mobile menu from closing it
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) { // Matching your media query breakpoint
            mobileMenu.classList.remove('open');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});