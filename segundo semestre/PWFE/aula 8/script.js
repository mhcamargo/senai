//Obter
const lbName = document.querySelector("#lbname");
//Funcao que cria um cookie (arquivo)
function createCookie(name, data) {
  let dateExpires = "Monday, September 21,2022 at 9:28:12 AM";
  document.cookie = name + "=" + data + ";" + dateExpires;
}
//Função que lê todos os cookie e tentea encontar o cookie desta página
function readcookie(name) {
  let vName = name + "=";
  let vC = document.cookie.split(";"); //Lê todos os cookie e retorna um vetor
  for (let i = 0; i < vC.length; i++) {
    let c = vC[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    } //Eliminar espaço em branco
    if (c.indexOf(vName) == 0) {
      return c.substring(vName.length, c.length);
    }
  }
  return "";
}
//Função que caso o cookie não exista crie ele, se existir só lê o que tem nele
function verifyCookie() {
  let username = readcookie("username");
  if (username != "") {
    //Se o cookie  foi encontrado
    lbName.innerText = username;
  } else {
    //Se não foi encontrado, será criado
    username = prompt("Digite seu nome: ", "");
    if (username != "" && username != null) {
      //Verifica se o usuario digitou o nome
      createCookie("username", username);
    }
  }
}
