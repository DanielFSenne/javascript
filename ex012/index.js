var idade = 16
console.log(`Você tem ${idade} anos`)

if (idade < 18){  
    console.log('Não Vota')
 }else if ( idade < 18 || idade > 65) {
        console.log('Voto opicional')
    }
    else if (idade>= 18) {
        console.log('Voto Obrigatório')
    }
 