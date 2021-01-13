//Exercicio 1
var nome = document.querySelector("#nome");
var sobrenome = document.querySelector("#s-nome");
var nomecompl = document.querySelector("#nomecomp");

botao.addEventListener("click", nomeinteiro);

function nomeinteiro() {
  var nomecompleto = nome.value + " " + sobrenome.value;

  nomecomp.setAttribute("value", nomecompleto);
}
//Exercicio 2
var valor = document.querySelector("#Vl");
var NParcela = document.querySelector("#Nparc");
var Pdjuros = document.querySelector("#jur");
var btn = document.querySelector("#botao2");

btn.addEventListener("click", jurosSimples);

function jurosSimples() {
  var subtotal =
    parseFloat(Vl.value) + parseFloat(Vl.value) * parseFloat(jur.value);
  var parc = total / parseInt(NParcela.value);
  var total = subtotal + parc;

  Vparc.setAttribute("value", parc);
  TotalFinc.setAttribute("value", total);
}
