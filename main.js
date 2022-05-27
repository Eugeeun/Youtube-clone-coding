'use strict'

const toggleBtn = document.querySelector('.info .metadata .moreBtn');
const titleinfo = document.querySelector('.titleandButton .title');

toggleBtn.addEventListener('click',() => {
  toggleBtn.classList.toggle('clicked');
  titleinfo.classList.toggle('clamp');
});