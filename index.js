function alphabetPosition(text) {
    text = text.toLowerCase().replace(/ /g, '').split('').join(' ')

    var position = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var numbers = "1234567890".split('')

    numbers.forEach((element, index) => {
        text = text.replace(new RegExp(element, 'g'), ' ')
    })

    alphabet.forEach((element, index) => {
        position[index] = index + 1
        text = text.replace(new RegExp(element, 'g'), position[index])
    })

    text = text.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ' ');
    text = text.replace(/  /g, '')

    document.getElementsByTagName('p')[0].innerHTML = text.trim() == '' ? '' : text
}

var btn = document.querySelector('img')
var words = document.getElementById('campo')
var transformed = document.getElementsByTagName('p')[0]

btn.addEventListener('click', () => {
    alphabetPosition(words.value)
    // Se o campo que mostra a transformação estiver vazio, preencher com espaço
    if (transformed.innerText == "") {
        transformed.innerHTML = "&nbsp"
    }
})