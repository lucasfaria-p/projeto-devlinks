function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute ('src', './assets/lucas1.png')
  } else {
    img.setAttribute ('src', './assets/fotor-20250609193358.png')
  }
  
}