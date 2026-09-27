function tabuada() {
    // Cria a função "tabuada", que será executada quando
    // o usuário clicar no botão "Gerar Tabuada"

    let numero = document.getElementById('txtn')
    // Localiza o campo de entrada pelo ID "txtn"
    // Esse campo contém o número digitado pelo usuário

    let tab = document.getElementById('seltab')
    // Localiza o elemento <select> pelo ID "seltab"
    // É nesse elemento que as linhas da tabuada serão inseridas

    if (numero.value.length == 0) { // Verifica se o campo está vazio

        window.alert('Por favor, digite um número!')
        // Exibe uma mensagem de alerta solicitando que o usuário
        // informe um número

    } else { // Caso o campo não esteja vazio, continua a execução

        let n = Number(numero.value)
        // Converte o valor digitado, que inicialmente é texto, para um número

        let c = 1
        // Cria o contador e define seu valor inicial como 1

        tab.innerHTML = ''
        // Limpa o conteúdo anterior do <select>
        // Isso evita que uma nova tabuada seja adicionada abaixo da tabuada anterior

        while (c <= 10) {
            // Enquanto o contador for menor ou igual a 10, o código continuará criando linhas da tabuada

            let item = document.createElement('option')
            // Cria um novo elemento HTML <option>
            // Cada <option> representará uma linha da tabuada

            item.text = `${ n } x ${ c } = ${ n * c } ` // Define o texto que será exibido na opção

            item.value = `tab${ c } ` // Define o valor interno da opção

            tab.appendChild(item) // Adiciona a nova <option> dentro do <select>

            c++
            // Aumenta o contador em 1
            // É equivalente a: c = c + 1
        }
        // Quando c chegar a 11, a condição c <= 10 será falsa e o while será encerrado
    } // Fim da estrutura condicional
} // Fim da função tabuada