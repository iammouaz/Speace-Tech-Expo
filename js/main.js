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
