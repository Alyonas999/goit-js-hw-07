function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;
btn.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;


    console.log(`New background color: ${randomColor}`);
});


  