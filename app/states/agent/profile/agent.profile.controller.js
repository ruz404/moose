angular.module( 'moose' ).controller( 'agentProfileController', agentProfileController );

agentProfileController.$inject = [];

function agentProfileController() {

	/* vm para usarse como estandar en todos los controllers, factories, services y directives */
	var vm = this;

	/* modelo que podria emplearse para firebase */
	vm.agent = {
		name: 'Fernando',
		lastname_1: 'Garza',
		lastname_2: 'Gomez',
		education : 'Lic. Artes Obscuras',
		sex: 'Macho Alfa',
		hobby: 'Picarse la nariz',
		university: 'Universidad de Monterrey',
		civil_status : 'Don Juan',
		birthdate: '21-06-1982',
		rfc: '123456789012',
		address: 'Vereda de las privanzas #458 Col. Privanzas 4',
		telephone: '83569845',
		mobile: '8116459875',
		email: 'asalinas@gmail.com',
		last_job: 'Arquitecto',
		current_job: 'Vendedor',
		last_department: 'Arquitectura',
		current_department: 'Ventas',
		last_monthly_income: 20000,
		current_monthly_income: 25000,
		monthly_expenses: 18555,
		savings: 145500,
		housing: 'Renta de departamento',
		monthly_housing_expense: 5000,
		spouse: {
			name: 'Blanca',
			lastname_1: 'Orozco',
			lastname_2: 'Gallegos',
			education: 'Arquitecta',
			telephone: '83569845',
			birthdate: '30-02-2001',
			mobile: '8116459875',
			anniversary_date: '04-04-2010'
		},
		executive: {
			name: 'Fernando',
			lastname_1: 'Garza',
			lastname_2: 'Garza',
			agency: 'AXA Seguros',
			source: 'Bolsa de trabajo',
			subsource: 'Bolsa de trabajo',
		},
		children: {
			0: {
				name: 'Jorge',
				lastname_1: 'Chavez',
				lastname_2: 'Chavez',
				birthdate: '08-05-1990',
				education: 'Estudiante Universidad',
				current_place: 'ITESM'
			},
			1: {
				name: 'Adrian',
				lastname_1: 'Chavez',
				lastname_2: 'Chavez',
				birthdate: '08-05-1990',
				education: 'Estudiante Universidad',
				current_place: 'ITESM'
			}
		},
		vehicles: {
			0: {
				brand: 'Honda',
				model: 'Civic',
				year: '2009',
			},
			1: {
				brand: 'Honda',
				model: 'Civic',
				year: '2009',
			}
		}
	};

	vm.selectThis = function() {
		var target = document.getElementById( e );
		var element = angular.element( target );
		if( element.hasClass( 'is-selected' ) ){
			element.removeClass( 'is-selected' );
		}
		else{
			element.addClass( 'is-selected' );
		}
	}


	/* estos nombres de las secciones de la informacion
		deben estar tambien en el template
		Actualizar aqui, actualizar template */
	/* editable es para usarse con el ng-show */
	vm.sections = [
		{ name: 'informacion-personal', editable: false },
		{ name: 'control-interno', editable: false },
		{ name: 'informacion-contacto', editable: false },
		{ name: 'conyuge', editable: false },
		{ name: 'hijos', editable: false },
		{ name: 'vehiculos', editable: false },
		{ name: 'economia', editable: false },
		{ name: 'inmuebles', editable: false }
	];

	vm.closeThis = function( openedItem ) {
		angular.forEach( vm.sections, function( obj, key ) {
			if( obj.name === openedItem ){
				obj.editable = false;
			}
		});
	}

	/* obtiene el nombre de la seccion, busca y muestra los inputs para editar */
	vm.editThis = function( selectedItem ) {
		angular.forEach( vm.sections, function( obj, key ) {
			if( obj.name === selectedItem ){
				obj.editable = true;
			}
			else{
				obj.editable = false;
			}
		});
	}


}
