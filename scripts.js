// Drag-and-Drop für Arrays
const boxes = document.querySelectorAll('.drag-box');
const dropArea = document.getElementById('drop-area');

boxes.forEach(box => {
    box.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text", e.target.id);
    });
});

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const draggedBox = document.getElementById(id);
    dropArea.appendChild(draggedBox);
});

// Schleifen-Beispiel
function startLoop() {
    let ball = document.getElementById('ball');
    let position = 0;

    let loop = setInterval(() => {
        position += 10;
        ball.style.transform = `translateX(${position}px)`;

        if (position >= 300) {
            clearInterval(loop);
        }
    }, 100);
}

// Funktionen – Begrüßung
function greetUser() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message');

    if (name) {
        message.textContent = `Hallo, ${name}! Willkommen im JavaScript Playground!`;
    } else {
        message.textContent = "Bitte gib deinen Namen ein!";
    }
}

// Ereignisse – Hintergrundfarbe ändern
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
