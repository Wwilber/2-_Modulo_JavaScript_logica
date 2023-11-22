// OBJETOS:

// como criar objetos no javaScript:

let pessoa = {
  'nome-da-pessoa': 'wilber',
  idade: 50
}

console.log(pessoa)
console.log(pessoa.idade)
console.log(pessoa['nome-da-pessoa'])

// COMO ADICIONAR UM PAR CHAVE-VALOR:
pessoa.altura = 1.77
console.log(pessoa)

// REMOVER UM PAR CHAVE-VALOR:
delete pessoa.altura
console.log(pessoa)

// COM PERCORRER OS OBJETOS:
for (pessoa in pessoa) {
  console.log(pessoa)
}

for (pessoa of pessoa) {
  console.log(pessoa)
}
