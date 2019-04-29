import '../styles/index.scss';

import offside from 'offside-js';



var myOffside = offside(".nav-offside", {
  slidingElementsSelector: ".offside__container",
  buttonsSelector: ".nav__toggler, .offside__close",
  beforeOpen: function () {
    document.body.classList.add('offside-js--interact');
  },

  afterOpen: function () {
    document.body.classList.add('overflow-y');
  },
  beforeClose: function () {

  },
  afterClose: function () {
    document.body.classList.remove('offside-js--interact');
    document.body.classList.remove('overflow-y');
  },
});

var overlay = document.querySelector(".page-overlay");
overlay.addEventListener("click", myOffside.closeAll);
