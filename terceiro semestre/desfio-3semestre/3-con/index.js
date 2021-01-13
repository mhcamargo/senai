var vl1 = document.querySelector("#vl1");
var vl2 = document.querySelector("#vl2");
var vl3 = document.querySelector("#vl3");
var botao = document.querySelector("#btn");

botao.addEventListener("click", () => {
    if (vl1.value == vl2.value && vl2.value == vl3.value) {
        alert("Tringulo equilatelo");
    } else if (vl1.value != vl2.value && vl2.value != vl3.value && vl3.value != vl1.value) {
        alert("Triangulo escaleno");
    }
    else {
        alert("Triangulo isóceles")
    }
})