/*Problema fácil 15(20 puntos):
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
output nuevoArr = [12, 24, 36, 48]*/

var numbers = [1, 2, 3, 4, 5];
function multiply(numbers) {    /*utilizo numbers como nombre del parametro, 
    establezco una array vacío,recorro  los valores de la variable numbers y retorno a través
    de un push los numeros multiplicados por 12*/
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 12); // [i] es la variable que va cambiando, desde 0 hasta cumplir la condicion.
    }
    return result
}

/*Problema fácil 14(20 puntos):
Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
    Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
output nuevoArr = [2, 4, 6, 8, 10]*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEven(arreglo) {
    var result = [];
    for (i = 0; i < arr.length; i++) {  // lomgitud del arreglo, esta almacenada en la variable arr
        if (arr[i] % 2 == 0) {
            result.push(arr[i]);
        }                               //verificar que cada una de las posiciones es par, si es par hara el push.
    }
    return result                       
}


