 angular.module('jQuest')
 .controller('ManageModulesCtrl', function($scope, $log) {
   $scope.selectedModule = undefined;
   $scope.selectedModuleId = undefined;
   $scope.updateFields = () => {
     $scope.selectedModule = $scope.modules.find(m => m.id == $scope.selectedModuleId);
   }
   $scope.modules = [
     {
       id : 1,
       name : 'Citologia',
       domainName : 'Biologia',
       domainId : 1
     },
     {
       id : 2,
       name : 'Geopolitica',
       domainName : 'Geography',
     }
   ];
   $scope.domains = [
     {
       id: 1,
       name : 'Biologia',
     },
     {
       id: 2,
       name: 'Geografia',
     }
   ]
   $scope.deleteModule = () => {
     //Deletes module whose id is registered at $scope.selectedModule;
   };
 })
