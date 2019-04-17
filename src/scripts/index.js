import '../styles/index.scss';

// const toggler = document.querySelectorAll('.nav__toggler');
// const menu = document.querySelector('.nav__menu');

// toggler.addEventListener('click', menuToggle);

// function menuToggle(e) {
//   e.preventDefault();
//   menu.classList.toggle('open');
// }



// +++++++++++++++


// function classToggle() {
//   const navs = document.querySelectorAll('.Navbar__Items')
  
//   navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
// }

// document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

function menuToggle() {
  const menus = document.querySelectorAll('.nav__menu');

  menus.forEach(menu => {
    menu.classList.toggle('open');
  });
}

const togglers = document.querySelectorAll('.nav__toggler');
togglers.forEach(toggler => {
  toggler.addEventListener('click', menuToggle);
});