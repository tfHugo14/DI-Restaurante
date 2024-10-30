// Header Image Change
const images = [
  'linear-gradient(0deg, rgba(2,4,15,1) 0%, rgba(2,4,15,0) 100%), url(img/dishes/food12.jpg)',
  'linear-gradient(0deg, rgba(2,4,15,1) 0%, rgba(2,4,15,0) 100%), url(img/dishes/food10.jpg)',
  'linear-gradient(0deg, rgba(2,4,15,1) 0%, rgba(2,4,15,0) 100%), url(img/dishes/food9.jpg)',
  'linear-gradient(0deg, rgba(2,4,15,1) 0%, rgba(2,4,15,0) 100%), url(img/dishes/food2.jpg)'
];

const header = document.getElementById("header-background");

let currentIndex = 0;

function changeBackgroundImage() {
  header.style.opacity = 0;

  setTimeout(() => { // Change when image dissapears
      header.style.backgroundImage = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;

      header.style.opacity = 1;
  }, 400);
}

changeBackgroundImage();

setInterval(changeBackgroundImage, 10000); // Change image every 10 seconds

// h2 fade-in
window.onload = function() {
  window.setTimeout(fadein, 2000);
  window.setTimeout(fadeInSlide, 1500);
}

function fadein() {
  document.getElementById('fade-in').style.opacity = '1';
}

function fadeInSlide() {
  const fadeInSlides = document.getElementsByClassName('fade-in-slide');
  for (let i = 0; i < fadeInSlides.length; i++) {
    setTimeout(() => { // adds slight delay for each element
      fadeInSlides[i].style.opacity = '1';
      fadeInSlides[i].style.transform = 'translateX(0)';
    }, i * 500);
  }
}