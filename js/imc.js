const bCalcular = document.querySelector("#btnCalcular");

bCalcular.addEventListener("click",()=>
{
    var peso = parseFloat(document.querySelector("#peso").value);
var altura = parseFloat(document.querySelector("#altura").value);
calcularImc(peso,altura);
});

function calcularImc (p1,p2){
    var resultado = p1 /(p2*p2);
document.querySelector("#resultado").value = resultado
}
