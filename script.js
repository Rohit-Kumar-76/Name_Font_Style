gsap.to('#container', {
    y: 5,
    scale: 1,

})
let colorInterval; // Variable to store the interval ID

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// List of font families to choose from
const fonts = [
    "Arial, sans-serif",
    "Georgia, serif",
    "Courier New, monospace",
    "Tahoma, sans-serif",
    "Verdana, sans-serif",
    "Trebuchet MS, sans-serif",
    "Comic Sans MS, cursive, sans-serif",
    "Impact, Charcoal, sans-serif"
];

// Function to get a random font family
function getRandomFont() {
    return fonts[Math.floor(Math.random() * fonts.length)];
}

// Function to update the colors of each character and change the font
function updateColors(name) {
    const nameElement = document.getElementById("name");

    nameElement.innerHTML = ""; // Clear the h1 before updating

    for (let i = 0; i < name.length; i++) {
        // Create a span element for each character
        const span = document.createElement("span");

        // Set the text of the span to the current character
        span.textContent = name[i];

        // Set a random color for the span
        span.style.color = getRandomColor();

        // Append the span to the nameElement
        nameElement.appendChild(span);
    }

    // Set a random font family for the whole name
    nameElement.style.fontFamily = getRandomFont();
}

// Function to handle name change on form submit
function changeName(event) {
    event.preventDefault(); // Prevent the form from submitting/reloading the page

    const userName = document.getElementById("uname").value.trim();

    if (userName !== "") {
        // Clear any previous interval to stop updating the old name
        if (colorInterval) {
            clearInterval(colorInterval);
        }

        // Update the colors and start a new interval for the new name
        updateColors(userName);
        colorInterval = setInterval(() => updateColors(userName), 500);
    }
}

// Function to stop color and font changes when the mouse enters the container
function stopChanges() {
    if (colorInterval) {
        clearInterval(colorInterval);
    }
}

// Function to resume color and font changes when the mouse leaves the container
function resumeChanges() {
    const userName = document.getElementById("name").textContent;
    colorInterval = setInterval(() => updateColors(userName), 500);
}

// Initial call to display the default name
updateColors("Rohit Mehta");
colorInterval = setInterval(() => updateColors("Rohit Mehta"), 500);

// Add event listeners to the container
const container = document.getElementById("container");
container.addEventListener("mouseenter", stopChanges);
container.addEventListener("mouseleave", resumeChanges);
