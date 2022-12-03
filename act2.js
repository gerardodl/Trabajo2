//Utilizamos var para declarar una variable como en este caso lo seria buenas, nombre, edad y edadd. 
//En este caso despues de var se encuentra el nombre de un objeto llamado gerardo el cual guardara todas sus variables.
var gerardo = {
    buenas: 'Buenas me llamo',
    nombre: 'Gerardo y tengo',    
    edad: '17',
    edadd: 'años',
} 

//Con function imprimirNombreEnMinusculas imprimimos las variables del objeto en console.
function imprimirNombreEnMinusculas(persona) {
var buenas = persona.buenas;
var nombres = persona.nombre;
var edad = persona.edad;
var edadd = persona.edadd;
//Con console.Log mostranos en la consola las variables.
console.log(`${buenas} ${persona.nombre} ${persona.edad} ${persona.edadd}`);
}

//Enseguida encontramos las variables que queremos imprimir en console del objeto Gerardo.
var nnombre = 'Gerardo', eedad = 17 ;
function imprimirSaludo(n, e) {
    console.log(`Hola me llamo ${n} y tengo ${e} años`);

}

//Con imprimirNombreEnMinusculas imprimimos el nombre en minusculas.
imprimirNombreEnMinusculas(gerardo);
//Con imprimirSaludo volvimos a imprimir el objeto en console.
imprimirSaludo(nnombre, eedad);