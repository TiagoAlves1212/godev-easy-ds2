const btn = document.querySelector('button')
const result = document.querySelector('#result')
const inputText = document.querySelector('input')

function abreviarNome(nomeCompleto) {
    const nomes = nomeCompleto.split(' ')
    console.log(nomes)

    const ultimoNome = nomes.pop().toUpperCase()
    console.log(ultimoNome)

    const nomesAbreviados = nomes.map(nome => nome[0].toUpperCase() + '.')
    console.log(nomesAbreviados)

    return `${ultimoNome}, ${nomesAbreviados.join(' ')}`
}

btn.addEventListener('click', () => {
    const inputText = document.querySelector('input')
    const result = document.querySelector('#result').innerHTML = `${abreviarNome(inputText.value)}`
})