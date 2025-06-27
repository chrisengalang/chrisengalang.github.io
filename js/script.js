function scrollTrigger() {
  const div = document.getElementById('navbackground')
  const menuTexts = document.getElementsByClassName('menu-text')
  const rect = div.getBoundingClientRect()

  console.log(`RectTop ${rect.top} Window height ${window.innerHeight} RectBottom ${rect.bottom}`)

  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    div.classList.remove('h-2')
    div.classList.add('h-full')

    for (let text of menuTexts) {
      text.classList.remove('text-black')
      text.classList.add('text-white')
    }

  } else {
    div.classList.remove('h-full')
    div.classList.add('h-2')
  }
}

window.addEventListener('scroll', () => scrollTrigger())

