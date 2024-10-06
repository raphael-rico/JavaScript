var nd = new Date()
var h = nd.getHours()
if (h>12 && h<18) {
    var g = window.document.querySelector("div#fir")
    var st = `<p id="par" >Agora são ${h} horas! (Boa tarde!)</p>`
    g.innerHTML = st
    document.body.style.backgroundColor= 'orange'
    var t = window.document.querySelector("div#sec")
    var qs = `<img id="entar" src="sun-3275314_64.jpg" alt="Entardecer">`
    t.innerHTML = qs
}else if (h>=18 || h<6){
    var g = window.document.querySelector("div#fir")
    var st = `<p id="par" >Agora são ${h} horas! (Boa noite!)</p>`
    g.innerHTML = st
    document.body.style.backgroundColor= 'black'
    var t = window.document.querySelector("div#sec")
    var qs = `<img id="anoi" src="tree-736877_640.jpg" alt="Anoitecer">`
    t.innerHTML = qs
}
else{
    var g = window.document.querySelector("div#fir")
    var st = `<p id="par" >Agora são ${h} horas! (Bom dia!)</p>`
    g.innerHTML = st
    var t = window.document.querySelector("div#sec")
    var qs = `<img id="dia" src="sailing-boat-1593613_640.jpg" alt="Dia">`
    t.innerHTML = qs
}
