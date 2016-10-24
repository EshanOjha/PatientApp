myApp.controller('patientController', ['$scope', '$http', '$location','$routeParams', function($scope, $http, $location, $routeParams){
   
    $scope.addPatient=function(valid){
        if(valid){
          var data=$scope.frmPatient;
        $http.post('/addPatient',data).success(function(response){
             console.log('data added')
			$location.path('/patientList');
         });
            
        }else{
            console.log('invalid form');
        }
        
    }

}]);
