const board = document.querySelector('#board');
const colors = ['#DE3218', '#F19314', '#F1E014', '#1BC51F', '#0B8DCF', '#0732BF', '#7B0AA4']
const squaresNumbers = 580;

for (let i = 0; i < squaresNumbers; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        setColor(square);
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })
    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#AAA5A5';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const elem = Math.floor(Math.random() * colors.length);
    return colors[elem];
}