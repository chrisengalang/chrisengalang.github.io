function scrollTrigger() {
  const div = document.getElementById('navbackground')
  const menuTexts = document.getElementsByClassName('menu-text')
  const burgerLines = document.getElementsByClassName('burger-line')
  const scrollY = window.scrollY;

  if (scrollY > 10) {
    div.classList.remove('h-2')
    div.classList.add('h-full')

    for (let text of menuTexts) {
      text.classList.remove('text-black')
      text.classList.add('text-white')
    }

    for (let line of burgerLines) {
      line.classList.remove('bg-indigo-800')
      line.classList.add('bg-white')
    }

  } else {
    div.classList.remove('h-full')
    div.classList.add('h-2')

    for (let text of menuTexts) {
      text.classList.remove('text-white')
      text.classList.add('text-black')
    }

    for (let line of burgerLines) {
      line.classList.remove('bg-white')
      line.classList.add('bg-indigo-800')
    }
  }
}

window.addEventListener('scroll', () => scrollTrigger())

// Responsive burger menu logic
const burger = document.getElementById('burger');
const navlinks = document.getElementById('navlinks');
if (burger && navlinks) {
  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
    navlinks.classList.toggle('hidden');
    navlinks.classList.toggle('flex');
  });
  // Close menu on link click (mobile)
  navlinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navlinks.classList.add('hidden');
        navlinks.classList.remove('flex');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  });
}