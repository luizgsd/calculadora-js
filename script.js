const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.button')

function updateScreen(value) {
    screen.textContent = value;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        updateScreen(buttonText);
    })
});