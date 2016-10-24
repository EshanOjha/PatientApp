myApp.controller('listController', ['$scope', '$http', '$location','$routeParams', function($scope, $http, $location, $routeParams){
      console.log('listController run')
   
      $scope.getPatientList= function(){
        $http.get('/api/getAllPatients').success(function(response){
            console.log(response);
           $scope.allPatient=response;
        });
	}  
                          
}]);
