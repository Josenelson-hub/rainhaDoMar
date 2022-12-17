const botao = document.querySelector(".botao-menu")
const lista =  document.querySelector(".conteudo-drop")

function drop(e){
lista.classList.toggle("ativo")
}



let fundo = document.querySelector(".conteiner-navbar")
let btn = document.querySelector(".clique")

function mudaCor(e){
    fundo.classList.toggle("ativo")
}




const acordionList = document.querySelectorAll(".acordion dt")

acordionList.forEach((item)=>{
    item.addEventListener("click", activeAccordion)
})

function activeAccordion(){
  this.nextElementSibling
  this.classList.add("ativo")
}
