"use strict";

// Import
import data from "./json/data.json" assert { type: 'json' };

// Define varibables
const eventList = document.querySelector('.event-list');

// Creates elements on the screen
function createEvents() {
    data.events.forEach(event => {
        // Make elementa
        const date = document.createElement('p');
        const description = document.createElement('p');

        // Set text
        date.innerHTML = event.date;
        description.innerHTML = event.event;

        // Add elements
        eventList.appendChild(date);
        eventList.appendChild(description);
    });
}

// Export
export { createEvents }