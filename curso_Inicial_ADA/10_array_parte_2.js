// ARRAY - PARTE 2 - MÉTODOS DE ARRAYS:

const arr1 = [30, 12, 45, 34, 29, 34]
let arr2 = []
// FATIAMENTO: slice:
console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

// ADICIONANDO ELEMENTOS: push | unshift
console.log('array antes de adicionar', arr2)
arr2.push(10)
arr2.push(20, 30, 40)
console.log('array antes de adicionar com unshift', arr2)
arr2.unshift(0)
console.log('array depois de adicionar com unshift', arr2)

// REMOVENDO ELEMENTOS:
console.log('array ANTES de REMOVER com o pop', arr2)
const elementoRemovido = arr2.pop() //remove o ultimo elemento. Não funciona indicando o indice do array.
console.log('array depois de REMOVER com o pop', arr2)
console.log('o elemento removido foi:', elementoRemovido)

console.log('array ANTES de REMOVER com o shift', arr2)
const elementoRemovido2 = arr2.shift() //remove o primeiro elemento. Não funciona indicando o indice do array. tem função de callback
console.log('o elemento removido foi:', elementoRemovido2)

arr2.splice(1, 3) // - apaga mais de um elemento splice(index, deleteCount)
// concatenação de arrays:
console.log(arr1)
console.log(arr2)

console.log(arr1.concat(arr2))

// buscando elementos: indexOf / lastIndextOf:
let indiceDoElemento34 = arr1.indexOf(34)
console.log(indiceDoElemento34)

console.log(arr1)

let indiceDoUltimoElemento34 = arr1.lastIndexOf(34)
console.log(indiceDoUltimoElemento34)

//descobrindo a existência de um elemento:

console.log(arr1)

console.log(arr1.includes(10))
console.log(arr1.includes(12))

// inverter um array:

console.log(arr1.reverse())

const array = [
  1,
  2,
  'henrique',
  '27',
  'professor',
  'front end',
  'ada',
  3,
  4,
  5,
  'suel',
  '18',
  'front End',
  'full stack',
  'cc',
  6,
  7,
  8
]

const infoUser1 = array.splice(2, 5)
console.log(infoUser1)
console.log(array)

const infoUser2 = array.splice(5, 5)
console.log(infoUser2)

console.clear()

const notas = [10, 8, 5]
const media = (notas[0] + notas[1] + notas[2]) / 3
console.log(media)

console.clear()

const matriz = [
  [1, 2],
  [3, 4]
]
