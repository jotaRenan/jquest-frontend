 angular.module('jQuest')
 .controller('ManageDomainsCtrl', function($scope, $log, $http) {
   $scope.selectedDomain = undefined;
   $scope.updateFields = () => {
     $scope.selectedDomain = $scope.domains.find(domain => domain.id == $scope.selectedDomain.id);
   }
   $http ({
        method: 'GET',
        url: `http://localhost:8080/JQuestWebApplication/GetDomainsFullDataServlet`
    })
     .then(response => {
       $scope.domains = response.data;
     });
   $scope.deleteDomain = () => {
     //Deletes domain whose id is registered at $scope.selectedDomain;
   };
 })
