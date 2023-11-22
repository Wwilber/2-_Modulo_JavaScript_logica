let nota = 0
let soma = 0

const input = require('readline-sync')

for (let i = 1; i <= 3; i++) {
  nota = Number(input.question('Digite a nota ${i} do aluno: '))
  soma += nota
}
console.log('A média é: ' + soma / 3)
