var nome = document.querySelector("#nome");
var idade = document.querySelector("#age");
var botao = document.querySelector("#btn");

botao.addEventListener("click", () => {

    if (idade.value < 12) {
        alert(nome.value + "  é uma crianca");
    } else if (idade.value < 20) {
        alert(nome.value + "  é um adolescente");
    } else if (idade.value < 45) {
        alert(nome.value + "  é um adulto(a)");
    } else if (idade.value < 80) {
        alert(nome.value + "  é um senhor(a)");
    } else {
        alert("Passou da hora");
    }
})
