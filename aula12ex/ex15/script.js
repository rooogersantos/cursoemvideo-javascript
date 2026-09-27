function verificar() {
    // Cria a função "verificar", que será executada quando o usuário
    // clicar no botão "Verificar"

    var data = new Date()
    // Cria um objeto Date contendo a data e o horário atuais

    var ano = data.getFullYear()
    // Obtém o ano atual utilizando o objeto Date
    // Exemplo: 2026

    var formularioano = document.getElementById('txtano')
    // Localiza o campo de entrada do ano de nascimento pelo ID "txtano"

    var result = document.querySelector('div#result')
    // Localiza a div com o ID "result"
    // Essa div será usada para mostrar o resultado da verificação

    if (formularioano.value.length == 0 || formularioano.value > ano) {
        // Verifica se o campo está vazio OU se o ano informado
        // é maior que o ano atual

        window.alert('[ERRO] Verifique os dados e tente novamente!')
        // Exibe uma mensagem de erro para o usuário

    } else { // Caso os dados estejam corretos, continua a execução

        var fsex = document.getElementsByName('radsex')
        // Localiza todos os elementos que possuem name="radsex"
        // Nesse caso, serão encontrados os dois botões de opção:
        // masculino e feminino

        var idade = ano - Number(formularioano.value)
        // Calcula a idade subtraindo o ano de nascimento do ano atual
        // Number() converte o valor digitado, que é texto, para número

        var genero = ''
        // Cria uma variável vazia que posteriormente receberá
        // "Hmasculino" ou "Feminino"

        var img = document.createElement('img')
        // Cria um novo elemento HTML <img> utilizando JavaScript
        // A imagem ainda não possui uma fonte definida

        img.setAttribute('id', 'foto')
        // Define o atributo id da imagem como "foto"

        if (fsex[0].checked){
            // Verifica se o primeiro botão de opção está selecionado
            // fsex[0] corresponde à opção "Masculino"

            genero = 'masculino'
            // Define o gênero como "masculino"

            if (idade >= 0 && idade < 2) {
                // Verifica se a idade está entre 0 e 1 ano

                img.setAttribute('src', 'homem-bebe.png')
                // Define a imagem do bebê do sexo masculino

            } else if (idade < 12) {
                // Verifica se a idade é menor que 12 anos

                img.setAttribute('src', 'homem-crianca.png')
                // Define a imagem da criança do sexo masculino

            } else if (idade < 20) {
                // Verifica se a idade é menor que 20 anos

                img.setAttribute('src', 'homem-adolescente.png')
                // Define a imagem do adolescente do sexo masculino

            } else if (idade < 40) {
                // Verifica se a idade é menor que 40 anos

                img.setAttribute('src', 'homem.png')
                // Define a imagem do homem adulto

            } else if (idade < 60) {
                // Verifica se a idade é menor que 60 anos

                img.setAttribute('src', 'homem-meia-idade.png')
                // Define a imagem do homem de meia-idade

            } else {
                // Caso nenhuma das condições anteriores seja verdadeira,
                // a idade é igual ou superior a 60 anos

                img.setAttribute('src', 'homem-idoso.png')
                // Define a imagem do homem idoso
            }

        } else if(fsex[1].checked) {
            // Verifica se o segundo botão de opção está selecionado
            // fsex[1] corresponde à opção "Feminino"

            genero = 'feminino'
            // Define o gênero como "feminino"

            if (idade >= 0 && idade < 2) {
                // Verifica se a idade está entre 0 e 1 ano

                img.setAttribute('src', 'mulher-bebe.png')
                // Define a imagem do bebê do sexo feminino

            } else if (idade < 12) {
                // Verifica se a idade é menor que 12 anos

                img.setAttribute('src', 'mulher-crianca.png')
                // Define a imagem da criança do sexo feminino

            } else if (idade < 20) {
                // Verifica se a idade é menor que 20 anos

                img.setAttribute('src', 'mulher-adolescente.png')
                // Define a imagem da adolescente

            } else if (idade < 40) {
                // Verifica se a idade é menor que 40 anos

                img.setAttribute('src', 'mulher.png')
                // Define a imagem da mulher adulta

            } else if (idade < 60) {
                // Verifica se a idade é menor que 60 anos

                img.setAttribute('src', 'mulher-meia-idade.png')
                // Define a imagem da mulher de meia-idade

            } else {
                // Caso nenhuma das condições anteriores seja verdadeira,
                // a idade é igual ou superior a 60 anos

                img.setAttribute('src', 'mulher-idosa.png')
                // Define a imagem da mulher idosa
            }
        }

        result.innerHTML = `Detectamos: gênero ${ genero } com ${ idade } anos.`
        // Altera o conteúdo da div "result"
        // Exemplo: "Detectamos: gênero masculino com 33 anos."

        result.appendChild(img)
        // Adiciona a imagem criada anteriormente dentro da div "result"

    } // Fim da estrutura condicional principal

} // Fim da função verificar