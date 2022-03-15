/**
 * Reinaldo junior
 * Primeiro contato com javascript
 * 14/03/2022
 */


class celular {
    constructor() {
        this.cor = "prata";
    }

    ligar() {
        console.log("Uma Ligação");
        return "ligando";
    }
}


let objeto = new celular();

console.log(objeto.ligar());
//console.log(objeto.ligar());


/*
let celular = function (){

    this.cor = "prata";


    this.ligar = function (){
        console.log("uma Ligação");
        return "Ligando";
    }




}

let objeto = new celular();
console.log(objeto);
console.log(objeto.ligar());



let carros = ["palio 98", "toro", "uno", 10, true, new Date().toLocaleDateString("pt-br"), function (){}];

carros.forEach(function ( value, index ){

    console.log(index, value);
});





//console.log(carros[5]);



let agora = new Date();

console.log(agora.toLocaleDateString("pt-br"));


window.addEventListener('focus', event => {

    console.log("Focus");

});


document.addEventListener('click', event =>{

    console.log("click");

});






let calc = (x1, x2, operator) => {

    return eval(` ${x1} ${operator} ${x2} `);

}


let resultado = calc(10, 20, "+");

console.log(resultado);



function calc(x1, x2, operator) {

    return eval(` ${x1} ${operator} ${x2} `);

}


let resultado = calc(10, 20, "+");

console.log(resultado);

*/


/*
let n = 7;

for( let i = 0; i <= 10; i++){

    console.log(`${i} X ${n} = ${i * n} `);

}


let cor = "azul";
switch (cor) {
    case "verde":
        console.log('Siga');
        break;

    case "amarelo":
        console.log('atenção');
        break;

    case "vermelho":
        console.log('pare');
        break;

    default:
        console.log('não sei');
}


let cor = "Vermelho";

if (cor === 'Verde') {
    console.log('Siga');
} else if (cor === "Amarelo") {
    console.log("Atenção");
} else if (cor === "Vermelho") {
    console.log('Pare');
}


var olaMundo = 'Olá Mundo!';

let a = 10;
const b = "10";

console.log( a == b || typeof a == 'string');

console.log(olaMundo);
console.log('Olá Mundo!');
console.log('Olá Mundo!');
//alert('Olá Mundo!');
*/