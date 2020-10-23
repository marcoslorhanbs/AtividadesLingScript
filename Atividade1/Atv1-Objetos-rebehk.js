
// \o/ OBJETOS \o/

// => Conceitos: 
    // é uma coleção propriedades - uma associação de  chave : valor 
    const objeto = { chave : 'valor' }
 //tipos de objetos:
    //objeto nativo - Arrays,funções,datas,String,Numeros
    //objeto do navegador - Elementos do Html(<divid=“x></div>)

//▪ Definindo um objeto:
    //objeto literal:
       let literal = {objeto : 'literal'}
    // operador new Object()
        let operador = new Object()
        console.log( typeof Object )
        operador.chave = "valor"
        console.log(operador)
/*Façam exemplos, criando um objeto, adicionando propriedade,
populando as propriedades, acessado os valores das
propriedades*/
   let criarObj= {
       adicionando : 'propriedade'
   }

   criarObj.linguagem = "javaScript"
   criarObj["curso"] = "ADS"
   
   console.log(criarObj)

//Iterando sobre os objetos
    //o For ... in
   const personagem = {
       nome : "alex",
       filme : "madagascar",
       genero : "animação"
   }

   for(let elenco in personagem){
        console.log(elenco + " = ", personagem[elenco])
   }

//o Uso do método Object.Keys()
   console.log(Object.keys(personagem))

//Diferença entre valor vs referência
let valor1 = 10
let valor2 = 5
valor2 = valor2 +valor1
console.log(valor1,valor2)

let referencia1 = {
    obj : 1
}
let referencia2 = referencia1
referencia2.array = 2
console.log(referencia1 , referencia2)
    