```javascript
// ==========================================
// Matrix Background Animation
// ==========================================

// Get canvas and context
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initializeDrops();
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// ==========================================
// Matrix Settings
// ==========================================

const fontSize = 16;
let columns;
let drops = [];

// Initialize falling columns
function initializeDrops() {

    columns = Math.floor(canvas.width / fontSize);

    drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
}

// Initialize once
initializeDrops();

// ==========================================
// Draw Matrix Rain
// ==========================================

function drawMatrix() {

    // Create fading effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green text
    ctx.fillStyle = "#00FF00";
    ctx.font = `${fontSize}px monospace`;

    // Draw characters
    for (let i = 0; i < drops.length; i++) {

        const character = String.fromCharCode(
            0x30A0 + Math.random() * 96
        );

        ctx.fillText(
            character,
            i * fontSize,
            drops[i] * fontSize
        );

        // Reset drop randomly
        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        // Move character downward
        drops[i]++;
    }
}

// ==========================================
// Start Animation
// ==========================================

setInterval(drawMatrix, 50);
```
