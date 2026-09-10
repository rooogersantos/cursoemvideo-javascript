function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var result = document.querySelector('div#result')
    if (formularioano.value.length == 0 || formularioano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - formularioano.value
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        } else if(fsex[1].checked) {
            genero = 'Mulher'
        }
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}