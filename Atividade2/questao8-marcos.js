let frase = "  A      voz   do  povo     é    a voz do     pessoal    "
function EspacoBranco(string)
{
    var novaString = string.trim()
    return novaString
}

function EntrePalavras (string)
{
    let novaFrase = string.split(' ')
    while(novaFrase.indexOf('') != -1){
        novaFrase.splice(novaFrase.indexOf(''),1)
    }
    let resultado = novaFrase.join(' ')
    return resultado
}

frase = EspacoBranco(frase)
frase = EntrePalavras(frase)
console.log(frase)

