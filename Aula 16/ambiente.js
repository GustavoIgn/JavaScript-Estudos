function parimp(n) {
    if (n % 2 == 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

for (var aux = 1; aux <= 10; aux++) {
    let res = parimp(aux);
    console.log(`O valor ${aux} é ${res}.`)
}