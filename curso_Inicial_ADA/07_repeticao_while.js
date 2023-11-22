// laços de repetição:
// leitura de dados no console do nodejs.
//
const input = require('readline-sync')

const numero_sorteado = 5

let numero = Number(input.question('qual número voce escolhe?'))

while (numero !== numero_sorteado) {
  console.log('Você errou o número! Tente novamente...')
  numero = Number(input.question('qual número voce escolhe?'))
}
console.log('Você acertou!!!')
