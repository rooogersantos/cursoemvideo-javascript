let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(`Nosso vetor é ${num}.`)
console.log(num)
console.log(`Nosso vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

// num[5] = 7 --- acrescentar um elemento em uma posição específica
// num.push(12) --- acrescentar um elemento no final
// num.length --- saber o comprimento
// num.sort() --- organizar por ordem crescente