const pessoa1 = {
  nome: 'Carlos',
  idade: 21
}

const pessoa2 = {
  nome: 'paloma',
  idade: 21
}

const animal = {
  nome: 'Hércules',
  idade: 4,
  raça: 'chow-chow'
}

function calcularIdade(anos) {
  return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade`
}

console.log(calcularIdade.call(pessoa1, 6))
