/*Problema medio 8(30 puntos):
    Dado un arreglo y un número, retornar el índice(posición) del número.
Ejemplo: arr = [1, 5, 8, 19]
number = 8
retorna 2 */

var search = function (array, element) {
    /*Se recorre el array como parametro de esta funcion,
    que inicie en 0 y llegue a la ultimma posicion del array*/
    for (var i = 0; i < array.length: i++) {
        /* comparar los elementos del array con lo que estoy buscando*/
        if (array[i] === element) { /* El array que se encuentre en la posicion,compararlo de manera estricta (valor y tipo), con el elemento que se esta buscando*/
            return i // si el elemento que se encuentra en esa posicion es igual a lo que estoy buscando, retornar ese valor del indice.      .
        }
    }
}

search([1, 5, 8, 19], 8)

/*Problema medio 9(30 puntos):
Dados dos arreglos, devolver un nuevo arreglo que contenga la suma de los índices de cada array, arr1[índice 0]+ arr2[índice 0] = nuevoArr[indice 0]
Ejemplo: arr1 = [1, 2, 3, 4]
arr2 = [5, 6, 7, 8]
retorna nuevoArr = [6, 8, 10, 12]*/

/*Se establece una variable con array vacío para la funcion con parametros array1 y array2, ambos parametros 
se recorren con un for*/
function Sum(array1, array2) {
    var result = [];
    for (var x = 0; x < array1.length; x++) {

        for (var y = 0; y < array2.length; y++) {

      
/*se suman los valores de los parametros, y el resultado se retorna con un push al arra vacio*/
                result.push(array1[x] + array2[y]);
            }
        
    }
    return result;
}

/*Problema medio 10(30 puntos):
Un grupos de amigos van a un evento y sus nombres están dentro de un arreglo.
Escribir una función donde dado el nombre de la persona puedas retornar el asiento que le toca.La numeración comienza en 1, si la persona no tiene asiento retornar 0.
Ejemplo: lista = [“Allison”, “Belén”, “Nadia”, “Marcia”, “Ale”, “Fabián”]
nombre = “Nadia”
retorna 3*/

/*Se establece una función con dos parametros, se recorre el parametro 
lista con un for, esto corresponde a los nombres*/
var position = function asiento(lista,nombre){
    for(var i = 0; i < lista.length;i++){
        if(lista[i] === nombre){  /* si el nombre es igual en valor y tipo al de la lista,
                                     se retorna la posicion de i +1, ya que la numeración
                                     de los asientos comienza en 1*/
            return [i+1];
        }
    }


}