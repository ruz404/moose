angular.module( 'moose' ).controller( 'arranqueRapidoController', arranqueRapidoController );

arranqueRapidoController.$inject = [ '$filter' ];

function arranqueRapidoController( $filter ) {
	var vm = this;

	var orderBy  = $filter( 'orderBy' );
	vm.ordering = 'ASC';
	vm.ordernarNombres = ordernarNombres; // se declara asi hasta arriba como interface

	vm.tops;
	vm.toppings = [
		{name: "Alejandra María Sánchez Abia", contact:"Contacto", wanted: false},
		{name: "Bertha Sánchez Abia", contact:"Contacto", wanted: false},
		{name: "Carlos María Sánchez", contact:"Contacto", wanted: false},
		{name: "David Sánchez Abia", contact:"Contacto", wanted: false},
		{name: "Eugenia María Sánchez Abia", contact:"Contacto", wanted: true},
		{name: "Alejandra María Sánchez Abia", contact:"Contacto", wanted: false},
		{name: "Pedro Alberto Sánchez", contact:"Contacto", wanted: false},
		{name: "Ramón Ortega Sánchez", contact:"Contacto", wanted: false}
	];

	active();

	/***************************************************/
	// despues las funciones se manipulan con puro javascript
	function active() {
		vm.reversa = false;
		vm.toppings = orderBy( vm.toppings, 'name', false );
	}

	function ordernarNombres( predicado ) { // es importante declarar la funcion y asignarla a una variable del vm
		vm.ordering = ( vm.ordering === 'ASC' ) ? 'DESC' : 'ASC';
		vm.predicado = predicado;
		vm.reversa = ( vm.predicado === predicado ) ? !vm.reversa : false;
		vm.toppings = orderBy( vm.toppings, vm.predicado, vm.reversa );
	}
}
