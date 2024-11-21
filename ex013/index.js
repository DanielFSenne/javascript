var agora = new Date()
var hora = agora.getHours
var hora = 19
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18){
    console.log('Boa Tarde')
} else if (hora >= 18) {
    console.log('Boa Noite')
} else if(hora <=5) {
    console.log('Madrugada')
}