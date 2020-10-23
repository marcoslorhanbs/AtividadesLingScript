//Atividade 1
//Equipe C, Aluno: Ewerton
//Conceito de função:

//FUNÇÕES
//Declarando funções
function nomeDaFuncao (parametro1 = 1, parametro2 = 2){
    return parametro1 * parametro2
}

//Função nomeada,
function nomeada(){console.log("Função nomeada")} 
nomeada()

//Expressoes de funções

//Função anonima 
const anonima = function (){ return "Função anônima"}
console.log(anonima())

//Função arrow
const arrow = () => "Função arrow"
console.log(arrow())

/*Chamando função e funções aninhadas*/

function getHipotenusa (catetoA, catetoB){
    let a = 0
    function quadrado(x){
        console.log(a)
        return Math.pow(x, 2)
    }
    return quadrado(catetoA) + quadrado(catetoB)
}

let hipotenusa = getHipotenusa (2, 5)
console.log(hipotenusa)

/*Funções callback*/
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome) {
    console.log(nome)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(e => console.log(e))

/*Funções passada como método*/

const funcoes = {
    soma : function(a, b){return a + b},
    subtracao : function(a,b){return a - b},
    multiplicacao : function(a,b){return a * b},
    divisao : function(a,b){return a / b}
}

let n1 = 10
let n2 = 2

console.log(funcoes.soma(n1,n2))
console.log(funcoes.subtracao(n1,n2))
console.log(funcoes.multiplicacao(n1,n2))
console.log(funcoes.divisao(n1,n2))

//Propriedade arguments
  
function getMedia(){
    let args = Array.from(arguments)
    let soma = args.reduce((acc,val) => acc += val)
    return soma/arguments.length
}

let resultado = getMedia(1,2,3,4,5,6,7,8,9)
console.log(`Média ${resultado}`)


/*Escopo de variáveis locais e globais
  Diferença entre var e let*/

  imprime()//hoisting

  for(let a = 0; a < 5; a++){
      console.log(`for ${a}`)
  }
  console.log(`a global ${a}`)
  
  {let b = 10}
  console.log(`b global ${b}`)
  
  function imprime(){
      let c = 25
      console.log(`c função ${c}`)
  }
  console.log(`c global ${c}`)