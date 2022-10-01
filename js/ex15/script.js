function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        foto.src = 'imagens/foto-manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        foto.src ='imagens/foto-tarde.png'
        document.body.style.background = '#a56e58'
    } else {
        //boa noite
        foto.src ='imagens/foto-noite.png'
        document.body.style.background = '#515154'
    }

}

