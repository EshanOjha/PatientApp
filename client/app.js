var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/', {
		controller:'patientController',
		templateUrl: 'views/addPatient.html'
	})
    .when('/patientList',{
        controller:'listController',
        templateUrl:'views/patientListp.html'
    })
    .otherwise({
		redirectTo: '/'
	});
});