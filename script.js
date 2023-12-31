function tooggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto do Mayk Brito sorrindo, usando oculos e" +
        "camisas preta, barba e fundo amarelo."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto do mayk brito sorrindo, usando oculos preto")
  }

  // substituir a imagem
  //se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, manter a imagem normal
}
