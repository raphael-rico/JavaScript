function acao (){
var vetor = []
for (c=0;c<5;c++){
    var res = document.getElementById("iform")
    vetor[c] = res.value
}
document.write(`<p style="text-align: center; margin-top: 30vh; color: blue;">Os valores do input dentro do vetor de 3 elementos ficou preenchido com "${vetor[0]}" e "${vetor[1]}" e "${vetor[2]}".</p>`)}

