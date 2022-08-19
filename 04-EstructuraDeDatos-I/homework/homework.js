'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/
let prod = 1,
    cont = 1;

function nFactorial(n) {
    prod = prod * (cont + 1);
    cont++;
    if (cont === n) {
        return prod;
    }
    if (cont !== n) return nFactorial(n);
}

let a = 0,
    b = 1,
    c = 0,
    cont1 = 1;

function nFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    if (cont1 === 1) {
        a = 0, b = 1, c = 0;
        c = a + b;
        a = c;
    }
    c = a + b, b = a, a = c;
    if (cont1 >= n - 2) {
        cont1 = 1;
        return c;
    }
    cont1++;
    if (cont1 <= n - 1) return nFibonacci(n);
}
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
class Queue {
    constructor() {
        this.elementos = [];
        this.tamanio = 0;
    }
    enqueue(element) {
        this.elementos.push(element);
        this.tamanio++;
    }
    dequeue() {
        if (this.tamanio === 0) return undefined;
        this.tamanio--;
        return this.elementos.shift();
    }
    size() {
        if (!this.tamanio) return 0;
        return this.tamanio;
    }
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    Queue,
    nFactorial,
    nFibonacci
};