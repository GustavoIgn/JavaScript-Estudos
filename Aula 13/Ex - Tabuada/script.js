function contar() {
    var num = window.document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!");
    } else {
        let n = Number(num.value);
        //while, pois usei for no outro...
        let c = 1;
        while (tab.options.length > 1){
            tab.remove(1);
        }
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}