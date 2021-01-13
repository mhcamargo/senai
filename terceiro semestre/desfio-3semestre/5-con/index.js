var nome = document.querySelector("#nome");
var idade = document.querySelector("#age");
var botao = document.querySelector("#btn");

botao.addEventListener("click", () => {

    umanomaisvelho = (parseInt(idade.value) + 1);
    alert(nome.value + ", voçe no ano que vem vai ter " + umanomaisvelho);

})
