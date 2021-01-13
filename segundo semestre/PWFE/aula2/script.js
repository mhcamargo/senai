var formi = document.querySelector("#formi");

formi.addEventListener("submit", processaForm);

function processaForm() {
  var nome = document.getElementById("nome").value;
  var idade = document.getElementById("age").value;
  var sexo = document.getElementById("gender").value;
  var fase;

  if (idade < 10) {
    fase = "criança";
  } else if (idade < 15) {
    fase = "adolecente";
  } else if (idade < 20) {
    fase = "jovem";
  } else if (idade < 40) {
    fase = "adulto";
  } else {
    fase = "idoso";
  }

  alert(
    "Olá " +
      nome +
      " voçê tem " +
      idade +
      " anos, é do sexo " +
      sexo +
      " e é " +
      fase
  );
}
