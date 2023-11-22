// COERSÃO (CONVERSÃO) DE TIPOS

// 1. Coersão Explícita(Manual)
const numero = 10
console.log(numero, typeof numero)
const numeroEmFormatoString = String(numero)
console.log(numeroEmFormatoString, typeof numeroEmFormatoString)
console.log(Number('123456789'))
console.log(parseFloat('123456789.23'))
console.log(parseInt('123456789.23'))
console.log(Boolean('123456789.23'))
