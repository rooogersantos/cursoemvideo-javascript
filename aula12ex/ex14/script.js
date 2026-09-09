function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data1 = new Date()
    var data2 = new Date()
    var hora1 = data1.getHours()
    var hora2 = data2.getMinutes()
    msg.innerHTML = `Agora são ${hora1}:${hora2}.`

    if (hora1 >= 6 && hora1 < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#dda610'
    } else if (hora1 >= 12 && hora1 < 18) { 
        img.src = 'tarde.png'
        document.body.style.background = '#8aa70d'
    } else if (hora1 >= 18 && hora1 < 24) {
        img.src = 'noite.png'
        document.body.style.background = '#10192e'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#10192e'
    }
}