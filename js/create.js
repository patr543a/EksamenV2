"use strict";

// Import
import data from "./json/data.json" assert { type: 'json' };

// Define varibables
const eventList = document.querySelector('.event-list');

// Creates elements on the screen
function createEvents() {
    data.events.forEach(event => {
        const date = createElement(event.date);
        const description = createElement(event.event);

        eventList.appendChild(date);
        eventList.appendChild(description);
    });
}

// Quick access to document.createElement
function createElement(innerHTML) {
    const element = document.createElement('p');

    element.innerHTML = innerHTML;
    
    return element;
}

// Export
export { createEvents }