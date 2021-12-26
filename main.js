const toggleBtn = document.querySelector('.nav-burger-btn');
const menu = document.querySelector('.nav-menu');
const icons = document.querySelector('.nav-icon');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});