const burger = document.querySelector('#burger');
const navbar = document.querySelector('#nav-links');
const navItem = document.getElementsByClassName('navbar-item');

burger.addEventListener('click', () => {
  navbar.classList.toggle('is-active');
})

navItem.forEach((item) => {
  item.addEventListener('click', () => {
    navbar.classList.remove('is-active');
  })
})