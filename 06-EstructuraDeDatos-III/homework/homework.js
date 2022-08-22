"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
        this.n_nodos = 1;
    }
}
BinarySearchTree.prototype.size = function() {
    return this.n_nodos;
}
BinarySearchTree.prototype.insert = function(info) {
    let raiz = new BinarySearchTree(info);
    let indice = this;
    while (indice !== null) {
        if (info < indice.value) {
            if (indice.left === null) {
                indice.left = raiz;
                this.n_nodos++;
                break;
            }
            indice = indice.left;
        }
        if (info > indice.value) {
            if (indice.right === null) {
                indice.right = raiz;
                this.n_nodos++;
                break;
            }
            indice = indice.right;
        }
    }
}
BinarySearchTree.prototype.contains = function(info) {
    let indice = this;
    while (indice !== null) {
        if (indice.value === info) return true;
        if (info < indice.value) {
            indice = indice.left
            if (indice === null) return false;
            if (indice.value === info) return true;
        }
        if (info > indice.value) {
            indice = indice.right;
            if (indice === null) return false;
            if (indice.value === info) return true;
        }
    }
    return false;
};
BinarySearchTree.prototype.depthFirstForEach = function(cb, orden) {
    if (orden === 'in-order' || orden === undefined || null) {
        if (this.left !== null) this.left.depthFirstForEach(cb, orden);
        cb(this.value);
        if (this.right !== null) this.right.depthFirstForEach(cb, orden);
    }
    if (orden === "pre-order") {
        cb(this.value);
        if (this.left !== null) this.left.depthFirstForEach(cb, orden);
        if (this.right !== null) this.right.depthFirstForEach(cb, orden);
    }
    if (orden === "post-order") {
        if (this.left !== null) this.left.depthFirstForEach(cb, orden);
        if (this.right !== null) this.right.depthFirstForEach(cb, orden);
        cb(this.value);
    }
};
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
    if (this.left !== null) array.push(this.left);
    if (this.right !== null) array.push(this.right);
    cb(this.value);
    if (array.length !== 0) array.shift().breadthFirstForEach(cb, array);

};

/*let arbol = new BinarySearchTree(20);
let valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34],
    array = [];
valuesToInsert.forEach(function(x) { arbol.insert(x) });
console.log(arbol);
arbol.depthFirstForEach(function(val) { array.push(val) }, 'in-order');
console.log(array);
arbol.breadthFirstForEach(function(val) { array.push(val) });
console.log(array);*/


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};