const form = document.getElementById('form-submeter')

let campoA
let campoB

function validacao(campoA, campoB){
    return campoB > campoA
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    campoA = parseFloat(document.getElementById('campo-A').value)
    campoB = parseFloat(document.getElementById('campo-B').value)

    if(validacao(campoA, campoB)){
        document.querySelector('.mensagem-erro').style.display = 'none'
        document.querySelector('.mensagem-correta').style.display = 'block'
    }else{
        document.querySelector('.mensagem-erro').style.display = 'block'
        document.querySelector('.mensagem-correta').style.display = 'none'
    }
})