let num = [3, 4, 1, 2, 9];
num.sort();
num[5] = 0; //método de inserção
num.sort(); //principio sort de ordenação
num.push(-4); //método de inserção
let tam = num.length;
console.log(`O nosso vetor é o ${num}`);
console.log(`E o vetor possui ${tam} casas\n`); //considera as inserções fora de declaração

for (let c = 0; c < num.length; c++) {
    console.log(`Vetor dentro do for, casa ${c} = ${num[c]}`)
} //método tradicional

console.log('\n')
num.sort()

for (let pos in num) {
    console.log(`For especial do JS, posição ${pos}: ${num[pos]}`)
} //for especifico para arrays e objetos

let posição = num.indexOf(4)
console.log(`\nO valor procurado está na posição ${posição}`)
//se retornar -1 = não encontrado...