let altura = 0
let largura = 0

function ajustarTamanhoDaTelaDoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}
ajustarTamanhoDaTelaDoJogo()

function posicaoRandomica(){
    // coordenadas na tela
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90
    // posição X recebe ela meno que 0, se for (?) recebe 0 se não (:) receber posição X
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX,posicaoY)
    
    // criar o elemento html
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    // adicionando o elemento filho ao html
    document.body.appendChild(mosquito)
}