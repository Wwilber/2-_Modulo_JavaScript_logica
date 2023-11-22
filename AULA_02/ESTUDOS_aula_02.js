// AULA 02: 01/11/2023:

// VETORES: É uma coleção ordenada de valores. Podemos representar vetores como arrays:
const vetor = [1, 2, 3]

console.log(vetor[0]) // saída: 1 - pois acessa o índice 0 do array;
console.log(vetor[1]) // saída: 2 - pois acessa o índice 1 do array;
console.log(vetor[2]) // saída: 3 - pois acessa o índice 2 do array;

// matriz: array bidimensional. Cada elemento é um array que pode conter vários valores:

const matriz = [
  [1, 2],
  [3, 4]
]

console.log(matriz[0][0]) // saída: 1 = (linha 1, coluna 1)
console.log(matriz[1][1]) // saída: 4 = (linha 2, coluna 2)

const jogoVelha = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
jogoVelha[0][2] = 'x'
jogoVelha[1][1] = '0'
jogoVelha[2][0] = 'x'
jogoVelha[2][2] = '0'
jogoVelha[0][0] = 'x'
jogoVelha[0][1] = '0'
jogoVelha[1][2] = 'x'
jogoVelha[2][1] = '0'

console.log([jogoVelha])

console.clear()

// Métodos de Array:
//lenght:       Propriedade que retorna o número de elementos em um array javascript:
const a = [1, 2, 3]
console.log(a.length)

const arr = [21, 34, 14, 75, 60, 77, 8, 19, 22, 658, 457]
console.log(arr[arr.length])
console.log(arr[arr.length - 1])

//unshift(): Adiciona um elemento no array - no começo:
a.unshift(5)
console.log(a)

//push(): Método para adicionar um elemento no final do array:
a.push(16)
console.log(a)
a.push(22, 25, 19)
console.log(a)

//pop(): método para remover e retornar o último elemento do array:
console.log(a)
const saber = a.pop()
console.log(`utilizado o método POP: ${a} `)
console.log('o numero apagado foi:', saber) // mostra o elemento removido.
console.log(
  '------------------------------------------------------------------------------------'
)

// shift(): o método é usado para remover o primeiro elemento do array:
const arr2 = [21, 34, 14, 75, 60, 77, 8, 19, 22, 658, 457]
console.log(arr2)
arr2.shift()
console.log(`método shift que elemina o primeiro item de um array: ${arr2} `)
console.log(
  '------------------------------------------------------------------------------------'
)
console.clear()
//splice(): é usado para modificar um array, adicionando ou removendo elementos. Aceita dois argumentos: o índice de início e o número de elementos a serem removidos. Pode adicionar novos elementos após os elementos removidos.

const teste = [1, 2, 3, 4, 5, 6, 7, 8]
const t = teste.splice(2, 2)
console.log(`utilizando o método splice: ${t}`)
console.log(
  '------------------------------------------------------------------------------------'
)

const arrax = [21, 34, 14, 75, 60, 77, 8, 19, 22, 658, 457]
const x = arrax.splice(1, 5) // a partir do índice 2, formar o array de 5 itens.
console.log(`utilizando o método splice: ${x}`)
console.log(arrax)
console.log(
  '------------------------------------------------------------------------------------'
)

const arr4 = [21, 34, 14, 75, 60, 77, 8, 19, 22, 658, 457]
const x1 = arr2.splice(0, 2) // a partir do índice 2, formar o array de 5 itens.
console.log(`utilizando o método splice: ${x1}`)
// splice(index, deleteCount)
console.log(
  '------------------------------------------------------------------------------------'
)

const arr5 = [21, 34, 14, 75, 60, 77, 8, 19, 22, 658, 457]
const x2 = arr5.splice(0, 2, '55', '77', '88') // a partir do índice 2, formar o array de 5 itens.
console.log(`utilizando o método splice: ${x2}`)
// splice(index, deleteCount)
console.log(
  '------------------------------------------------------------------------------------'
)

const arr10 = [1, 2, 3, 4, 5]
const xx = arr10.splice(2, 3, 174, 874, 666)
console.log(arr10) // mostra o que ficou no array
console.log(xx) // mostra os elementos apagados

console.log(
  '------------------------------------------------------------------------------------'
)
const arry = [
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
  'front end',
  'full stack',
  'cc',
  6,
  7,
  8
]

