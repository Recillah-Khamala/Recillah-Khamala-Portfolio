// alert(`Hello this is recillah`);
const openPopup = document.querySelector('.modal');
const closePopup = document.querySelector('.close-button');
const seeProject = document.querySelectorAll('.seeProject');
const overlay = document.querySelector('#overlay');

const popup = [
  {
    name: 'Tonic',
    img: './Images/Snapshoot-Portfolio-dt1.png',
    img2: './Images/Snapshoot-Portfolio-dt3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['html', 'css', 'javascript'],
    liveVersion: 'https://rn486.github.io/Recillah-Khamala-Portfolio/',
    source: 'https://github.com/Rn486/Recillah-Khamala-Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    img: './Images/Snapshoot-Portfolio-dt2.png',
    img2: './Images/Snapshoot-Portfolio-dt4.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['html', 'css', 'javascript'],
    liveVersion: 'https://rn486.github.io/Recillah-Khamala-Portfolio/',
    source: 'https://github.com/Rn486/Recillah-Khamala-Portfolio',
  },

  {
    name: 'Tonic',
    img: './Images/Snapshoot-Portfolio-dt3.png',
    img2: './Images/Snapshoot-Portfolio-3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['html', 'css', 'javascript'],
    liveVersion: 'https://rn486.github.io/Recillah-Khamala-Portfolio/',
    source: 'https://github.com/Rn486/Recillah-Khamala-Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    img: './Images/Snapshoot-Portfolio-dt4.png',
    img2: './Images/Snapshoot-Portfolio-dt2.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['html', 'css', 'javascript'],
    liveVersion: 'https://rn486.github.io/Recillah-Khamala-Portfolio/',
    source: 'https://github.com/Rn486/Recillah-Khamala-Portfolio',
  },
];

function showModal(works) {
  const projectDetails = popup[works];
  document.querySelector('.tonic').innerHTML = projectDetails.name;
  document.querySelector('.descriptionist').innerHTML = projectDetails.description;
  document.querySelector('.work-banner-model').src = projectDetails.img;
  document.querySelector('.mobile-banner-model').src = projectDetails.img2;
  document.querySelector('.dogWater').href = projectDetails.liveVersion;
  document.querySelector('.catWater').href = projectDetails.source;
}

seeProject.forEach((element) => {
  element.addEventListener('click', (event) => {
    showModal(event.target.dataset.works);
    openPopup.style.display = 'block';
    overlay.style.display = 'block';
  }, false);
});

closePopup.addEventListener('click', () => {
  openPopup.style.display = 'none';
  overlay.style.display = 'none';
});