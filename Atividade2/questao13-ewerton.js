/* Equipe C, Aluno: Ewerton Maciel*/
/* 13. De acordo com o array abaixo. Resolva as seguintes questões: */
let resultadoConcurso = [
    {candidato: "Renata Soares", nota: 7.8, idade: 29},
    {candidato: "Marcos Texeira", nota: 7.8, idade: 26},
    {candidato: "Priscila Gomes", nota: 8.0, idade: 30},
    {candidato: "João Oliveira", nota: 8.0, idade: 27},
    {candidato: "Adriana Telles", nota: 7.4, idade: 28},
    {candidato: "Fábio Queiroga", nota: 6.4, idade: 20},
    {candidato: "Felipe Soares", nota: 5.0, idade: 18},
    {candidato: "José Dantas", nota: 0.0, idade: 21}
]

/*a. Utilizando o método filter(), gere um novo array contendo os candidatos com nota acima de 7.0. E Imprima o resultado em ordem alfabetica*/
console.log('\nResposta A')
const notaAcimaDeSete = resultadoConcurso
                        .filter(valor => valor.nota > 7.0 ? valor : '')
                        .sort((a, b) => a.candidato < b.candidato ? -1 : a.candidato > b.candidato ? 1 : 0)
console.log(notaAcimaDeSete)

/*b. Sabendo que o concurso somente 3 primeiros são Aprovados, Homologado com nota acima de 7.0 e Desclassificado abaixo de 7.0. Portanto, utilizando o map(), gere um novo array contendo objetos com as propriedades (candidato e situação). Na propriedade candidato deve conter os nomes de todos os candidatos e na propriedade situação deve conter os valores (Aprovado, homologado ou desclassificado) de acordo com a nota de cada um. Depois imprima o array gerado*/
console.log('\nResposta B')
const listaOrdenadaNotas = resultadoConcurso.sort((a, b) => a.nota > b.nota ? -1 : a.nota < b.nota ? 1 : 0)
const resultadoFinal = listaOrdenadaNotas.map(function (valor, indice){
    if(indice <= 2){
        return {candidato: valor.candidato, situacao:'Aprovado'}
    }else if ( valor.nota >= 7){
        return {candidato: valor.candidato, situacao: 'Homologado'}
    }else{
        return {candidato: valor.candidato, situacao: 'Desclassificado'}
    }
})

console.log(resultadoFinal)


/*c. Utilizando a função reduce(), que retorna a média geral do concurso do array resultadoConcurso. Portanto, utilize uma função que calcula o valor da média no método reduce().*/
console.log('\nResposta C')
const media = resultadoConcurso.reduce((acumulador, valor) => acumulador += valor.nota, 0)/resultadoConcurso.length
console.log(media)