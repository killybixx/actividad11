let n;
let suma = 0;
do{
    n=Number(prompt("Ingrese un numero"));
    suma+=n; //suma = suma +n;
}while(n!=-1)

console.log("La suma de los numeros es:"+ suma);