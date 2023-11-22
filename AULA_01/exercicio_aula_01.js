console.log('___DESAFIO 01: VERIFICAR ELEGIBILIDADE PARA VOTO:____')

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

console.log('___DESAFIO 02: APROVAÇÃO DE EMPRÉSTIMO:___')

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

console.log('DESAFIO 03:___VERIFICAR COMPATIBILIDADE DE PLATAFORMAS:___')
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
  '___DESAFIO 04: VERIFICAR ELEGIBILIDADE PARA DESCONTO EM COMPRA:___'
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
