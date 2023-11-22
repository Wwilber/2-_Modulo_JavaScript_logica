//DEFINIÇÃO DA FUNÇÃO
function saudacao() {
  console.log('bom dia!')
}
saudacao()
console.clear()

//DEFINIÇÃO DA FUNÇÃO
function saudacao(nome, idade = 50) {
  console.log(`bom dia! Você ${nome} tem ${idade} anos`)
}
saudacao('Wilber')

// RETORNO DA FUNÇÃO:
function soma(numero1, numero2) {
  return numero1 + numero2
}

let resultado = soma(10, 20)
console.log(resultado)
