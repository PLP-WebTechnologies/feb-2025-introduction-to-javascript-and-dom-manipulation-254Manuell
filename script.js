// DOM Elements
const titleElement = document.getElementById('mainTitle');
const imageElement = document.getElementById('parkImage');
const descriptionElement = document.getElementById('description');
const styleButton = document.getElementById('styleButton');
const textButton = document.getElementById('textButton');
const elementButton = document.getElementById('elementButton');

// Change Text Content
function changeTextContent() {
    titleElement.textContent = "Discover Kenya's Wonders!";
    descriptionElement.textContent = "Experience breathtaking landscapes and rich cultural heritage.";
}

// Toggle Card Style
function toggleCardStyle() {
    const card = document.querySelector('.info-card');
    card.classList.toggle('night-mode');
    
    // Add night mode style dynamically
    const nightModeStyles = document.createElement('style');
    nightModeStyles.textContent = `
        .night-mode {
            background-color: #2c3e50;
            color: white;
            transform: scale(0.98);
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(nightModeStyles);
}

// Add/Remove Elements
function manageElements() {
    const newElement = document.createElement('p');
    newElement.textContent = "New dynamic content added!";
    newElement.className = 'dynamic-text';
    
    const buttonContainer = document.getElementById('buttonContainer');
    if (!document.querySelector('.dynamic-text')) {
        buttonContainer.parentNode.insertBefore(newElement, buttonContainer);
        elementButton.textContent = "Remove Element";
    } else {
        document.querySelector('.dynamic-text').remove();
        elementButton.textContent = "Add Element";
    }
}

// Event Listeners
textButton.addEventListener('click', changeTextContent);
styleButton.addEventListener('click', toggleCardStyle);
elementButton.addEventListener('click', manageElements);