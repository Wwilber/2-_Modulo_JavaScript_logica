console.log(
  '___DESAFIO 01: Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a soma, subtração, multiplicação e divisão desses números. Armazene os resultados em array, sendo o Index: 0 = Soma, 1= subtração, 2= multiplicação e o 3 a divisão___'
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
  'DESAFIO 02:___Crie um vetor (array) chamado notas com as notas de um aluno em três disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática da média aritmética___'
)

const notas = [8, 7, 6]
let media = (notas[0] + notas[1] + notas[2]) / notas.length
console.log(media)

console.log(
  '___ DESAFIO 03: Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz 2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a determinante dessa matriz usando a fórmula matemática de determinante___'
)

const matrizD = [
  [2, 3],
  [4, 5]
]
console.log(matrizD)

let det = matrizD[0][0] * matrizD[1][1] - matrizD[0][1] * matrizD[1][0]
console.log(det)

console.log(
  '___DESAFIO 04: Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto interno) desses dois vetores usando a fórmula matemática do produto escalar___'
)

const vetor1 = [3, 5]
const vetor2 = [1, 9]

const pe = vetor1[0] * vetor2[0] + vetor1[1] * vetor2[1]
console.log(pe)
console.clear()

console.log(
  '___DESAFIO 05: Dado um array numeros, crie um novo array que contenha apenas os números pares do array original___'
)

const num = [3, 8, 15, 21, 30, 37, 42]
const pares = num.filter(numPar => numPar % 2 == 0)
console.log(pares)
