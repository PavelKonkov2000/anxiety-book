const flagButton = document.getElementById('flag-button');
const flagImage = document.getElementById('flag-image');
const Pages = document.getElementById('pages');

let currentFlag = 0; // 0 - Россия, 1 - США, 2 - Германия
let currentImage = 0;

const flags = [
  "./sourse/Images/Flags/ru.jpg",
  "./sourse/Images/Flags/us.jpg"
];

const pages_1 = [
  "./sourse/Images/001_rus.jpg",
  "./sourse/Images/001.jpg"
];

flagButton.addEventListener('click', () => {
  currentFlag = (currentFlag + 1) % flags.length; // Переход к следующему флагу
  flagImage.src = flags[currentFlag]; // Установка нового изображения
  currentImage = (currentImage + 1) % pages_1.length;
  Pages.src = pages_1[currentImage]
});