"use strict";

// Define variables
const nav = document.querySelector('nav');

// Toggles nav-menu
function toggleNav() {
    // Change display
    if (nav.style.display === 'flex') {
        // Set animation
        nav.style.animation = 'slideOut 1s ease 0s 1';

        // Wait for animation to finish
        setTimeout(() => {
            // Set animation
            nav.style.display = 'none';
        }, 1000);
    }
    else {
        // Set animation
        nav.style.animation = 'slideIn 1s ease 0s 1';
        nav.style.display = 'flex';
    }
}

// Export
export { toggleNav }