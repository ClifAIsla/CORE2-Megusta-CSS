/// let count2=12;
// let count3=3;

//let sumalikes1 = document.querySelector('#likesNeil');
//let sumalikes2 = document.querySelector('#likesNichole');
//let sumalikes3 = document.querySelector('#likesJim');

function add(aquillegainfo){
    console.log(aquillegainfo.closest('.bloque1').querySelector('.like'))

    //console.log(aquillegainfo.previousElementSibling)
    //let divlike = aquillegainfo.previousElementSibling

    //1.PRIMERO SELECCIONAMOS EL ELEMENTO A ACTUALIZAR Y LO CAMBIAMOS A NUMERO
    let divlike = aquillegainfo.closest('.bloque1').querySelector('.like')
    let numero = Number(divlike.innerText)
    //2.LE SUMAMOS 1
    numero++;
    //3. ACTUALIZAMOS SU VALOR
    divlike.innerText = numero;

    //NO ENTIENDO EL INNERTEXT EN EL divlike.innerText
    //COMO UBICO MI ELEMENTO SIN USAR  CLOSEST

}







// function add1_Nichole(elemento){
//     count2++;
//     elemento.innerText = count2+" likes(s)"
// }

// function add1_Jim(){
//     count3++;
//     sumalikes3.innerText = count3+" likes(s)"
// }
