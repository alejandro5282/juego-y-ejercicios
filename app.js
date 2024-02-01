/*let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo=10;

function asignarTextoElementos(elemento, texto){
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;

}


function verificarIntento(){

   let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
   
   if(numeroUsuario === numeroSecreto){
      asignarTextoElementos(`p`, `acertaste el numero  ${intentos} ${(intentos===1) ? "vez" : "veces"}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }else{ 
      if( numeroUsuario > numeroSecreto){

      asignarTextoElementos("p","el numero Secreto es menor");
   }else{
      asignarTextoElementos("p","el numero secreto es mayor");
   }

      intentos++;
       limpiarCaja();
   }
   return;
}


function limpiarCaja(){

   document.querySelector('#valorUsuario').value='';
   

}




function generarNumeroSecreto(){
  let numeroGeneradado = Math.floor(Math.random()*numeroMaximo)+1;
  // si el numero generado esta incluido en la lista
  console.log(numeroGeneradado);
  console.log(listaNumerosSorteados);
  if(listaNumerosSorteados.length==numeroMaximo){asignarTextoElementos('p',"ya se sortearon todos los numeros posibles");}else{
  if(listaNumerosSorteados.includes(numeroGeneradado)){
   

  } else{listaNumerosSorteados.push(numeroGeneradado);
   return numeroGeneradado;
}
}

}

function condicionesInicialies()
{
   asignarTextoElementos( 'h1', "juego del numero secreto");
asignarTextoElementos( 'P', `indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto=generarNumeroSecreto();
intentos =1;
}


function reiniciarJuego(){

//limpiar caja
limpiarCaja();
//indicar mensaje de interbalo de numero
condicionesInicialies();
//generar el numero aletorio
//desahbilitar el boton de nuevo juego
//inicializar el numero intentos
document.querySelector("#reiniciar").setAttribute('disabled','true');
}

condicionesInicialies();
*/

//EJERCICIOS PLANTEADOS 

/*
function holamundo()
{
let saludo=("hola mundo ");
console.log(saludo);
}
holamundo();

function nombre()
{

let nombre=prompt("digite su nombre");
console.log(`hola: ${nombre} `);

}
nombre();

function calcularDoble(numero) {
   return numero * 2;
 }
 
 let resultadoDoble = calcularDoble(5);
 console.log(resultadoDoble);



 function calcularPromedio(a, b, c) {
   return (a + b + c) / 3;
 }
 
 let promedio = calcularPromedio(4, 7, 10);
 console.log(promedio);

  function numeroGrande(a,b)
  {
     return a > b ? a : b;


  }
  let numeroMayor = numeroGrande(15, 9);
  console.log(numeroMayor);



  function multiplicar (a)
  {
    
   return a*a

  }
 let numero=multiplicar(2);
 console.log(numero );
*/


let lenguajeDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

lenguajeDeProgramacion.push['Java', 'Ruby' , 'GoLang'];

function mostrar(){

console.log(lenguajeDeProgramacion.length);
}
 mostrar();



/*
function indiceMasa() {

   let altura = parseFloat(prompt('Indique su altura en metros'));
   let peso = parseFloat(prompt('Indique su peso en kilos'));

  
   let imc = peso / (altura * altura);

   return imc;
}

let resultado= indiceMasa();

console.log("Su índice de masa corporal es: " + resultado);




let numeroFactoril = prompt("digite numero");

function factorial(numero){


if(numeroFactoril >= resultado)
{
   resultado=numeroFactoril;
   numeroFactoril++;

alert(`su numero factorial es: ${resultado}`);

}

console.log(factorial);



}
*/