angular.module( 'moose', [
  'ui.router',
  'ngMaterial',
  'angular-click-outside'
]).
config( [ '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function( $stateProvider, $urlRouterProvider, $mdThemingProvider ) {

	// configuracion del tema
	// requiere mdThemingProvider

	$mdThemingProvider.definePalette('main', {
		'50': '#fcfeff',
		'100': '#b0e4ff',
		'200': '#78d1ff',
		'300': '#30b8ff',
		'400': '#12aeff',
		'500': '#009ff2',
		'600': '#008bd3',
		'700': '#0077b5',
		'800': '#006396',
		'900': '#004f78',
		'A100': '#fcfeff',
		'A200': '#b0e4ff',
		'A400': '#12aeff',
		'A700': '#0077b5',
		'contrastDefaultColor': 'light',
		'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
	});

	$mdThemingProvider.definePalette('accent', {
		'50': '#ffffff',
		'100': '#fffbfc',
		'200': '#ffc3d8',
		'300': '#ff7ba9',
		'400': '#ff5d95',
		'500': '#ff3e81',
		'600': '#ff1f6d',
		'700': '#ff0159',
		'800': '#e1004e',
		'900': '#c30044',
		'A100': '#ffffff',
		'A200': '#fffbfc',
		'A400': '#ff5d95',
		'A700': '#ff0159',
		'contrastDefaultColor': 'light',
		'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
	});

	$mdThemingProvider.theme( 'moose' )
	.primaryPalette( 'main' )
    .accentPalette( 'pink' );

	$mdThemingProvider.setDefaultTheme( 'moose' );

	// Rutas y estados
	$urlRouterProvider.otherwise( 'home/agente/perfil' ); // si un url no coincide con ningun estado, regresa al estado home
	$stateProvider.
	state( 'home', {
		url: '/home',
		views: {
			'': { // no caracter ni espacios coloca esta view como la default
				templateUrl: 'states/home/home.view.html',
				controller: 'homeController'
			}
		}
	}).
	state( 'agente', {
		parent: 'home',
		url: '/agente', // se le suma al url del padre = '/home' + '/agent'
		views: {
			'': {
				templateUrl: 'states/agent/agent.view.html',
				controller: 'agentController'
			},
			'profile@agente': { // @agent hace que ui-view="profile" sea activado solamente si el estado agent esta activo
				templateUrl: 'states/agent/profile/agent.profile.view.html',
				controller: 'agentProfileController'
			},
			'recruit@agente': {
				templateUrl: 'states/agent/recruit/agent.recruit.view.html',
				controller: 'agentRecruitController'
			},
			'desarrollo@agente': {
				templateUrl: 'states/agent/desarrollo/desarrollo.view.html',
				controller: 'desarrolloController',
			},
		}
	}).
	state( 'agente.perfil', {
		//parent: 'agente',
		url: '/perfil', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/profile/agent.profile.view.html',
				controller: 'agentProfileController'
			},
		}
	}).
	state( 'agente.recluta', {
		//parent: 'agente',
		url: '/recluta', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/recruit/agent.recruit.view.html',
				controller: 'agentRecruitController'
			},
		}
	}).
	state( 'agente.desarrollo_dashboard', {
		//parent: 'agente',
		url: '/desarrollo', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/desarrollo/desarrollo.view.html',
				controller: 'desarrolloController',
			},
		}
	}).
	state( 'agente.desarrollo_ag2', {
		//parent: 'agente',
		url: '/desarrollo/ag2', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/desarrollo/ag2/ag2.view.html',
				controller: 'ag2Controller',
			},
		}
	}).
	state( 'agente.ag2_consulta', {
		//parent: 'agente',
		url: '/desarrollo/ag2/consulta', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/desarrollo/ag2/consulta/ag2Consulta.view.html',
				controller: 'ag2ConsultaController',
			},
		}
	}).
	state( 'agente.desarrollo_ag3', {
		//parent: 'agente',
		url: '/desarrollo/ag3', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/desarrollo/ag3/ag3.view.html',
				controller: 'ag3Controller',
			},
		}
	}).
  state( 'agente.ag3_lista', {
		//parent: 'agente' y 'ag3',
		url: '/desarrollo/ag3/lista', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/desarrollo/ag3/lista/ag3Lista.view.html',
				controller: 'ag3ListaController',
			},
		}
	}).
  state( 'agente.ag3_consulta', {
    //parent: 'agente' y ag3,
    url: '/desarrollo/ag3/consulta', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
    views: {
      '': {
        templateUrl: 'states/agent/desarrollo/ag3/consulta/ag3Consulta.view.html',
        controller: 'ag3ConsultaController',
      },
    }
  }).
	state( 'agente.desarrollo_oia', {
		//parent: 'agente',
		url: '/desarrollo/OIA', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/desarrollo/oia/oia.view.html',
				controller: 'oiaController',
			},
		}
	}).
  state( 'agente.desarrollo_oiaNuevo', {
    //parent: 'agente',
    url: '/desarrollo/OIA/nuevo', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
    views: {
      '': {
        templateUrl: 'states/agent/desarrollo/oiaNuevo/oiaNuevo.view.html',
        controller: 'oiaNuevoController',
      },
    }
  }).
  state('agente.desarrollo_oiaConsulta', {
    url: '/desarrollo/OIA/consulta',
    views: {
      '': {
        templateUrl: 'states/agent/desarrollo/oiaConsulta/oiaConsulta.view.html',
        controller: 'oiaConsultaController',
      },
    }
  }).
  state('agente.desarrollo_oiaEdicion', {
    url: '/desarrollo/OIA/edicion',
    views: {
      '': {
        templateUrl: 'states/agent/desarrollo/oiaEdicion/oiaEdicion.view.html',
        controller: 'oiaEdicionController',
      },
    }
  }).
	state( 'agente.desarrollo_fod', {
		//parent: 'agente',
		url: '/desarrollo/FOD', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/desarrollo/fod/fod.view.html',
				controller: 'fodController',
			},
		}
	}).
	state( 'agente.desarrollo_compromisos', {
		//parent: 'agente',
		url: '/desarrollo/compromisos', // se le suma al url del padre = '/home' + '/agent' + '/perfil'
		views: {
			'': {
				templateUrl: 'states/agent/desarrollo/compromisos/compromisos.view.html',
				controller: 'compromisosController',
			},
		}
	}).
	state( 'arranque_rapido', {
		parent: 'home',
		url: '/arranque_rapido',
		views: {
			'': {
				templateUrl: 'states/arranque_rapido/arranqueRapido.view.html',
				controller: 'arranqueRapidoController'
			}
		}
	}).
	state( 'nuevo_prospecto', {
		parent: 'home',
		url: '/nuevo_prospecto',
		views: {
			'': {
				templateUrl: 'states/nuevo_prospecto/nuevoProspecto.view.html',
				controller: 'nuevoProspectoController'
			}
		}
	}).
	state( 'equipo', {
		parent: 'home',
		url: '/equipo',
		views: {
			'': {
				templateUrl: 'states/equipo/equipo.view.html',
				controller: 'equipoController'
			}
		}
	}).
	state( 'desarrollo', {
		parent: 'home',
		url: '/agente/desarrollo/ag2',
		views: {
			'': {
				templateUrl: 'states/ag2/ag2.view.html',
				controller: 'ag2Controller'
			}
		}
	});
}]);
