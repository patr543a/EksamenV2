"use strict";

// Define variables
const nav = document.querySelector('nav');

// Toggles nav-menu
function toggleNav() {
    // Change display
    if (nav.style.display === 'flex') {
        nav.style.animation = 'slideOut 1s ease 0s 1';

        setTimeout(() => {
            nav.style.display = 'none';
        }, 1000);
    }
    else {
        nav.style.animation = 'slideIn 1s ease 0s 1';
        nav.style.display = 'flex';
    }
}

// Export
export { toggleNav }