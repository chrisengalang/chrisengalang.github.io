function scrollTrigger() {
  const div = document.getElementById('navbackground')
  const menuTexts = document.getElementsByClassName('menu-text')
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    div.classList.remove('h-2')
    div.classList.add('h-full')

    for (let text of menuTexts) {
      text.classList.remove('text-black')
      text.classList.add('text-white')
    }

  } else {
    div.classList.remove('h-full')
    div.classList.add('h-2')

    for (let text of menuTexts) {
      text.classList.remove('text-white')
      text.classList.add('text-black')
    }
  }
}

window.addEventListener('scroll', () => scrollTrigger())

