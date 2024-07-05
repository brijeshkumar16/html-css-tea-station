const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const navBtn = document.getElementById('nav-btn');
const closeBtn = document.getElementById('close-btn');
const nav = document.getElementById('nav');

navBtn.addEventListener('click', () => {
  nav.classList.add('showNav');
});
closeBtn.addEventListener('click', () => {
  nav.classList.remove('showNav');
});
