let num = [5, 8, 4, 3, 1]
num.push(7)
num.sort()

console.log(num)

for(let pos in num) {
    console.log(`A posição ${pos} do nosso vetor tem o valor ${num[pos]}.`)
}

let p = num.indexOf(5)
if (p == -1) {
    console.log(`O valor 5 não foi encontrado.`)
} else {
    console.log(`O valor 5 está na posição ${p}.`)
}

// num[5] = 7 --- acrescentar um elemento em uma posição específica
// num.push(12) --- acrescentar um elemento no final
// num.length --- saber o comprimento
// num.sort() --- organizar por ordem crescente

/*
console.log(`Nosso vetor é ${num}.`)
console.log(num)
console.log(`Nosso vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
*/

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} do nosso vetor tem o valor ${num[pos]}.`)
}
*/