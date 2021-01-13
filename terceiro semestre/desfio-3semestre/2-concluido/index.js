var nome = document.querySelector("#nome");
var peso = document.querySelector("#peso");
var altura = document.querySelector("#hgt");
var botao = document.querySelector("#btn");

botao.addEventListener("click", () => {
    imc = peso.value / (altura.value * altura.value);

    if (imc < 18.5) {
        alert(nome.value + " esta abaixo do peso");
    } else if (imc > 18.5 && imc < 25) {
        alert(nome.value + " esta com o peso normal")
    } else if (imc > 25 && imc < 30) {
        alert(nome.value + " esta com sobrepeso")
    } else if (imc > 30 && imc < 35) {
        alert(nome.value + " esta com obesidade grau 1")
    } else if (imc > 35 && imc < 40) {
        alert(nome.value + " esta com obesidade grau 2")
    } else {
        alert(nome.value + " esta com obesidade morbida");
    }

})