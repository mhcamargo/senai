const vl1 = document.getElementById("vl1").parseInt
const vl2 = document.getElementById("vl2").parseInt
const vl3 = document.getElementById("vl3")
const result = document.getElementById("result").style.display = "none"

const btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    let soma = parseInt((vl1 + vl2 ) / vl3.value)

    console.log(soma)
    //result.innertext = soma.value

})