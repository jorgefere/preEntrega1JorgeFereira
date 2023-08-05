let edad = parseInt(prompt("Ingrese su edad"));
let cerv = 5; 
let dest = 10;
let bebida = 3; 

if (edad >= 18){
let Ccerv = parseInt(prompt("Cuantas cervezas lleva?, ingrese cero 0 en caso de no llevar."));
let Cdest = parseInt(prompt("Cuantos destilados lleva?, ingrese cero 0 en caso de no llevar."));
let Cbebida = parseInt(prompt("Cuantas bebidas lleva?, ingrese cero 0 en caso de no llevar."));
const cuenta = cerv*Ccerv + dest*Cdest + bebida*Cbebida
alert(`El monto a pagar es: ${cuenta}`);
}else{
alert("Para comprar debe ser mayor de edad.");
}
alert(`el monto a pagar es: ${cuenta}`);
