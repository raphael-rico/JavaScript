var n = window.prompt('Digite um número')
function parimp(n){
    if (n%2==0){
        window.document.write(`<article style="height: 100vh; width: 100vw; background-color: darkcyan; text-align:center; padding-top: 30vh; font-size: 1.3em; ">O número digitado era par</article>`)
    }else{
        window.document.write(`<article style="height: 100vh; width: 100vw; background-color: darkcyan; text-align:center; padding-top: 30vh; font-size: 1.3em; ">O número digitado era ímpar</article>`)
    }
}