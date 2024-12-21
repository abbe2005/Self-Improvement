// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    // Get all page elements
    const pages = document.querySelectorAll('.page');
    
    // Navigation function
    function navigateToPage(pageId) {
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));
        
        // Show selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.add('active');
        }
    }

    // Add click handlers for navigation links
    document.getElementById('home-link').addEventListener('click', () => navigateToPage('home-page'));
    document.getElementById('apps-link').addEventListener('click', () => navigateToPage('apps-page'));
    document.getElementById('guide-link').addEventListener('click', () => navigateToPage('guide-page'));
    document.getElementById('contact-link').addEventListener('click', () => navigateToPage('contact-page'));
    document.getElementById('login-link').addEventListener('click', () => navigateToPage('login-page'));

    // Handle form submissions
    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add login functionality here
        alert('Login functionality would be implemented here');
    });

    document.getElementById('contact-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add contact form submission functionality here
        alert('Contact form submission would be implemented here');
    });

 // Handle "Start Your Journey" button click
const startJourneyButton = document.querySelector('.hero-right .button');
if (startJourneyButton) {
    startJourneyButton.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage('guide-page');
    });
}

// Handle feature image click to act as a button
const featureImage = document.querySelector('.feature-image');
if (featureImage) {
    featureImage.addEventListener('click', (e) => {
        e.preventDefault();
        startJourneyButton.click(); // Trigger the click event of the "Start Your Journey" button
    });
}

    // Handle URL hash changes
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const pageId = `${hash}-page`;
            navigateToPage(pageId);
        }
    });

    // Circle icon switching functionality
    const dots = document.querySelectorAll('.dot');
    const featureImageIcon = document.querySelector('.feature-image i');
    let currentIndex = 0;

    function switchIcon() {
        currentIndex = (currentIndex + 1) % dots.length;
        featureImageIcon.className = dots[currentIndex].getAttribute('data-icon');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    setInterval(switchIcon, 4000); // Change icon every 4 seconds
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});