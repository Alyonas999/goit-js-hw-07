document.addEventListener('DOMContentLoaded', () => {
    const inputEl = document.querySelector('#name-input');
    const outputEl = document.querySelector('#name-output');
    inputEl.addEventListener('input', () => {
        const trimmedValue = inputEl.ariaValueMax.trim();
        outputEl.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
    });


});