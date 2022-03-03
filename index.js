const board = document.querySelector('#board');
const squaresNumbers = 500;

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
    element.style.backgroundColor = 'blue';
}

function removeColor(element) {
    element.style.backgroundColor = '#AAA5A5';
}