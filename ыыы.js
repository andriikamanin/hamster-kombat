document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;

    const counterElement = document.getElementById('counter');
    const buttonElement = document.getElementById('increment-button');

    buttonElement.addEventListener('click', () => {
        counter++;
        counterElement.textContent = counter;
    });
});