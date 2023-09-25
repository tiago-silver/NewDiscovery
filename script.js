
function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("ligth")

  const img = document.querySelector("#profile img")
  if(html.classList.contains("ligth")){
    img.setAttribute("src","./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Mayke Brito sorrindo e usando óculos escuros com fundo em gradiente"
    )
  }else{
    img.setAttribute("src","./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Mayke Brito sorrindo e usando óculos com fundo em gradiente"
    )
  }

}

