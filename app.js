let numerosSorteados = [];

function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);
    let diferenca = (Math.abs(numeroMaximo - numeroInicial)+1);
    if(quantidade <= diferenca){
        if(numeroInicial<=numeroMaximo){
            gerarAleatorios(numeroInicial, numeroMaximo, quantidade);
        }else{
            gerarAleatorios(numeroMaximo, numeroInicial, quantidade);
        }
        printarResultado(true);
    }else{
        printarResultado(false)
    }
    habilitarBtnReiniciar();
}

function gerarAleatorios(min, max, quantidadeEscolhida){
    let contador = 1;
    while(contador<=quantidadeEscolhida){
        let sorteado = parseInt(Math.random()*(max-min+1) + min)
        if(numerosSorteados.includes(sorteado)){
            contador=contador;
        }else{
            numerosSorteados.push(sorteado);
            contador++;
        }
        
    }
    
}

function printarResultado(booleano){
    let resultado = document.getElementById('resultado').children[0];
    if(booleano == true){
        let textoDeResultado = numerosSorteados.length > 1 ? 'Números sorteados: ': 'Número sorteado: '
        resultado.innerHTML = `${textoDeResultado} ${numerosSorteados}`;

    }else{
        resultado.innerHTML = `Quantidade inserida é inválida.`;
    }
    numerosSorteados = []
}

function habilitarBtnReiniciar(){
    document.getElementById('btn-reiniciar').classList.replace('container__botao-desabilitado', 'container__botao');
}

function desabilitarBtnReiniciar(){
    document.getElementById('btn-reiniciar').classList.replace('container__botao', 'container__botao-desabilitado');
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value ='';
    document.getElementById('resultado').children[0].innerHTML='Números sorteados: nenhum até agora';
    desabilitarBtnReiniciar()
}