function contar (){
var inicio = document.getElementById('inumi')
var passo = document.getElementById('ipasso')
var fim = document.getElementById('inumf')
var work = document.getElementById('pf')
var niv = Number(inicio.value)
var nfv = Number(fim.value)
var npv = Number(passo.value)
var x = niv
while (x<nfv){
    var x = x + npv
    work.innerHTML = `${x} ${work.innerHTML}`
    x = x + npv
}
}