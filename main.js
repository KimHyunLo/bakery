const toggleBtn = document.querySelector('.navBtn');
const menu = document.querySelector('.navMenu');
const icons = document.querySelector('.navIcons');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
  nav.classList.toggle('active');
});