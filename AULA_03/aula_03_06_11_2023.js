const pessoa = {
  nome: 'Henrique',
  idade: 27,
  profissao: ['Desenvolvedor, Professor']
}
console.log(pessoa)

const pessoa2 = {
  nome: 'Henrique',
  idade: 27,
  profissao: {
    professor: true,
    desenvolvedor: true
  }
}
console.log(pessoa2)

const pessoa3 = {
  nome: 'Henrique',
  idade: 27,
  profissao: [
    {
      nome: 'professor',
      tempo: 1,
      data: new Date()
    },
    {
      nome: 'desenvolvedor',
      tempo: 2
    }
  ]
}
console.log(pessoa3)

// verificando a existência de propriedade:
console.log('nome' in pessoa3)

// retornar um array com todas as chaves do objeto:
console.log(Object.keys(pessoa3))

// retornar um array contendo todos os valores das propriedades do objeto:
console.log(Object.values(pessoa3))

// O operador spread (...) é usado para copiar as propriedades de um objeto para outro.

let pessoa4 = { ...pessoa3 }
console.log(pessoa4)

// copia todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino. Cria uma copia:

let pessoa5 = Object.assign({}, pessoa4)

const x = {
  nome: 'Henrique',
  idade: 27,
  profissao: ['prof', 'dev']
}

const keyx = Object.keys(x)
console.log(keyx)

console.clear()
const pessoa10 = {
  ...pessoa,
  ...pessoa2,
  ...pessoa3
}
console.log(pessoa10)

console.clear()
const pessoa11 = Object.assign({}, pessoa, pessoa2)
