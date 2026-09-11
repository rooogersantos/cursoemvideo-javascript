function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var result = document.querySelector('div#result')
    if (formularioano.value.length == 0 || formularioano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 2) {
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 12) {
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'homem-adolescente.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'homem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'homem-meia-idade.png')
            } else {
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade < 12) {
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'mulher-adolescente.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulher-meia-idade.png')
            } else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        result.appendChild(img)
    }
}