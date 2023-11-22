console.log(
  '___ATIVIDADE 01: Crie um dicionário para representar uma biblioteca de livros:___'
)
const biblioteca = {
  livro01: {
    titulo: 'A arte da Guerra',
    autor: 'Sun Tzu',
    anoPublicado: 1900
  },
  livro02: {
    titulo: 'Dom Quixote',
    autor: 'Miguel de Cervantes',
    anoPublicado: 1605
  },
  livro03: {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicado: 1949
  }
}

biblioteca.livro04 = {
  titulo: 'O Peequeno Prrincipe',
  autor: 'Antoine de Saint-Exupéry',
  anoPublicado: 1943
}

console.log(biblioteca)
console.log(biblioteca.livro01.autor)
biblioteca.livro04.titulo = 'O Pequeno Príncipe'
delete biblioteca.livro03
console.log('livro05' in biblioteca)
console.log(biblioteca)

console.clear()

console.log(
  '___ATIVIDADE 02: CRIE UM MAPA PARA REPRESENTAR UMA LISTA DE COMPRAS:___'
)
// ITEM 00:
let listaDeCompras = new Map()

// ITEM 01:
listaDeCompras.set('Maçãs', 5)
listaDeCompras.set('Bananas', 3)
listaDeCompras.set('Leite', 2)
listaDeCompras.set('Pão', 1)

// ITEM 02:
console.log(listaDeCompras.get('Bananas'))
listaDeCompras.set('Pão', 5)
listaDeCompras.delete('Maçãs')
listaDeCompras.delete('Leite')
console.log(listaDeCompras.has('Leite'))
console.log(listaDeCompras)
const qteItens = listaDeCompras.get('Pão') + listaDeCompras.get('Bananas')
console.log(qteItens)

console.log('___DESAFIO 02: AGENDA DE CONTATOS:___')

const AgendaDecontatos = [
  {
    nome: 'Wilber',
    telefone: '9999-9999',
    email: 'www@uol.com.br'
  },
  {
    nome: 'Jose',
    telefone: '8888-8888',
    email: 'jose@uol.com.br'
  },
  {
    nome: 'Oliveira',
    telefone: '4444-7777',
    email: 'oliveira@uol.com.br'
  }
]
console.clear()
console.log('___DESAFIO 03: DICIONARIO DE SINÔNIMOS:___')

const dicSinon = {
  problem: ['contratempo', 'dificuldade', 'sufoco'],
  grande: ['enorme', 'gigante', 'graúdo'],
  objetivo: ['finalidade', 'meta', 'propósito']
}

console.log(dicSinon.objetivo)

console.clear()
console.log('___DESAFIO 04: OBJETO PESSOA:___')

const pessoa = {
  nome: 'wilber',
  idade: 51,
  cidade: 'Fortaleza'
}
console.log(pessoa.idade >= 18)
console.log(pessoa.cidade == 'São Paulo')

console.clear()
console.log('___DESAFIO 05: ALUNO:___')

const aluno = {
  nome: 'Wilber',
  nota01: 10,
  nota02: 10
}

const media = (aluno.nota01 + aluno.nota02) / 2
console.log(media)
if (media >= 7) {
  console.log('aluno aprovado!!!')
}

console.clear()
console.log('___DESAFIO 06: MAP - FRUTAS:___')

const frutas = new Map()

frutas.set('maçã', 8)
frutas.set('banana', 6)
frutas.set('pêra', 2)
frutas.set('uva', 9)
console.log(frutas.get('maçã') > frutas.get('banana'))
console.log(frutas.get('pêra') == frutas.get('uva'))
