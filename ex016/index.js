function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtando')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './criança1.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', './jovem1.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './adulto1.jpg')
            } else {
                //velho
                img.setAttribute('src', './velho1.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }



}