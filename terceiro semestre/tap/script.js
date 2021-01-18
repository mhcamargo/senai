const descricao = document.getElementById("desc");
const patrocinadores = document.getElementById("patroci");
const rh = document.getElementById("rh");
const gerentProj = document.getElementById("g-proj");
const patrocinador = document.getElementById("patro");
const client = document.getElementById("clien");
const data = document.getElementById("dat-con");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    if (descricao.value !== '' && patrocinadores.value !== '' && rh.value !== '' && gerentProj.value !== '' && patrocinador.value !== '' && client.value !== '' && data.value !== '' && data.value !== '') {
        var doc = new jsPDF();
        doc.addImage('./princ.png', 'PNG', 25, 0, 165, 233);
        doc.setFontSize(12);
        doc.text(descricao.value, 50, 38);
        doc.text(patrocinadores.value, 50, 49);
        doc.text(rh.value, 83, 60);
        doc.text(gerentProj.value, 83, 121);
        doc.text(patrocinador.value, 83, 131);
        doc.text(client.value, 83, 141);
        doc.text(data.value, 83, 152);
        doc.save('projeto.pdf');
    } else {
        alert("Preencha todos os campos obrigatorios.");
    }
})      