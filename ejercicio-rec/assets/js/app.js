$(document).ready(function () {
    /*Al hacer click en el boton, a través de  prompts pide ingresar las notas, se utiliza parseint para que se ingresen numeros enteros*/
    $("#btn-note").click(function() {

       var nota1 = parseInt(prompt("Ingrese primera nota"));
       var nota2 = parseInt(prompt("Ingrese segunda nota"));
       var nota3 = parseInt(prompt("Ingrese tercera nota"));
       var nota4 = parseInt(prompt("Ingrese cuarta nota"));
       var nota5 = parseInt(prompt("Ingrese quinta nota"));
       var nota6 = parseInt(prompt("Ingrese sexta nota"));
       var nota7 = parseInt(prompt("Ingrese septima nota"));
       var nota8 = parseInt(prompt("Ingrese octava nota"));
       var nota9 = parseInt(prompt("Ingrese novena nota"));
       var nota10= parseInt(prompt("Ingrese decima nota"));

    /*Ocultar div inicial*/

            $("#notas").hide()
    /*Agregar una lista con las notas obtenidas en un segundo div*/
            $("#print").append( "<ul class = 'list-group'>"+
                    "<li class = 'list-group-item list-group-item-warning' >" + nota1 +  "</li>" +
                    "<li class = 'list-group-item list-group-item-warning' >" + nota2 + "</li>" +
                    "<li class = 'list-group-item list-group-item-warning' >" + nota3 + "</li>" +
                    "<li class = 'list-group-item list-group-item-warning' >" + nota4 + "</li>" +
                    "<li class = 'list-group-item list-group-item-warning' >" + nota5 + "</li>" +
                    "<li class = 'list-group-item list-group-item-warning' >" + nota6 + "</li>" +
                    "<li class = 'list-group-item list-group-item-warning' >" + nota7 + "</li>" +
                    "<li class = 'list-group-item list-group-item-warning' >" + nota8 + "</li>" +
                    "<li class = 'list-group-item list-group-item-warning' >" + nota9 + "</li>" +
                    "<li class = 'list-group-item list-group-item-warning' >" + nota10 + "</li>" +
                    "</ul>")
        /*Agregar un boton para calcular el promedio*/            
            $("#print").append("<button id = 'btn-prom' type = 'button' class = 'btn btn-warning' > Calcular promedio </button>")

            
        /*Al hacer click en el boton calcular promedio, se calcula el promedio de las notas ingresadas
          se mostrara una alerta con el promedio obtenido y otra alerta indicando si aprobo o reprobo el ramo
          segun la nota obtenida*/   
            $("#btn-prom").click(function () {
            var suma = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10)
            var promedio = (suma/10);
            var mensaje =alert("Tu promedio es" +  promedio);
            if (promedio < 40) {
            alert("Reprobaste el ramo")
            } else(promedio >= 40)
            alert("Felicitaciones,aprobaste el ramo")
            
            })
    })

 
})
