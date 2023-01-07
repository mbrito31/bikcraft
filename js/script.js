// Ativar links do menu
const links = document.querySelectorAll(".header-menu a")

function ativarLink(link) {
  const url = location.href
  const href = link.href
  if (url.includes(href)) {
    link.classList.add("ativo")
  }

  console.log(url)
}

links.forEach(ativarLink)

// ATIVAR ITENS DO ORÇAMENTO

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro){
  const elemento = document.getElementById(parametro)
  if (elemento) {
    elemento.checked = true
  }
  
}  

parametros.forEach(ativarProduto)

// PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event) {
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute("aria-controls")
  const resposta = document.getElementById(controls)
 
  
  resposta.classList.toggle("ativa")
  const ativa = resposta.classList.contains("ativa")
  pergunta.setAttribute("aria-expanded", ativa)
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

// GALERIA DE BICICLETA
 /* const galeria = document.querySelectorAll('.bicicleta-imagens img')
 const galeriaContainer = document.querySelector(".bicicleta-imagens")

 function trocarImagem(event) {
  const img = event.currentTarget
  matchMedia('(min-width: 100px)')
  galeriaContainer.prepend(img)
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem)
}

galeria.forEach(eventosGaleria) */

// Animação 

if(window.SimpleAnime) {
  new SimpleAnime()
}