const inforUser = arry.splice(2, 5)
// const inforUser2 = arry.splice()
console.log(inforUser)
console.log(arry)
const inforUser2 = arry.splice(5, 5)
// const inforUser2 = arry.splice()
console.log(inforUser2)
console.log(arry)

// includes(): para verificar se no array possui o elemento:

const xv = arry.includes('cc')
console.log(xv)
console.log(arry)
console.clear()

console.clear()

console.log(
  'DESAFIO 01: ------------------------------------------------------------------------------------'
)

function verificarElegibilidadeVoto(idade, nacionalidade) {
  if (idade >= 16 && nacionalidade == 'brasileiro') {
    console.log('true')
  } else {
    console.log('false')
  }
}

verificarElegibilidadeVoto(16, 'brasileiro')
verificarElegibilidadeVoto(15, 'brasileiro')
verificarElegibilidadeVoto(18, 'brasileiro')
verificarElegibilidadeVoto(16, 'eua')
verificarElegibilidadeVoto(15, 'eua')
verificarElegibilidadeVoto(18, 'eua')

console.log(
  'DESAFIO 02: ------------------------------------------------------------------------------------'
)

function aprovarEmprestimo(salario, scoreDeCredito, idade) {
  if (salario >= 5000 && scoreDeCredito >= 700 && idade >= 18) {
    console.log('true')
  } else {
    console.log('false')
  }
}
aprovarEmprestimo(5001, 701, 19)
aprovarEmprestimo(5000, 700, 18)
aprovarEmprestimo(4999, 700, 18)
aprovarEmprestimo(5000, 699, 18)
aprovarEmprestimo(5000, 700, 17)

console.log(
  'DESAFIO 03: ------------------------------------------------------------------------------------'
)
function verificarCompatibilidade(navegador, so) {
  if (
    (navegador == 'Chrome' || navegador == 'Firefox') &&
    (so == 'Windows' || so == 'Mac')
  ) {
    console.log('true')
  } else {
    console.log('false')
  }
}
verificarCompatibilidade('Chrome', 'Windows')
verificarCompatibilidade('Chrome', 'Mac')
verificarCompatibilidade('Firefox', 'Windows')
verificarCompatibilidade('Firefox', 'Mac')
verificarCompatibilidade('Firefox', 'sony')
verificarCompatibilidade('Safari', 'Mac')

console.log(
  'DESAFIO 04: ------------------------------------------------------------------------------------'
)

function elegivelParaDesconto(idade, compraMinima, isNewClient) {
  if (idade >= 60 && compraMinima == 100 && isNewClient == 'false') {
    console.log('true')
  } else {
    console.log('false')
  }
}
elegivelParaDesconto(65, 100, 'false')
elegivelParaDesconto(45, 120, 'true')
elegivelParaDesconto(45, 120, 'false')
elegivelParaDesconto(55, 50, 'false')

// aula 02:
console.log(
  'DESAFIO 01: ----- Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a soma, subtração, multiplicação e divisão desses números. Armazene os resultados em array, sendo o Index: 0 = Soma, 1= subtração, 2= multiplicação e o 3 a divisão---------------------------------'
)

let num1 = 15
let num2 = 7

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

const arrNum = []
arrNum.push(['soma', soma])
arrNum.push(['subtracao', subtracao])
arrNum.push(['multiplicacao', multiplicacao])
arrNum.push(['divisao', divisao])

console.log(arrNum)

console.log(
  'DESAFIO 02: ---------------Crie um vetor (array) chamado notas com as notas de um aluno em três disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática da média aritmética---------------------------------'
)

const notas = [8, 7, 6]
let media = (notas[0] + notas[1] + notas[2]) / notas.length
console.log(media)

console.log(
  '--------- DESAFIO 03: Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz 2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a determinante dessa matriz usando a fórmula matemática de determinante-----'
)

const matrizD = [
  [2, 3],
  [4, 5]
]
console.log(matrizD)

let det = matrizD[0][0] * matrizD[1][1] - matrizD[0][1] * matrizD[1][0]
console.log(det)

console.log(
  'DESAFIO 04: ----------------- Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto interno) desses dois vetores usando a fórmula matemática do produto escalar --------'
)

const vetor1 = [3, 5]
const vetor2 = [1, 9]

const pe = vetor1[0] * vetor2[0] + vetor1[1] * vetor2[1]
console.log(pe)
