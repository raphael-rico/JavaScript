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
    if (sex.checked && res >=0 && res <=14){
        var qq = document.getElementById('img')
        qq.innerHTML= `<img id="bbm" src="estilos/babym.jpg" alt="Bebe Masculino">`
    }
    if(sex.checked && res >=15 && res <= 59){
        var qqm = document.getElementById('img')
        qqm.innerHTML=`<img id="hmi" src="estilos/manm.jpg" alt="Homem de meia idade">`
    }
    if (sex.checked && res >= 60 && res <= 129){
        var qqv = document.getElementById('img')
        qqv.innerHTML=`<img id="hv" src="estilos/manv.jpg" alt="Homem velho">`
    }
    var sexf = document.getElementById('iradio2')
    if (sexf.checked && res >=0 && res <=14){
        var qqu = document.getElementById('img')
        qqu.innerHTML=`<img id="cm" src="estilos/babyw.webp" alt="Crinça menina">`
    }
    if (sexf.checked && res >=15 && res <= 59){
        var mmi = document.getElementById('img')
        mmi.innerHTML=`<img id="mum" src="estilos/womanm.jpg" alt="Mulher de meia idade">`
    }
    if (sexf.checked && res >= 60 && res <= 129){
        var nsm = document.getElementById('img')
        nsm.innerHTML=`<img id="nam" src="estilos/womanv.webp" alt="Mulher velha">`
    }
}

