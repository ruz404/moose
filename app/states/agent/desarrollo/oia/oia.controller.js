angular.module('moose').controller('oiaController', oiaController);

oiaController.inject$=['$filter'];

function oiaController($filter){
  var vm=this;

  var orderBy  = $filter( 'orderBy' );
	vm.ordering = 'ASC';
	vm.ordenarSemanas = ordernarNombres; // se declara asi hasta arriba como interface

  vm.lista = [
    {fecha: "15/07/2016", sem:"45", ob: "$750,000", prima: "$15,000"},
    {fecha: "15/07/2016", sem:"45", ob: "$750,000", prima: "$15,000"},
    {fecha: "15/07/2016", sem:"45", ob: "$750,000", prima: "$15,000"},
    {fecha: "15/07/2016", sem:"45", ob: "$750,000", prima: "$15,000"},
    ];

    active();

/***************************************************/
// despues las funciones se manipulan con puro javascript
  function active() {
  vm.reversa = false;
  vm.lista = orderBy( vm.lista, 'sem', false );
  }

  function ordernarNombres( predicado ) { // es importante declarar la funcion y asignarla a una variable del vm
  vm.ordering = ( vm.ordering === 'ASC' ) ? 'DESC' : 'ASC';
  vm.predicado = predicado;
  vm.reversa = ( vm.predicado === predicado ) ? !vm.reversa : false;
  vm.lista = orderBy( vm.lista, vm.predicado, vm.reversa );
  }
}
