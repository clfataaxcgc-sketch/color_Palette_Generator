const generatorBtn = document.getElementById('Generator-ptn');
const palettecontaine = document.querySelector('.palette-container');

generatorBtn.addEventListener('click', generatePalette);
palettecontaine.addEventListener('click', function (e) {
  if (e.target.classList.contains('copy-btn')) {
    const hexvalue = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexvalue)
      .then(() => shawSacsass(e.target))
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains('color')) {
    const colorvalue = e.target.nextElementSibling.textContent;
    navigator.clipboard
      .writeText(colorvalue)
      .then(() =>
        shawSacsass(e.target.nextElementSibling.querySelector('.copy-btn')),
      )
      .catch((err) => console.log(err));
  }
});

function generatePalette() {
  const colors = [];
  for (let i = 0; i < 6; i++) {
    colors.push(generateRondomColor());
  }
  updetcolors(colors);
}

function generateRondomColor() {
  let litter = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += litter[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updetcolors(colors) {
  const colorBoxes = document.querySelectorAll('.color-box');

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDev = box.querySelector('.color');
    const hexValue = box.querySelector('.hex-value');
    colorDev.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}

function shawSacsass(elmant) {
  elmant.classList.remove('far', 'fa-copy');
  elmant.classList.add('fas', 'fa-check');
  elmant.style.color = '#47DE5D';

  setTimeout(() => {
    elmant.classList.remove('fas', 'fa-check');
    elmant.classList.add('far', 'fa-copy');
    elmant.style.color = '';
  }, 1500);
}
