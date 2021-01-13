
const urlveiculo = "../src/controll/routes/route.veiculos.php";
const urlvaga = "../src/controll/routes/route.Vagas.php";
const urlBase = "http://localhos/Estacionamento/src/controll/routes/";


const IDcad = document.querySelector("#id_v");
const IDCons = document.querySelector("#id_v_consul");
const IDalt = document.querySelector("#id_v_alt");
const IDdel = document.querySelector("#id_v_del");

const placa = document.querySelector("#placa");
const tipo = document.querySelector("#tipo");
const Obscad = document.querySelector("#cadObs");
const Obs = document.querySelector("#obs");

const addBtn = document.querySelector("#addBtn");
const consBtn = document.querySelector("#consBtn");
const altBtn = document.querySelector("#altBtn");
const delBtn = document.querySelector("#delBtn");

const tbobodycars = document.getElementById("tbodycars");

function listar() {
    fetch(urlBase + "route.vagas.php")
        .then((resp) => {
            if (!resp.ok)
                throw new Error("Erro ao executar requisição: " + resp.status);
            return resp.json();
        })
        .then((data) => {
            data.forEach((val) => {
                let row = document.createElement("tr");
                for (let [key, value] of Object.entries(val)) {
                    let col = document.createElement("td");
                    if (key == "total") value = "R$ " + value;
                    col.innerHTML = value;
                    row.appendChild(col);
                }

                row.setAttribute("data-toggle", "modal");
                row.setAttribute("data-target", "#modalExit");
                row.onclick = () => {
                    placabold.innerHTML = val.placa;
                }

                tbodyCars.appendChild(row);

                let pos = vagasvagas.indexOf(parseInt(val.n_vaga));
                vagasvagas.splice(pos, 1);
            })

            vagasvagas.forEach((item) => {
                let option = document.createElement("option");
                option.innerHTML = item;
                listaVagas.appendChild(option);
            })
        })
        .catch((err) => {
            console.error(err.message);
        })

    fetch(urlBase + "route.veiculos.php")
        .then((resp) => {
            if (!resp.ok)
                throw new Error("Erro ao executar requisição: " + resp.status);
            return resp.json();
        })
        .then((data) => {
            data.forEach((val) => {
                let option = document.createElement("option");
                option.innerHTML = val.placa;
                localStorage.setItem(val.placa, JSON.stringify(val));
                listaCadastrados.appendChild(option);
            })
        })
        .catch((err) => {
            console.error(err.message);
        })


}
