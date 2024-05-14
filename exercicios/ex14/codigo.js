function acao (){
let vetor = []
for (c=0;c<5;c++){
    var res = document.getElementById("iform")
    vetor[c.innerText] = res.value
}
document.write(`Os valores dos inputs foram ${vetor[0].value}`)}