window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // script.js
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menuIcon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function() {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
});

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document with smooth behavior
mybutton.addEventListener("click", function(){
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   const images = [
//       'assets/images/s1.jpeg',
//       'assets/images/s2.jpeg',
//       'assets/images/hero.jpg'
//   ];
//   let currentIndex = 0;
//   const heroElement = document.querySelector('.hero');

//   function changeBackgroundImage() {
//       heroElement.style.backgroundImage = `url('${images[currentIndex]}')`;
//       currentIndex = (currentIndex + 1) % images.length;
//   }

//   // Change image every 5 seconds (5000 milliseconds)
//   setInterval(changeBackgroundImage, 5000);

//   // Set the initial background image
//   changeBackgroundImage();
// });
