const seeMenu = document.querySelector('.dmenu');
// const xButton = document.querySelector('.xicon');

seeMenu.addEventListener('click', () => {
  document.querySelector('.menu').classList.add('visible');
});

// xButton.addEventListener('click', () => {
//   document.querySelector('.menu').classList.remove('visible');
// });

// document.querySelectorAll('.nav-link').forEach((n) => {
//   n.addEventListener('click', () => {
//     document.querySelector('.menu').classList.remove('visible');
//   });
// });