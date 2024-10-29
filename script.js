const images = [
  'linear-gradient(0deg, rgba(2,4,15,1) 0%, rgba(2,4,15,0) 100%), url(img/dishes/food11.jpg)',
  'linear-gradient(0deg, rgba(2,4,15,1) 0%, rgba(2,4,15,0) 100%), url(img/dishes/food10.jpg)',
  'linear-gradient(0deg, rgba(2,4,15,1) 0%, rgba(2,4,15,0) 100%), url(img/dishes/food9.jpg)',
  'linear-gradient(0deg, rgba(2,4,15,1) 0%, rgba(2,4,15,0) 100%), url(img/dishes/food2.jpg)'
];

const header = document.getElementById("header-background");

let currentIndex = 0;

function changeBackgroundImage() {
  header.style.opacity = 0;

  setTimeout(() => {
      // Change when image dissapears
      header.style.backgroundImage = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;

      header.style.opacity = 1;
  }, 400);
}

changeBackgroundImage();

// Change image every 10 seconds
setInterval(changeBackgroundImage, 10000);