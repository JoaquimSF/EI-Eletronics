function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  //if(html.classList.contains('dark')){
  // html.classList.remove("dark")
  //}else {
  //html.classList.add('dark')

  const img = document.querySelector("#profile img")

  if (html.classList.contains("dark")) {
    img.setAttribute("src", "./assets/logo-dark1.png")
  } else {
    img.setAttribute("src", "./assets/logo-light.png")
  }
}
