
let Numero1 = prompt("Ingrese numero 1");
let Numero2 = prompt("Ingrese numero 2");
let Numero3 = prompt("Ingrese numero 3");

const Numero11 = parseInt (Numero1)
const Numero22 = parseInt (Numero2)
const Numero33 = parseInt (Numero3)

if (Numero11>=Numero22 && Numero11>=Numero33) {
    
    console.log(parrafo);
    parrafo.innerHTML = "El numero " + Numero11 + " es el mayor";
    }
    else if (Numero22>=Numero11 && Numero22>=Numero33) {
        
    console.log(parrafo);
    parrafo.innerHTML = "El numero " + Numero22 + " es el mayor";
    }
    else {
        
    console.log(parrafo);
    parrafo.innerHTML = "El numero " + Numero33 + " es el mayor";
    }