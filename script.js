function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// // Animation 
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 1000,
//   reset: true
// });

// sr.reveal(`.animation, .heading, .title`, {
//   interval: 100
// })