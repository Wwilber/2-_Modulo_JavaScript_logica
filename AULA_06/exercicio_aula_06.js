console.clear()
console.log('___DESAFIO 01: SOMA DE NÚMEROS:___')

let soma1 = 0
for (let i = 1; i <= 10; i++) {
  soma1 += i
}
console.log('A SOMA DOS NÚMEROS É:', soma1)

console.clear()
console.log('___DESAFIO 02: OBJETO PESSOA:___')

const pessoa = {
  nome: 'WILBER',
  idade: 51,
  cidade: 'FORTALEZA'
}

for (const dados in pessoa) {
  console.log('As propriedade são: ', pessoa[dados])
}

console.clear()
console.log('___DESAFIO 03: NOMES DE FRUTAS:___')

const fruta = ['Mamão', 'Abacate', 'Uva', 'Limão', 'Caju']
for (const tipos of fruta) {
  console.log(tipos)
}

console.clear()
console.log('___DESAFIO 04: TABUADA:___')

let numTab = Number(prompt('Digite o número que você deseja a tabuada:'))

for (let i = 1; i <= 10; i++) {
  console.log(numTab + ' * ' + i + ' = ' + numTab * i)
}

console.clear()
console.log('___DESAFIO 05: OBJETOS DE VALORES NUMÉRICOS:___')

const valores = {
  valor01: 10,
  valor02: 20,
  valor03: 30,
  valor04: 40
}
let somaV = 0

for (const somatorio in valores) {
  somaV += valores[somatorio]
}

console.log(somaV)

console.clear()
console.log('___DESAFIO 06: MECANISMO DE BUSCA:___')

const arrMec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pesquise = Number(prompt('Insira um valor a ser pesquisado:'))

for (const num of arrMec) {
  if (pesquise == num) {
    console.log('Achei o número:', pesquise)
  } else {
    console.log('Número não Encontrado!')
  }
}

console.clear()
console.log('___DESAFIO 07: ACHEI A LÓGICA:___')

const numero = Number(prompt('Insira um valor:'))
const arrayNum = [1]
if (numero >= 2) {
  arrayNum.push(1)
}

for (let i = 3; i <= numero; i++) {
  arrayNum.push(arrayNum[i - 2] + arrayNum[i - 3])
}

console.log(arrayNum)

console.clear()
console.log('___DESAFIO 08: CONTAR VOGAIS:___')

const palavra = prompt('Insira uma palavra:')
let contarVogais = 0

for (let i = 0; i < palavra.length; i++) {
  switch (palavra[i]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      contarVogais++
      break
  }
}
console.log(contarVogais)

console.clear()
console.log('___DESAFIO 09: ORDENAR ARRAYS:___')

const arrayNum1 = [72, 45, 23, 12, 5, 6, 7, 3, 4, 15]
let ordem = 0

for (let i = 0; i < arrayNum1.length - 1; i++) {
  for (let w = i + 1; w < arrayNum1.length; w++) {
    if (arrayNum1[i] > arrayNum1[w]) {
      ordem = arrayNum1[w]
      arrayNum1[w] = arrayNum1[i]
      arrayNum1[i] = ordem
    }
  }
}

arrayNum.sort(function (a, b) {
  return a - b
})

console.log(arrayNum1)

console.clear()
console.log('___DESAFIO 10: SIMULADOR:___')

let nDados = Number(prompt('Qual a quantidade de dados:'))
let nLados = Number(prompt('Qual a quantidade de lados:'))
let nTentativas = Number(prompt('Quantas Tentativas:'))
let soma = 0
let rolInd = 0

for (let j = 1; j <= nTentativas; j++) {
  console.log('Tentativa ', j, ':')
  for (let i = 0; i < nDados; i++) {
    rolInd = parseInt(Math.random() * nLados + 1)
    soma += rolInd
    console.log('Dado ', i + 1, ': ', rolInd)
  }
}

console.log('Soma dos valores: ', soma)
