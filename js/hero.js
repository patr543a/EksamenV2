"use strict";

// Define variables
const hero1Image = document.querySelector('#hero1-image');
const hero2Image = document.querySelector('#hero2-image');
const hero1Content = document.querySelector('#hero1-content');
const hero2Content = document.querySelector('#hero2-content');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const options = {
    state: 0,
    fadeInDuration: 1000,
    fadeOutDuration: 1000,
    fadeOffset: 500,
    delay: 1000,
    slideInDuration: 1000,
    slideOutDuration: 1000,
    slideOffest: 500,
};

// Animates hero-banner left
function animateLeft() {
    // Return if in wrong state
    if (options.state === 0)
        return;

    // Change arrows
    leftArrow.style.animation = 'fadeOut 1000ms ease 0ms 1 normal forwards';
    rightArrow.style.animation = 'fadeIn 1000ms ease 0ms 1 normal forwards';
    
    // Change image
    hero2Image.style.animation = `fadeOut ${options.fadeOutDuration}ms ease 0ms 1 normal forwards`;

    // Wait then
    setTimeout(() => {
        // Change image
        hero1Image.style.animation = `fadeIn ${options.fadeInDuration}ms ease 0ms 1 normal forwards`;
        hero1Image.style.display = 'initial';
        hero2Image.style.display = 'none';
    }, options.fadeOffset);

    // Wait then
    setTimeout(() => {
        // Change content
        hero2Content.style.animation = `fadeOutSlide ${options.slideOutDuration}ms ease 0ms 1 normal forwards`;

        // Wait then
        setTimeout(() => {
            // Change content
            hero1Content.style.animation = `fadeInSlide ${options.slideInDuration}ms ease 0ms 1 normal forwards`;
            hero1Content.style.display = 'initial';
            hero2Content.style.display = 'none';

            // Change state
            options.state = 0;
        }, options.slideOffest);
    }, options.delay);
}

// Animates hero-banner right
function animateRight() {
    // Return if in wrong state
    if (options.state === 1)
        return;
    
    // Change arrows
    leftArrow.style.animation = 'fadeIn 1000ms ease 0ms 1 normal forwards';
    rightArrow.style.animation = 'fadeOut 1000ms ease 0ms 1 normal forwards';
    
    // Change image
    hero1Image.style.animation = `fadeOut ${options.fadeOutDuration}ms ease 0ms 1 normal forwards`;

    // Wait then
    setTimeout(() => {
        // Change image
        hero2Image.style.animation = `fadeIn ${options.fadeInDuration}ms ease 0ms 1 normal forwards`;
        hero1Image.style.display = 'none';
        hero2Image.style.display = 'initial';
    }, options.fadeOffset);

    // Wait then
    setTimeout(() => {
        // Change content
        hero1Content.style.animation = `fadeOutSlide ${options.slideOutDuration}ms ease 0ms 1 normal forwards`;

        // Wait then
        setTimeout(() => {
            // Change content
            hero2Content.style.animation = `fadeInSlide ${options.slideInDuration}ms ease 0ms 1 normal forwards`;
            hero1Content.style.display = 'none';
            hero2Content.style.display = 'initial';

            // Change state
            options.state = 1;
        }, options.slideOffest);
    }, options.delay);
}

// Export
export { animateLeft, animateRight }