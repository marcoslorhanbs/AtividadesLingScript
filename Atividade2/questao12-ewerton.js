/* Equipe C, Aluno Ewerton Maciel*/
/* 12. Dado o seguinte array `empresas`, abaixo. Resolva as seguintes questões: */
const empresas = [
    {nome:'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    {nome:'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975},
    {nome:'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968},
    {nome:'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004},
    {nome:'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006},
    {nome:'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
]

/*a) Utilizando a função filter() de array, escreva uma função que retorna um array contendo as empresas criadas depois dos anos 2000.*/
console.log('\nResposta A')
const empresas2K = empresas.filter(empresa => empresa.anoDeCriacao >= 2000 ? empresa : '')
console.log(empresas2K)

/*b) Utilizando a função map() de array, escreva uma função que retorna um array contendo o nome de cada empresa e de seu CEO.*/
console.log('\nResposta B')
const empresasCEO = empresas.map(empresa => {return {nome:empresa.nome, CEO:empresa.CEO}})
console.log(empresasCEO)
 
/* c) Utilizando a função reduce() de array, escreva uma função que retorna o valor de todas as empresas somadas*/
console.log('\nResposta C')
const valorEmpresas = empresas.reduce((acc, valor) => acc += valor.valorDeMercado, 0)
console.log(valorEmpresas)
