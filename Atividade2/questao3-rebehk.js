
/* Desenvolva uma função que irá calcular a raiz quadrada de três números sorteados
entre 1 a 100. Utilizem os métodos random() e sqrt() do objeto Math. Pesquisem na
web como utilizar random() que gere números aleatórios entre 1 a 100.*/

let exemp = Math.random()
console.log(exemp)

exemp = Math.random() * 10
console.log(exemp)

exemp= Math.floor(Math.random() * 10)
console.log(exemp)


let aleatorio, raiz, n

function raizAleatoria() {
    for (n = 0; n < 3; n++){
        aleatorio = Math.floor(Math.random() * 100)
        raiz = Math.sqrt(aleatorio)
        console.log(aleatorio + " = ", raiz)
    }
}

raizAleatoria()