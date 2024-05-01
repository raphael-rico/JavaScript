function acao(){
    var nasc = window.document.getElementById('iano')
    Number(nasc.value)
    var res = 2024 - nasc.value
    Number(res)
    var wor = window.document.getElementById('wor')
    if (res != 1 && res != 0){
        wor.innerHTML= `<p>Detectada uma pessoa de ${res} anos em 2024</p>`}
    else {
        switch (res){
            case 1:
                wor.innerHTML= `<p>Detectada uma pessoa de ${res} ano em 2024</p>`
            break
            case 0:
                wor.innerHTML= `<p>Detectada uma pessoa que possui menos de 1 ano em 2024</p>`
            break
                    }
        }
    var sex = window.document.getElementById('iradio')
    if (sex.checked){
        var hm = window.document.getElementById('ide')
        hm.innerHTML= '(Essa pessoa é um homem)'
    }else {
        var ml = window.document.getElementById('ide')
        ml.innerHTML= '(Essa pessoa é uma mulher)'
    }
}

