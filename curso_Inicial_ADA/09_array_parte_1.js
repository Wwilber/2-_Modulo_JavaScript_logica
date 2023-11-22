// array:

// como criar um array:

let arr = ['wilber', 56, true]
console.log(arr)

// como acessar os elementos de um array:
console.log('primeiro elemento', arr[0])
console.log('segundo elemento', arr[1])

//tamanho do array:
console.log(arr.length)

// percorrer array:
for (i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// apresenta os elementos:
for (let elements of arr) {
  console.log(elements)
}

console.clear()

// apresenta os indices:
for (let variavel in arr) {
  console.log(variavel)
}

for (let variavel in arr) {
  console.log(variavel, arr[variavel])
}
