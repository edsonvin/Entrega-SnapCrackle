let mensagem = ""
function snapCrackle(maxValue){
    for(let contador = 1; contador <= maxValue; contador++){
    if(contador === 1){
        mensagem = mensagem + "Snap"

    }
    else if(contador % 2 != 0 & contador % 5 === 0) {
        mensagem = mensagem + ", SnapCrackle"

    }
    else if (contador % 5 === 0) {
        mensagem = mensagem + ", Crackle"
    }   
    else if (contador % 2 != 0) {
        mensagem = mensagem + ", Snap"
    }
    
    else {
        mensagem = mensagem + ", " + contador
    }

}
console.log(mensagem)
}

snapCrackle(12)
