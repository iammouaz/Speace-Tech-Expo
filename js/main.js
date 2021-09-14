const toggle = document.getElementById('toggle_menu');
const menu = document.getElementById('menu');
const ul = document.getElementById('menu-ul');
const closeMenu = document.getElementById('close_menu');

toggle.addEventListener('click', () => {
  menu.classList.add('main-nav-active');
  ul.classList.add('main-nav-active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('main-nav-active');
  ul.classList.remove('main-nav-active');
});

const speakers = [
  {
    name: 'Matt Roberts',
    textCard: 'Matt has 15 years of market research and analytics working across Radio and press before moving into world of sport in 2008 when he took over as Head of EMEA Research at Eurosport',
    company: 'Formula 1',
    img: './img/speaker1.jpg',
  },

  {
    name: 'Erik Groen',
    textCard: 'Currently Erik is responsible for new business development related to Connectivity for ENGIE Group. ENGIE’s aim is to lead the zero carbon transition as-a-service',
    company: 'Engie',
    img: './img/speaker2.jpg',
  },

  {
    name: 'Doug McKnight',
    textCard: 'Doug McKnight is leading Dow efforts to derive value in safety and productivity across Dows Operations in EMEAI through the adaptation of Industry 4 solutions',
    company: 'Dow',
    img: './img/speaker3.jpg',
  },

  {
    name: 'Francois Blanchard',
    textCard: 'Experienced sales and business developement director with over 18 years demonstrated history of working in Telecommunications industry addressing security and connectivity challenges on global accounts',
    company: 'Truphone',
    img: './img/speaker4.jpg',
  },
  {
    name: 'Dinky Lin',
    textCard: 'Dinky Lin is responsible for consultation on end-to-end IoT  AI solutions and services for various verticals including Intelligent Buildings  Smart Cities domains transportation agriculture  logistics',
    company: 'China Mobile International (UK) Ltd',
    img: './img/speaker5.jpg',
  },

  {
    name: 'Nandini Chauhan',
    textCard: 'Nandini is Technical Lead at FINN  Banking of Things. Works for ING since 2013 first as an IT Consultant for Sogeti later joined ING as an internal employee in 2015',
    company: 'FINN - Banking of Things',
    img: './img/speaker6.jpg',
  },
];

const speaker = document.getElementById('speakers');
speakers.forEach((item) => {
  speaker.innerHTML += `
<div class="speaker-card">
<img src="${item.img}" class="card-img">
<div class="card-flot">
<h2 class="speaker-name">${item.name}</h2>
<h3 class="company">${item.company}</h3>
<p class="speaker-dis">${item.textCard}</p>
</div>
</div>
`;
});
