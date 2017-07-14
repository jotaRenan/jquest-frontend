 angular.module('jQuest')
 .controller('ManageDomainsCtrl', function($scope, $log) {
   $scope.selectedDomain = undefined;
   $scope.selectedDomainId = undefined;
   $scope.updateFields = () => {
     $scope.selectedDomain = $scope.domains.find(m => m.id == $scope.selectedDomainId);
   }
 
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
   $scope.deleteDomain = () => {
     //Deletes domain whose id is registered at $scope.selectedDomain;
   };
 })
