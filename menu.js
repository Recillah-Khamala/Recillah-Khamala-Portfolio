const seeMenu = document.querySelector('.menu-icon');
const xMenu = document.querySelector('.xicon');

seeMenu.addEventListener('click', () => {
    document.querySelector('.amenu').classList.add('visible');
  });
  
  xMenu.addEventListener('click', () => {
    document.querySelector('.amenu').classList.remove('visible');
  });
  
  document.querySelectorAll('.mobile').forEach((n) => {
    n.addEventListener('click', () => {
      document.querySelector('.amenu').classList.remove('visible');
    });
  });
  