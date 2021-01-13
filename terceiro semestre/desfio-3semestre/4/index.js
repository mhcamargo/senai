const vl = document.querySelector("#vl1");
const botao = document.querySelector("#btn");

var impar = 0;
var par = 0;

botao.addEventListener("click", () => {
    let vetor = vl.value.split(' ');
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 != 1) {
            par++;
        } else {
            impar++;
        }
    }
    let resultado = "";
    if (par > 0) {
        if (par > 1) resultado += `${par} pares `;
        else resultado += `${par} par`;
    }
    if (impar > 0) {
        if (par > 1) resultado += `${impar} impares `;
        else resultado += `${impar} impar`;
    }
    alert(resultado)
})