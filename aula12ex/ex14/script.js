function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data1 = new Date()
    var data2 = new Date()
    var hora1 = data1.getHours()
    var hora2 = data1.getMinutes()
    msg.innerHTML = `Agora são ${hora1}:${hora2}.`
    if (hora >= 6 && hora < 12) {

    } else if (hora >= 12 && hora < 18) { 

    } else if (hora >= 18 && hora < 24) {

    } else {
        
    }
}