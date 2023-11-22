// OPERADORES BOOLEANOS:

// IGUALDADE:      == (OU ===)
// DESIGUALDADE:   != (OU !==)
// MAIOR QUE:      >
// MENOR QUE:      <
// MAIOR OU IGUAL: >=
// MENOR OU IGUAL: <=

let numero = 10
console.log(numero > 20)
console.log(numero == 10)
console.log(numero == '10')
console.log(numero != 10)
console.log(numero !== 10)

// console.clear() - limpa a tela do que foi impresso na tela.

// - CONJUNÇÕES LÓGICAS:
// AND => &&
let idade = 26
let tenhoCNH = true
const possoDirigir = idade >= 18 && tenhoCNH == true
console.log('Posso Dirigir?', possoDirigir)
// OR => ||

idade = 40
const votoFacultativo = idade < 18 || idade >= 70
console.log('Voto facultativo? ', votoFacultativo)

// NOT => !
const menor = idade != 26
console.log('Sua idade é diferente de 26', menor)
