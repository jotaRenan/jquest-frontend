 angular.module('jQuest')
 .controller('ManageModulesCtrl', function($scope, $log, $http) {
   // TODO: change attribute names in order to match json
   $scope.selectedModule = undefined;
   $scope.selectedModuleId = undefined;
   $scope.modules = [];
   $http ({
        method: 'GET',
        url: `http://localhost:8080/JQuestWebApplication/GetDomainsFullDataServlet`
    })
     .then(response => {
       $scope.domains = response.data;
       $scope.modules = response.data.map(domain => $scope.modules.concat(domain.modules));
       $scope.modules = [].concat(...$scope.modules); // flattens bi-dimensional array
     });
   $scope.deleteModule = () => {
     //Deletes module whose id is registered at $scope.selectedModule;
   };
   $scope.updateFields = () => {
     $scope.selectedModule = $scope.modules.find(m => m.id == $scope.selectedModuleId);
   };
 })
