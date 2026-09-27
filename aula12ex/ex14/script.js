function carregar() { // Cria a função "carregar", que será executada quando a página for carregada

    var msg = window.document.getElementById('msg')
    // Localiza no HTML o elemento que possui o ID "msg"
    // Esse elemento será usado para mostrar a mensagem com o horário

    var img = window.document.getElementById('imagem')
    // Localiza no HTML a imagem que possui o ID "imagem"
    // Essa variável permitirá alterar a imagem exibida na página

    var data1 = new Date()
    // Cria um objeto Date contendo a data e o horário atuais do computador

    var hora = data1.getHours()
    // Obtém somente a hora atual do objeto Date
    // O valor retornado fica entre 0 e 23

    var data2 = new Date()
    // Cria novamente um objeto Date com a data e o horário atuais

    var minutos = data2.getMinutes().toString().padStart(2, '0')
    // Obtém os minutos atuais
    // toString() transforma o número em texto
    // padStart(2, '0') adiciona um zero à esquerda quando necessário
    // Exemplo: 5 vira "05"

    msg1.innerHTML = `Agora são ${ hora }:${ minutos }.`
    // Altera o conteúdo do elemento "msg"
    // Exibe a hora e os minutos atuais
    // Exemplo: "Agora são 14:05."

    if (hora >= 6 && hora < 12) { // Verifica se o horário está entre 6:00 e 11:59

        msg2.innerHTML = `Bom dia!!!`
        // Comentário indicando que esse período corresponde à manhã

        img.src = 'manha.png'
        // Altera a imagem para "manha.png"

        document.body.style.background = '#d6cc43'
        // Altera a cor de fundo da página para a cor definida
        // pelo código hexadecimal #d6cc43

    } else if (hora >= 12 && hora < 18) { // Se não for manhã, verifica se o horário está entre 12:00 e 17:59

        msg2.innerHTML = `Bom tarde!!!`
        // Comentário indicando que esse período corresponde à tarde

        img.src = 'tarde.png'
        // Altera a imagem para "tarde.png"

        document.body.style.background = '#b9cc4a'
        // Altera a cor de fundo da página para #b9cc4a

    } else { // Se não for manhã nem tarde, considera o período como noite

        msg2.innerHTML = `Bom noite!!!`
        // Comentário indicando que esse período corresponde à noite

        img.src = 'noite.png'
        // Altera a imagem para "noite.png"

        document.body.style.background = '#0b1a46'
        // Altera a cor de fundo da página para #0b1a46

    } // Fim da estrutura condicional

} // Fim da função carregar