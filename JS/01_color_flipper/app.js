// Define an array of colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Get references to the button and span elements in the HTML
const btn   = document.getElementById('btn');
const color = document.querySelector('span');

// Add a click event listener to the button
btn.addEventListener('click', () => {
    // Call the getRandomNumber function to get a random index
    const randomNumber = getRandomNumber();

    // Change the background color of the body to the randomly selected color
    document.body.style.backgroundColor = colors[randomNumber];

    // Update the text content of the span with the selected color
    color.textContent = colors[randomNumber];
});

// Define a function to get a random number within the length of the colors array
const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
};