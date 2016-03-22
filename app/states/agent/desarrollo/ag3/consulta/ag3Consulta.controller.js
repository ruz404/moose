angular.module( 'moose' ).controller( 'ag3ConsultaController', ag3ConsultaController );

ag3ConsultaController.$inject = [];

function ag3ConsultaController(){
  var vm = this;

  vm.toggleEdicion = toggleEdicion;
		vm.consulta = true;

	active();

	function active() {

	}

	function toggleEdicion() {
		vm.consulta = !vm.consulta;
	}

  vm.prospects = {
    referidos: 1, llamadas: 4, contactos: 5, citas: 3,
  };

  vm.productivity = {
    iInterview: 5, cInterview: 2, hrsVenta: 5, req: 3,
  };

  vm.finalResults = {
    comisiones: 1, polizasPagadas: 3, score:"NaN",
  };

}
