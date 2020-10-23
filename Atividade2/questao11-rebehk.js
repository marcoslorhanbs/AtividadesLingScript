/* 11. Utilizando o const array = [1, 2, 3, 4, 5, 6] crie um script para gerar:
a)Um novo Array com a metade dos valores de array usando map▪ array.map(e => e / 2)

Um novo Array contendo apenas números pares de array usando filter
▪ array.filter(e => !(e & 1))

c) A soma dos valores de array usando o reduce
▪ array.reduce((s, v) => s + v)*/

const array = [1, 2, 3, 4, 5, 6]

let metadeValor = array.map(e => e / 2)

console.log(metadeValor)

let numPares = array.filter(e => !(e & 1))

console.log(numPares)


let somaValores = array.reduce((soma, valor) => soma + valor)

console.log(somaValores)