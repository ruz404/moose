angular.module( 'moose' ).controller( 'agentRecruitController', agentRecruitController );

agentRecruitController.$inject = [ '$scope', '$mdDialog' ];

function agentRecruitController( $scope, $mdDialog ) {

	var vm = this;

	/* funciones del DOM
	***************************************/
	vm.abrirDialogo =abrirDialogo;

	// objeto contact
	vm.contact = {
		executive: 'Fernando Garza Morales',
		date: '12-12-2016'
	};

	function abrirDialogo( nombreDialogo, $event ) {
		$mdDialog.show({
			scope: $scope,
			preserveScope: true,
			targetEvent: $event,
			parent: angular.element( document.body ),
			clickOutsideToClose: true,
			templateUrl: './states/agent/recruit/dialogos/' + nombreDialogo + '.dialog.html',
		});
	}


}

/*
angular.module( 'moose' ).controller( 'agentRecruitController', agentRecruitController );

agentRecruitController.$inject = ['$scope', '$mdDialog', '$mdMedia'];

function agentRecruitController($scope, $mdDialog, $mdMedia) {

	var vm = this;
	vm.doPrimaryAction = doPrimaryAction;
    vm.showDialogPOP = showDialogPOP;
    vm.showDialogCita = showDialogCita;
    vm.showDialogAsis = showDialogAsis;
    vm.showDialogCancel = showDialogCancel;
    vm.DialogController=DialogController;


	// objeto contact
	vm.contact = {
		executive: 'Fernando Garza Morales',
		date: '12-12-2016'
	};

	function doPrimaryAction(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Primary Action')
        .textContent('Primary actions can be used for one click actions')
        .ariaLabel('Primary click demo')
        .ok('Awesome!')
        .targetEvent(event)
    );
    };


   function showDialogCita($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog aria-label="List dialog">' +
           '  <md-dialog-content layout-padding>'+
            '       <label>Agendar cita selección</label>' +
                        '       <br>' +
            '       <md-input-container class="input-format" flex-xs style="width:97%;">' +
            '       <label>Entrevistador</label>' +
            '       <input type="text" placeholder="Alejandra María Sánchez " ng-model="user.client" />' +
            '       </md-input-container><br>' +
            '       <md-datepicker class="date-format"  ng-model="myDate" md-placeholder="Fecha"></md-datepicker><br>' +
           '      '+
           '       <md-select ng-model="OptionsDial1" placeholder="Hora">' +
            '       <md-option value="Opcion 1">' +
             '       Opcion 1' +
              '       </md-option>' +
            '       <md-option value="Opcion 2">' +
             '       Opcion 2' +
              '       </md-option>' +
            '       <md-option value="Opcion 3">' +
             '       Opcion 3' +
              '       </md-option>' +
           '       </md-select>' +
            '       <md-input-container class="input-format" flex-xs style="width:97%;">' +
            '       <label>Descripción</label>' +
            '       <input type="text" placeholder="Alejandra María Sánchez " ng-model="user.client" />' +
            '       </md-input-container><br>' +
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Guardar' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         controller: DialogController
      });
   };

   function showDialogAsis($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog aria-label="List dialog">' +
           '  <md-dialog-content layout-padding>'+
            '       <label>Confirmar cita de selección</label>' +
                        '       <br>' +
            '       <md-input-container class="input-format" flex-xs style="width:97%;">' +
            '       <label>Entrevistador</label>' +
            '       <input type="text" placeholder="Alejandra María Sánchez " ng-model="user.client" disabled/>' +
            '       </md-input-container><br>' +
            '       <md-datepicker class="date-format"  ng-model="myDate" md-placeholder="Fecha" disabled></md-datepicker><br>' +
           '      '+
           '       <md-select ng-model="OptionsDial1" placeholder="Hora" disabled>' +
            '       <md-option value="Opcion 1">' +
             '       Opcion 1' +
              '       </md-option>' +
            '       <md-option value="Opcion 2">' +
             '       Opcion 2' +
              '       </md-option>' +
            '       <md-option value="Opcion 3">' +
             '       Opcion 3' +
              '       </md-option>' +
           '       </md-select>' +
            '       <md-input-container class="input-format" flex-xs style="width:97%;">' +
            '       <label>Descripción</label>' +
            '       <input type="text" placeholder="Alejandra María Sánchez " ng-model="user.client" disabled/>' +
            '       </md-input-container><br>' +
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '  <div layout="row">' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Asistió' +
           '    </md-button>' +
           '    <md-button ng-click="cancelCita()" class="md-primary">' +
           '      Cancelar cita' +
           '    </md-button>' +
           '    </div' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         controller: DialogController
      });
   };

   function showDialogCancel($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog aria-label="List dialog">' +
           '  <md-dialog-content layout-padding>'+
            '       <label>Cancelar cita selección</label>' +
                        '       <br>' +
            '       <md-checkbox md-no-ink aria-label="Checkbox No Ink" ng-model="data.cb2" class="md-primary" flex="50">' +
                        '       Decisión del prospecto' +
            '       </md-checkbox><br>' +
            '       <md-datepicker class="date-format"  ng-model="myDate" md-placeholder="Fecha"></md-datepicker><br>' +
            '       <md-input-container class="input-format" flex-xs style="width:97%;">' +
            '       <label>Ejecutivo</label>' +
            '       <input type="text" placeholder="Alejandra María Sánchez " ng-model="user.client" />' +
            '       </md-input-container><br>' +
           '      '+
           '       <md-select ng-model="OptionsDial1" placeholder="Motivo">' +
            '       <md-option value="Opcion 1">' +
             '       Opcion 1' +
              '       </md-option>' +
            '       <md-option value="Opcion 2">' +
             '       Opcion 2' +
              '       </md-option>' +
            '       <md-option value="Opcion 3">' +
             '       Opcion 3' +
              '       </md-option>' +
           '       </md-select>' +
            '       <md-input-container class="input-format" flex-xs style="width:97%;">' +
            '       <label>Comentarios</label>' +
            '       <input type="text" placeholder="Alejandra María Sánchez " ng-model="user.client" />' +
            '       </md-input-container><br>' +
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '  <div layout="row">' +
           '    <md-button ng-click="reAgen()" class="md-primary">' +
           '      Reagendar' +
           '    </md-button>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Cancelar' +
           '    </md-button>' +
           '    </div' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         controller: DialogController
      });
   };

      function DialogController($scope, $mdDialog) {

        $scope.closeDialog = function() {
            console.log("Funciona");
          $mdDialog.hide();
        }
        $scope.cancelCita = function() {
            console.log("Funciona");
          $mdDialog.hide();
          vm.showDialogCancel();
        }
        $scope.reAgen = function() {
            console.log("Funciona");
          $mdDialog.hide();
          vm.showDialogCita();
        }
      }


}
*/
