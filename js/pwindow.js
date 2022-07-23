const seeProject = document.querySelectorAll('.seeProject');
const btns = Array.from(seeProject);
const overlay = document.querySelector('#overlay');
const popup = [
  {
    name: 'Tonic',
    img: './Images/Snapshoot-Portfolio-dt1.png',
    img2: './Images/Snapshoot-Portfolio-dt3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['html', 'css', 'javascript'],
    tech2: ['GitHub', 'Ruby', 'Bootstrap'],
    liveVersion: 'https://rn486.github.io/Recillah-Khamala-Portfolio/',
    source: 'https://github.com/Rn486/Recillah-Khamala-Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    img: './Images/Snapshoot-Portfolio-dt2.png',
    img2: './Images/Snapshoot-Portfolio-dt4.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['html', 'css', 'javascript'],
    tech2: ['GitHub', 'Ruby', 'Bootstrap'],
    liveVersion: 'https://rn486.github.io/Recillah-Khamala-Portfolio/',
    source: 'https://github.com/Rn486/Recillah-Khamala-Portfolio',
  },

  {
    name: 'Tonic',
    img: './Images/Snapshoot-Portfolio-dt3.png',
    img2: './Images/Snapshoot-Portfolio-3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['html', 'css', 'javascript'],
    tech2: ['GitHub', 'Ruby', 'Bootstrap'],
    liveVersion: 'https://rn486.github.io/Recillah-Khamala-Portfolio/',
    source: 'https://github.com/Rn486/Recillah-Khamala-Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    img: './Images/Snapshoot-Portfolio-dt4.png',
    img2: './Images/Snapshoot-Portfolio-dt2.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['Html', 'Css', 'JavaScript'],
    tech2: ['GitHub', 'Ruby', 'Bootstrap'],
    liveVersion: 'https://rn486.github.io/Recillah-Khamala-Portfolio/',
    source: 'https://github.com/Rn486/Recillah-Khamala-Portfolio',
  },
];
[...btns].forEach((element, i) => {
  element.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    const x = popup[i];
    console.log(x);
    modal.innerHTML = `<div class="model-container">
    <div class="model-headline">
        <h2 class="tonic">${x.name}</h2>
        <button data-close-button class="close-button" type="button">&times;</button>
    </div>
    <div class="frame-2">
        <ul>
          <li class="canopy-model"> CANOPY</li>
          <li><a href="#"><img class="counter" src="Images/Counter.png" alt="dot\fulstop"></a></li>
          <li class="role">Back End Dev</li>
          <li><a href="#"><img class="counter" src="Images/Counter.png" alt="dot\fullstop"></a></li>
          <li class="year-model">2015</li>
        </ul>
    </div>
    <div class="image-overflow">
        <img class="work-banner-model" src="${x.img}" alt="Snapshoot Portfolio 1">
        <img class="mobile-banner-model" src="${x.img2}" alt="image">
    </div>
    <div class="parlist">
        <p class="descriptionist">${x.description}</p>
        <div class="lister">
            <ul class="button-list">
              <li class="tag">${x.tech[0]}</li>
              <li class="tag">${x.tech[1]}</li>
              <li class="tag">${x.tech[2]}</li>
            </ul>
            <ul class="button-list tag1">
            <li class="tag">${x.tech2[0]}</li>
            <li class="tag">${x.tech2[1]}</li>
            <li class="tag">${x.tech2[2]}</li>
          </ul>
            <div class = "btn">
                <button class="dogWater" type="button" onclick="window.location.href='${x.liveVersion}'">See Live <span><img
                src="/Images/power-Icon.svg"
                class="size dot"
                alt="#"
              /></span></button>
                <button class="catWater" type="button" onclick="window.location.href='${x.source}'">See Source <span><img
                src="/Images/Github-icon.svg"
                class="size dot"
                alt="#"
              /></span></button>
            </div>
        </div>
    </div>     
</div>`;
    modal.classList.toggle('show');
    overlay.classList.toggle('show');
  });
});
const modal = document.getElementById('modal');
modal.addEventListener('click', () => {
  modal.classList.remove('show');
  console.log('hello');
});