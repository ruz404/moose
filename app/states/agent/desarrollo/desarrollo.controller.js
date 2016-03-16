angular.module( 'moose' ).controller( 'desarrolloController', desarrolloController );

desarrolloController.$inject = [];

function desarrolloController() {


	Highcharts.chart( 'container', {
		chart: {
			type: 'funnel',
		},
		title: {
			text: '',
		},
		plotOptions: {
			series: {
				dataLabels: {
					enabled: false,
					format: '<b>{point.name}</b> ({point.y:,.0f})',
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
					softConnector: true
				},
				neckWidth: '40%',
				neckHeight: '30%'
				//-- Other available options
				// height: pixels or percent
				// width: pixels or percent
			},
		},
		series: [{
			name: 'Formas',
			data: [
				[ 'completadas', 15654 ],
				[ 'pendientes', 4064 ],
				[ 'en proceso', 1987 ],
				[ 'canceladas', 976 ],
				[ 'sin comenzar', 846 ]
			]
		}]
	});

}
