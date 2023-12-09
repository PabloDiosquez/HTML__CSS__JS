// Define an array of hexadecimal digits (0-9, A-F)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Get references to the button and color elements in the HTML
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Add a click event listener to the button
btn.addEventListener('click', () => {
    // Call the getHexRandomNumber function to generate a random hex color
    const hexColor = getHexRandomNumber();

    // Change the background color of the body to the randomly generated hex color
    document.body.style.backgroundColor = hexColor;

    // Update the text content of the .color element with the hex color
    color.textContent = hexColor;
});

// Define a function to generate a random hex color
function getHexRandomNumber() {
    let hexColor = '#';

    // Generate a random hex digit for each of the six positions in a hex color
    for (let index = 0; index < 6; index++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    // Return the randomly generated hex color
    return hexColor;
};