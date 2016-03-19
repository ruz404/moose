angular.module( 'moose' ).controller( 'oiaController', oiaController );

oiaController.inject$ = [ '$filter' ];

function oiaController( $filter ) {
	var vm=this;
	var orderBy  = $filter( 'orderBy' );

	vm.ordenar = ordenar; // se declara asi hasta arriba como interface
		vm.ordering = 'ASC';
		vm.filtroActivo = ''; // string con nombre de atributo

	vm.lista = [
		{fecha: "15/07/2016", sem:"43", ob: "$750,000", prima: "$15,000"},
		{fecha: "12/07/2016", sem:"32", ob: "$750,000", prima: "$15,000"},
		{fecha: "13/07/2016", sem:"45", ob: "$750,000", prima: "$15,000"},
		{fecha: "15/07/2016", sem:"45", ob: "$750,000", prima: "$15,000"},
		{fecha: "11/07/2016", sem:"45", ob: "$750,000", prima: "$15,000"},
		{fecha: "15/07/2016", sem:"42", ob: "$750,000", prima: "$15,000"},
		{fecha: "21/07/2016", sem:"44", ob: "$750,000", prima: "$15,000"},
		{fecha: "15/07/2016", sem:"45", ob: "$750,000", prima: "$15,000"},
		{fecha: "27/07/2016", sem:"48", ob: "$750,000", prima: "$15,000"},
		{fecha: "24/07/2016", sem:"39", ob: "$750,000", prima: "$15,000"},
		{fecha: "11/07/2016", sem:"36", ob: "$750,000", prima: "$15,000"},
		{fecha: "09/07/2016", sem:"37", ob: "$750,000", prima: "$15,000"},
	];

	active();

	/***************************************************/
	// despues las funciones se manipulan con puro javascript
	function active() {
		vm.reversa = false;
	}

	// vm.lista = orderBy( vm.lista, 'sem', false );  esta linea esta para pura referencia
	function ordenar( predicado ) { // es importante declarar la funcion y asignarla a una variable del vm
		vm.filtroActivo = predicado;
		vm.ordering = ( vm.ordering === 'ASC' ) ? 'DESC' : 'ASC';
		vm.predicado = predicado;
		vm.reversa = ( vm.predicado === predicado ) ? !vm.reversa : false;
		vm.lista = orderBy( vm.lista, vm.predicado, vm.reversa );
	}
}
