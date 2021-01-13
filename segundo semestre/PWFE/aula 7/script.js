function fazlogo() {
  let v1 = document.getElementById("v1").value;
  let v2 = document.getElementById("v2").value;
  let saida = document.getElementById("saida");
  saida.value = soma(v1, v2);
}
function soma(parametro1, parametro2) {
  return parseInt(parametro1) + parseInt(parametro2);
}
