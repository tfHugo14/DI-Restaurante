const images = [
    'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%), url(img/dishes/food11.jpg);',
    'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%), url(img/dishes/food10.jpg);',
    'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%), url(img/dishes/food9.jpg);',
    'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%), url(img/dishes/food2.jpg);'
  ];
  
  // Select the background slider div
  const header = document.getElementById("header-background");
  
  let currentIndex = 0;
  
  function changeBackgroundImage() {

    header.style.background = images[currentIndex];

    currentIndex = (currentIndex + 1) % images.length;
  }
  
  changeBackgroundImage();
  
  // Change image every 5 seconds
  setInterval(changeBackgroundImage, 1000);