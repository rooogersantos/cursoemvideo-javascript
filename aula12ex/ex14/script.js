function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data1 = new Date()
    var hora = data1.getHours()
    var data2 = new Date()
    var minutos = data2.getMinutes().toString().padStart(2, '0')
    msg.innerHTML = `Agora são ${hora}:${minutos}.`
    if (hora >= 6 && hora <12) {
        //Bom dia!!
        img.src = 'manha.png'
        document.body.style.background = '#d6cc43'
    } else if (hora >= 12 && hora <18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9cc4a'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0b1a46'
    }
}