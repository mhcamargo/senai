//O java Script(Linguangem de Programação) Assume o controle dos elementos HTML
var botao = document.querySelector("#botao");
var quadro = document.querySelector("#quadro");

//Alterar os atributos e eventos dos elementos HTML
botao.setAttribute("src", "./img/link1.png"); //Atributo
botao.setAttribute("class", "botoes"); //Atributo
botao.addEventListener("click", click); //Evento = Método com um comportamento
//Atributos e eventos do quadro
quadro.setAttribute("class", "quadros");
quadro.setAttribute("src", "./paginas/pag0.html");

function aleatorio() {
  var aleatorio = Math.floor(Math.random() * 4);
  return aleatorio;
}
function click() {
  quadro.setAttribute("src", "./paginas/pag" + aleatorio() + ".html");
}
