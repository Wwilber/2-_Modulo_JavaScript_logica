console.log('DESAFIO 01: ___VERIFICAÇÃO DE NÚMEROS PARES E ÍMPARES:___')

let numero = Number(prompt('Digite um Número:'))
if (numero % 2 == 0) {
  console.log('numero par')
} else {
  console.log('numero impar')
}

console.log('DESAFIO 02: ___VERIFICAÇÃO DE NOTA:___')

let nota = Number(prompt('Digite uma Nota:'))
if (nota >= 90) {
  console.log('Aprovado com mérito')
} else if (nota >= 70) {
  console.log('Aprovado')
} else {
  console.log('reprovado!')
}

console.log('DESAFIO 03: ___VERIFICAÇÃO DO MAIOR NÚMERO:___')

let num1 = Number(prompt('Digite o primeiro número:'))
let num2 = Number(prompt('Digite o segundo número: '))
let num3 = Number(prompt('Digite o terceiro número:'))
if (num1 > num2 && num1 > num3) {
  console.log('O numero maior é:', num1)
} else if (num2 > num1 && num2 > num3) {
  console.log('O numero maior é:', num2)
} else {
  console.log('O numero maior é:', num3)
}

console.log('DESAFIO 04: ___VERIFICAÇÃO DE TRIÂNGULO:___')

let lado1 = Number(prompt('Digite o primeiro lado'))
let lado2 = Number(prompt('Digite o segundo lado'))
let lado3 = Number(prompt('Digite o terceiro lado'))
if (lado1 == lado2 && lado2 == lado3) {
  console.log('Com essas medidas, esse triângulo é equilátero')
} else if (lado1 == lado2 && lado2 != lado3) {
  console.log('Com essas medidas, esse triângulo é isósceles')
} else if (lado1 != lado2 && lado2 != lado3) {
  console.log('Com essas medidas, o triângulo é escaleno!!!')
}

//Desafio 5

// const ano = Number(prompt('Insira um ano: '))

// if((ano%4 == 0 && ano%100 != 0) || ano%400==0){
//     alert('Bissexto')
// } else{
//     alert('Não é bissexto')
// }

//Desafio 06

// const idade = Number(prompt('Informe sua idade:'))

// alert(idade>=18?'Pode compar':'Não pode comprar')

//Desafio 07

// const input = Number(prompt('Informe um número:'))

// switch(input%2) {
//     case 0:
//         alert('É par')
//         break
//     default:
//         alert('É impar')
// }

//Desafio 08

// const letra = prompt('Informe uma letra:')

// switch(letra){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         alert('É vogal')
//         break
//     default:
//         alert('É consoante')
// }

//Desafio 9

// const mes = prompt('Informe um mês:')

// switch(mes){
//     case 'Dezembro':
//     case 'Janeiro':
//     case 'Fevereiro':
//         alert('Verão')
//         break
//     case 'Março':
//     case 'Abril':
//     case 'Maio':
//         alert('Primavera')
//         break
//     case 'Junho':
//     case 'Julho':
//     case 'Agosto':
//         alert('Verão')
//         break
//     case 'Setembro':
//     case 'Outubro':
//     case 'Novembro':
//         alert('Outono')
//         break
// }

// DESAFIO 05: VERIFICAÇÃO DE ANO BISSEXTO:

let ano = Number(prompt('Digite o ano:'))

if (ano % 4 == 0 && ano % 100 == 0) {
  console.log('O ano é bissexto!!!')
} else if (ano % 400 == 0) {
  console.log('O ano é bissexto')
} else {
  console.log('O ano não é bissexto')
}

// // DESAFIO 06: VERIFICAÇÃO DA IDADE:
// let idade = Number(prompt('Digite sua idade:'))
// console.log(idade >= 18 ? 'pode comprar bebida' : 'não pode comprar bebida')
