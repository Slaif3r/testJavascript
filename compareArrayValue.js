var array1 = [1,1,1, 2];
var arryResult = {};

array1.forEach(function(element) {
  console.log(element);
  if(cons_arryResultKeys(arryResult,element) === true){
	  
  }else{//aqui se debe proceder a agregar el valor al objeto
  }
});

//consultar si en el objeto existe alguna clave con el nombre del elemento que se le está pasando.
function cons_arryResultKeys(obj,element){
    return Object.keys(obj).includes(element);
}
//funcion encargada de validar los valores que pertenecen a cada clave
function cons_arryResultValue(obj,element){

	arryResult[element][arryResult[element].indexOf(1)] += 1;
}


