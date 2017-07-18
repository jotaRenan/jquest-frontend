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
       $scope.domains.map(domain => domain.modules.map(module => module.domainId = domain.id));
       $scope.modules = response.data.map(domain => $scope.modules.concat(domain.modules));
       $scope.modules = [].concat(...$scope.modules); // flattens bi-dimensional array
     });
   $scope.deleteModule = () => {
     const payload = {id, name, description, domainId} = $scope.selectedModule;
     $http({
       method: 'POST',
       url: `http://localhost:8080/JQuestWebApplication/DeleteModuleServlet`,
       data: payload,
     });
     // TODO: refresh data after request
   };
   $scope.updateModule = () => {
     // sweet ES6 destructuring
     const payload = {id, name, description, domainId} = $scope.selectedModule;
     $http({
       method: 'POST',
       url: `http://localhost:8080/JQuestWebApplication/UpdateModuleServlet`,
       data: payload,
     });
     // TODO: refresh data after request
   }
   $scope.createModule = () => {
     const payload = {domainId, name, description} = $scope.newModule;
     $http({
       method: 'POST',
       url: `http://localhost:8080/JQuestWebApplication/CreateModuleServlet`,
       data: payload,
     });
     // TODO: refresh data after request
   }
   $scope.updateFields = () => {
     $scope.selectedModule = $scope.modules.find(m => m.id == $scope.selectedModuleId);
   };
 })
