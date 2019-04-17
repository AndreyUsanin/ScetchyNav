import '../styles/index.scss';


const toggler = document.querySelector('.nav__toggler');
const menu = document.querySelector('.nav__menu');

toggler.addEventListener('click', menuToggle);

function menuToggle(e) {
  e.preventDefault();
  menu.classList.toggle('open');
}

