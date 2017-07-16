 angular.module('jQuest')
 .controller('ManageDomainsCtrl', function($scope, $log, $http) {
   $scope.selectedDomain = undefined;
   $scope.selectedDomainId = undefined;
   $scope.updateFields = () => {
     $scope.selectedDomain = $scope.domains.find(m => m.domainId == $scope.selectedDomainId);
     $log.log($scope.selectedDomain);
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
