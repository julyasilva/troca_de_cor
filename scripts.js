function trocarCorVermelho() {
    document.body.style.backgroundColor = "red"
}

function trocarCorVerde() {
    document.body.style.backgroundColor = "green"
}

function trocarCorAzul() {
    document.body.style.backgroundColor = "blue"
}

function trocarCorAmarelo() {
    document.body.style.backgroundColor = "yellow"
}

function trocarCorAleatória() {
    document.body.style.backgroundColor = ""
}

function trocarCor(cor) {
    document.body.style.backgroundColor = cor
}

function corAleatoria() {
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function corPersonalizada() {
    const corInput = document.querySelector('.input-cor').value

    trocarCor(corInput)
}
