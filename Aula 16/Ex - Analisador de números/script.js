let n = document.getElementById('txtn');
let lista = document.querySelector('select#seln');
let res = document.getElementById('res');
let valores = [];

function adicionar() {
    if (n.value < 1 || n.value > 100 || isNaN(n.value)) {
        window.alert("[ERRO] Número Inválido!");
    } else if (inLista(n.value, valores) == true) {
        window.alert(`O número ${n.value} já está na lista!`);
    } else {
        valores.push(Number(n.value));
        let item = document.createElement('option');
        item.text = `Valor ${n.value} adicionado`
        lista.appendChild(item);
        res.innerHTML = ""
    }
    n.value = ""
    n.focus()

}

function inLista(n, l) {
    for (let c = 0; c < l.length; c++) {
        if (n == l[c]) {
            return true;
        }
    }
    return false;
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione os valores antes de usar!");
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let pos in valores) {
            soma += valores[pos];

            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total;
        res.innerHTML = ""
        res.innerHTML += `<p>Temos ${total} itens cadastrados, ao todo.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos itens é: ${soma}</p>`
        res.innerHTML += `<p>A média dos itens é: ${media}</p>`
    }
}

function limpar() {
    lista.innerHTML = "";
    res.innerHTML = "";
    valores = []; // Limpa o array de valores
    n.value = ""; // Limpa o campo de entrada
    n.focus(); // Define o foco de volta no campo de entrada
}
