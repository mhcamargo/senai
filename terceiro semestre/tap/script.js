const descricao = document.getElementById("desc")
const patrocinadores = document.getElementById("patroci")
const rh = document.getElementById("rh")
const gerentProj = document.getElementById("g-proj")
const patrocinador = document.getElementById("patro")
const client = document.getElementById("clien")
const data = document.getElementById("dat-con")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {

    var doc = new jsPDF()
    doc.text(descricao.value, 10, 10)
    doc.text(patrocinadores.value, 10, 20)
    doc.text(rh.value, 10, 30)
    doc.text(gerentProj.value, 10, 40)
    doc.text(patrocinador.value, 10, 50)
    doc.text(client.value, 10, 60)
    doc.text(data.value, 10, 70)
    doc.save('teste.pdf')
})      