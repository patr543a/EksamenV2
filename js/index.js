"use strict";

// Import
import { createEvents } from "./create.js";
import { toggleNav } from "./nav.js";
import { animateLeft, animateRight } from "./hero.js";

// Create events
createEvents();

// Add click event to buttons
document.querySelector('.nav-opener')
    .addEventListener('click', toggleNav);

document.querySelector('#left-arrow')
    .addEventListener('click', animateLeft);

document.querySelector('#right-arrow')
    .addEventListener('click', animateRight);

// Export
export {}