const distancia = document.querySelector("#dis");
const tamanho = document.querySelector("#TPEntrega");
const destino = document.querySelector("#destino");

const divresult = document.createElement("div");
divresult.setAttribute("class", "re");
const sec = document.createElement("section");
sec.setAttribute("class", "res");
const txt1 = document.createElement("p");
txt1.innerText = "A simulcao de R$";
const result = document.createElement("p");
result.setAttribute("id", "resultado");
const txt2 = document.createElement("p");
txt2.innerText = " por KM rodado";
const resultado = document.querySelector("#result");
divresult.appendChild(sec);
sec.appendChild(txt1);
sec.appendChild(result);
sec.appendChild(txt2);

const pequena = 1.1;
const media = 1.75;
const grande = 2;

function simulacao() {
  if (tamanho.value === "small") {
    destino.appendChild(divresult);
    result.innerText = distancia.value * pequena;
  } else if (tamanho.value === "median") {
    destino.appendChild(divresult);
    result.innerText = distancia.value * media;
  } else if (tamanho.value === "big") {
    destino.appendChild(divresult);
    result.innerText = distancia.value * grande;
  }
}
