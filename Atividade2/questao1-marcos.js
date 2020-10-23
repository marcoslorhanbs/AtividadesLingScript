/*const x = 10;
const a = 30;
var Expressao1 = x + 2;
var Expressao2 = x ** 2;
var Expressao3 = (3 * Expressao2) + (12 * x) - 4;
var Expressao4 = x + 3 > Math.sqrt(x)
var Expressao5 = Expressao2 + 4 <= Math.sqrt(x*6)
var Expressao6 = Math.sin(2 * a) == 2 * (Math.sin(a) * Math.cos(a))
var Expressao7 = Math.cos(2 * a) == (Math.cos(2 * a) - Math.sin(2 * a))

//a) a diferença entre 1 == "1a", 1 == "1" e 1 === "1":
// a diferença entre 1 == "1a"  é clara pois existem valores diferentes
// Já quando comparamos 1 == "1" para o JavaScript é o resultado é verdadeiro, pois nao depende do tipo de dados.
// Diferente quando utilizamos === no caso da comparação: 1 === "1" pois aqui ele irá verificar o tipo estrito,
// ou seja irá verificar o tipo de dados e o valor
// 1 == "1a" : False; 1 == "1" : True; 1 === "1" : False 

*/ 

//b) Qual é o resultado data expressão 10 > x < 20 para const x = 15?
// O resultado por si é verdadeiro pois a ultima comparação é true, 15 é menor que 20
// No caso ele verifica primeiro se 10 >(é maior que) x(15) que vai dar False, porem quando compara x < 20 dá True.
// Entao o ultimo caso é o que vai importar pro JS.
const x = 15
Expre = 10 > x < 20
console.log(Expre);