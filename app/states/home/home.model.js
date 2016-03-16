angular.module( 'moose' ).factory( 'homeModel', homeModel);

homeModel.$inject = [];

function homeModel(){

    function homeModel () {

    };

    homeModel.prototype = {
        exampleMethod: exampleMethod,
    };

    //////////////////////////////////////////////////////////////////////////////

    function exampleMethod() {
		console.log( 'lewl' );
    };

    //////////////////////////////////////////////////////////////////////////////

    return homeModel;

};
