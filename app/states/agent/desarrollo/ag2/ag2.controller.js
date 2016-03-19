angular.module( 'moose' ).controller( 'ag2Controller', ag2Controller );

ag2Controller.$inject = [ '$state' ];

function ag2Controller( $state ) {
	var vm = this;

	vm.irADetalle = irADetalle;


	active();

	/*********************************/

	function active() {

	}

	function irADetalle() {
		$state.go( 'agente.ag2_consulta' );
	}


	// feo de aqui para abajo

  vm.customer = [
    {cliente: "David Chavez Espejo", poliza:"15184787", producto: "Orvi 12", fechaI: "24-12-2015", sumaAsegurada:"$200,000", prima: "$14,000"},
    {cliente: "Ramón Ornelas Aguirre", poliza:"15184787", producto: "Orvi 12", fechaI: "24-12-2015", sumaAsegurada:"$400,000", prima: "$14,000"},
    {cliente: "Salvador Herrara Tamez", poliza:"15184787", producto: "Orvi 12", fechaI: "24-12-2015", sumaAsegurada:"$200,000", prima: "$14,000"},
    {cliente: "Carlos Vargas Gutierrez", poliza:"15184787", producto: "Orvi 12", fechaI: "24-12-2015", sumaAsegurada:"$222,000", prima: "$14,000"},
    {cliente: "Gabriel García Márquez", poliza:"15184787", producto: "Orvi 12", fechaI: "24-12-2015", sumaAsegurada:"$120,000", prima: "$14,000"},
    {cliente: "Carlos Alberto Ortega", poliza:"15184787", producto: "Orvi 12", fechaI: "24-12-2015", sumaAsegurada:"$202,000", prima: "$14,000"},
    {cliente: "Alejandra María Sánchez Abia", poliza:"15184787", producto: "Orvi 12", fechaI: "24-12-2015", sumaAsegurada:"$100,000", prima: "$14,000"},
    {cliente: "Alejandra María Sánchez Abia", poliza:"15184787", producto: "Orvi 12", fechaI: "24-12-2015", sumaAsegurada:"$80,000", prima: "$14,000"},
    {cliente: "Alejandra María Sánchez Abia", poliza:"15184787", producto: "Orvi 12", fechaI: "24-12-2015", sumaAsegurada:"$130,000", prima: "$14,000"},
    ];

    this.announceClick = function(index) {
      $mdDialog.show(
        $mdDialog.alert()
        .title('You clicked!')
        .textContent('You clicked the menu item at index ' + index)
        .ok('Nice')
     );
    };

    // vm.Dialog;

    vm.items = [
      {it:"Ver detalle"},
      {it:"Editar"},
    ];

    this.topDirections = ['left','up'];
    this.bottomDirections = ['down','rigth'];
    this.isOpen = false;
    this.availableModes = ['md-fling','md-scale'];
    this.selectedMode = 'md.-filing';
    this.availableDirections = ['up','down','left','right'];
    this.slectedDirection = 'up';


    // function openMenu(index){
    //   show(
    //     alert()
    //     .title('You clicked')
    //     .textContent('you clicked the menu item at index ' + index)
    //     .ok('Nice')
    //   );
    // }


// vm.openMenu = openMenu;

}
