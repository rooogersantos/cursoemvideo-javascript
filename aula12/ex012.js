var agora01 = new Date()
var hora = agora01.getHours()
var agora02 = new Date()
var minutos = agora02.getMinutes()

if (hora >= 6 && hora < 12) {
    console.log(`Bom dia!`)
    console.log(`Agora são ${hora}:${minutos} da manhã`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde!`)
    console.log(`Agora são ${hora}:${minutos} da tarde.`)
} else if (hora >= 18 && hora < 18) {
    console.log(`Boa noite!`)
    console.log(`Agora são ${hora}:${minutos} da noite.`)
} else if (hora < 6) {
    console.log(`Você deveria estar dormindo!`)
    console.log(`Agora são ${hora}:${minutos} da madrugada.`)
}