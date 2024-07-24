//h1 normalmente é o título geral do texto
/* para usar o js o index, document.querySelector. S maiúsculo pq é case sensitive
e coloco o h1 pq quero selecionar ele do outro texto */
/*utilizei o let titulo só pra criar a variavel, agr já pode ser só titulo
inner = dentro daquele título html */
//para criar uma lista vazia, abro e fecho colchetes sem nd dentro
let listaDeNumerosSorteados = [] ;
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
}

function exibirMensagemInicial () {

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 de 10');
}
exibirMensagemInicial();
//value pq quero só o valor/número que colocar e não o campo todo

function verificarChute () {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
    exibirTextoNaTela ('h1', 'acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela ('p', mensagemTentativas);
    // p/ ativar o botao novo jogo q está desabilitado, preciso colocar o id dele que está na linha 28 do index, pq senao ele vai entender como sendo o primeiro botao "chutar"
    // remove atribute pq quero demover o "desabilitado"
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
     if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'o número secreto é menor!');
    } else {
        exibirTextoNaTela ('p', 'o número secreto é maior!');

    }
    tentativas ++;
    limparCampo()
}
}
function gerarNumeroAleatorio (){
    let = numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    // se qntd de elementos for igual ao máximo, 10, quero limpar a lista de n sorteados
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

    // includes = vai verificar se o elemento está na lista 
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
        // pedi p um novo numero ser gerado caso  caso o anterior já esteja na lista
        // se n esta na lista, quero retornar o numero escolhido
        // push = add item ao final da lista
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        // criar console pra testar essa lista, checar o comportamento do codigo
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    // quero que o chute.value seja uma string vazia
    chute.value = '';

}
function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    // para aparecer novo jogo somente quando acertar a resposta abaixo. e quero desabilitado, por isso a palavra true como segundo parâmetro
    document.getElementById('reiniciar').setAttribute('disabled',true)

}

//esse return é pra retornar/me devolver o número aleatório 
//para criar lista, na maioria das linguagens se usa colchetes e sempre o primeiro termo tem índice = 0
// [frutas.length - 1] retorna o último elemento da lista, já que o primeiro = 0
// array cria lista: let frutas = ["maca", "banana", "uva"]
// console.log(frutas[0]); // Saída: "Maçã"
