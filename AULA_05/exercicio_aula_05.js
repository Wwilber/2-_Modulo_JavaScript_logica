console.clear()
console.log('___DESAFIO 01: CONTAGEM REGRESSIVA:___')

let numContar = 10
while (numContar >= 1) {
  console.log(numContar--)
}

console.clear()
console.log('___DESAFIO 02: NÚMEROS PRIMOS:___')

let num = Number(prompt('Digite um Número:'))
let primo = true
let divisivel = 2

while (divisivel < num) {
  if (num % divisivel == 0) {
    primo = false
    break
  }
  divisivel++
}

console.log(
  num,
  primo == true ? 'este número é primo' : 'este número não é primo'
)

console.clear()
console.log('___DESAFIO 03: SOMA DE NÚMEROS PARES:___')

let somaValores = 0
let valorInt = 0

do {
  valorInt = Number(prompt('Insira um valor inteiro:'))
  if (valorInt % 2 == 0) {
    soma += valorInt
  }
} while (valorInt != 0)

console.log(somaValores)
