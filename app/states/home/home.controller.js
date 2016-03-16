angular.module( 'moose' ).controller( 'homeController', homeController );

homeController.$inject  = [ '$mdSidenav', '$mdDialog', '$scope', '$autocomplete', '$state' ];

function homeController( $mdSidenav, $mdDialog, $scope, $autocomplete, $state ) {

	var vm = this;

	// formato de objecto necesario para md-autocomplete
	/*
		{
			value, display, id
		}
	*/
	vm.prospectos = [
		{ value: "david chavez espejo", display: "David Chavez Espejo" },
		{ value: "ramon ornelas aguirre", display: "Ramón Ornelas Aguirre" },
		{ value: "salvador herrara tamez", display: "Salvador Herrara Tamez" },
		{ value: "carlos vargas gutierrez", display: "Carlos Vargas Gutierrez" },
		{ value: "gabriel garcia marquez", display: "Gabriel García Márquez" },
		{ value: "carlos alberto ortega martin del campo", display: "Carlos Alberto Ortega Martín del Campo" },
		{ value: "alejandra maria sanchez abia", display: "Alejandra María Sánchez Abia" },
		{ value: "alejandra maria sanchez abia", display: "Alejandra María Sánchez Abia" },
		{ value: "alejandra maria sanchez abia", display: "Alejandra María Sánchez Abia" },
	];

	/* funciones del DOM
	******************************/
	vm.toggleSidemenu = toggleSidemenu;
	vm.buscarProspecto = buscarProspecto;
	/* funciones del dialogo
	******************************/
	vm.buscarTexto = $autocomplete.search;
	vm.verDetalle = verDetalle;
	vm.cancelarDialogo = cancelarDialogo;

	active();

	/********************************************************/

	function active() {

	}

	function toggleSidemenu() {
		$mdSidenav('sideMenu').toggle();
	}

	function buscarProspecto( ev ) {
		$mdDialog.show({
			templateUrl: 'states/home/dialogos/buscarProspecto.dialog.html',
			scope: $scope,
			preserveScope: true,
			targetEvent: ev,
			clickOutsideToClose: true,
			escapeToClose: true,
		});
	}

	function verDetalle(){
		$mdDialog.hide();
		$state.go( 'agente.perfil' );
	}

	function cancelarDialogo() {
		$mdDialog.cancel();
	}

}
