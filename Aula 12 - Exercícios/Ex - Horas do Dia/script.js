function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('saudacao')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (minuto < 10) {
        msg.innerHTML = `Agora são ${hora}h0${minuto} &#128512`
    } else {
        msg.innerHTML = `Agora são ${hora}h${minuto} &#128512`
    }
    if (hora >= 0 && hora <= 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
        saudacao.innerHTML = 'Bom Dia!'
    } else if (hora >= 13 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
        saudacao.innerHTML = 'Boa Tarde!'
    } else {
        document.body.style.background = '#515154'
        img.src = 'fotonoite.jpg'
        saudacao.innerHTML = 'Boa noite!'
    }
}
