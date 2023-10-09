function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique se os dados conferem.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'fotobgaroto.jpg')
            } else if (idade > 10 && idade <= 21) {
                img.setAttribute('src', 'fotoadolescentemoço.jpg')
            } else if (idade > 21 && idade <= 40) {
                img.setAttribute('src', 'fotojovemadulto.jpg')
            } else if (idade > 40) {
                img.setAttribute('src', 'fotosenhor.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'fotobgarota.jpg')
            } else if (idade > 10 && idade <= 21) {
                img.setAttribute('src', 'fotoadolescentemoça.jpg')
            } else if (idade > 21 && idade <= 40) {
                img.setAttribute('src', 'fotojovemadulta.jpg')
            } else if (idade > 40) {
                img.setAttribute('src', 'fotosenhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.innerHTML += '<br>Ei, a imagem é meramente ilustrativa, viu?...'
    }

}
