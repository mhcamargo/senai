const nome = document.getElementById("nome");
const opcoes = document.getElementById("sel");
const table_body = document.getElementById("tableBody");

function addlinhas() {
  if (opcoes.value != "Status" && nome.value != "") {
    //Cria os elementos HTML (TR e TD) Linhas e colunas
    const linha = document.createElement("tr");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    //Atribui valores entre as colunas TD
    col1.innerText = nome.value;
    col2.innerText = opcoes.value;
    col3.innerHTML =
      "<input type='button' value=' Alterar ' onclick='updateLinhas(this)'/>";
    col3.innerHTML +=
      "<input type='button' value=' Excluir ' onclick='deliteLinhas(this)'/>";
    //Inclui objetos HTML filhos para linhas tr (as colunas)
    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    //Acrencenta a linha no corpo da tabela
    table_body.appendChild(linha);
    //Limpar os campos
    nome.value = "";
    opcoes.value = "Status";
  }
}
function deliteLinhas(e) {
  e.parentNode.parentNode.remove();
}
function updateLinhas(e) {
  e.parentNode.parentNode.cells[0].setAttribute("contenteditable", "true");
  e.parentNode.parentNode.cells[1].setAttribute("contenteditable", "true");
  e.parentNode.parentNode.cells[2].innerHTML =
    "<input type='button' value=' Concluir ' onclick='concluida(this)'/>";
}
function concluida(e) {
  e.parentNode.parentNode.cells[0].setAttribute("contenteditable", "false");
  e.parentNode.parentNode.cells[0].setAttribute("contenteditable", "false");
  e.parentNode.parentNode.cells[2].innerHTML =
    "<input type='button' value=' Alterar ' onclick='updateLinhas(this)'/>" +
    "<input type='button' value=' Excluir ' onclick='deliteLinhas(this)'/>";
}
function savecookie() {
  let conteudo = "";
  for (let i = 1; i < table_body.parentNode.rows.length; i++) {
    conteudo += table_body.parentNode.rows[i].cells[0].innerHTML + "-";
    conteudo += table_body.parentNode.rows[i].cells[1].innerHTML + "*";
  }
  criarCookie("presenca", conteudo);
  alert("Cookie salvo");
}
function criarCookie(nome, valor) {
  let dtExpira = "expires = Tue, 01 Jan 2023 12:00:00 UTC";
  document.cookie = nome + "=" + valor + ";" + dtExpira;
}

function lerCookie(nome) {
  let vnome = nome + "=";
  let ca = document.cookie.split(";"); //Retorna um vetor com todos os cookies
  for (let i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    } //Eliminar caracteres em branco
    if (c.indexOf(vnome) == 0) {
      return c.substring(vnome.length, c.length);
    }
  }
  return "";
}

function reload() {
  let biscoito = lerCookie("presenca");
  let linhas = biscoito.split("*");
  for (let i = 0; i < linhas.length - 1; i++) {
    let colunas = linhas[i].split("-");
    const linha = document.createElement("tr");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    col1.innerText = colunas[0];
    col2.innerText = colunas[1];
    col3.innerHTML =
      "<input type='button' value=' Alterar ' onclick='updateLinhas(this)'/>";
    col3.innerHTML +=
      "<input type='button' value=' Excluir ' onclick='deliteLinhas(this)'/>";
    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    table_body.appendChild(linha);
  }
}
