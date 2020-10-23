/* Dados duas strings (um contendo uma frase e outro contendo uma palavra),
determine o número de vezes que a palavra ocorre na frase.
• Exemplo: Para a palavra ANA e a frase : ANA E MARIANA GOSTAM DE
BANANA (2)
Temos que a palavra ocorre 4 vezes na frase.*/

let frase = 'ana e mariana gostam de banana'
let palavra = 'ana'
let contador = 0;

let posicao = frase.indexOf(palavra)

while ( posicao != -1 ) {
   contador++;
   posicao = frase.indexOf( palavra,posicao + 1 )
}

console.log(contador)


