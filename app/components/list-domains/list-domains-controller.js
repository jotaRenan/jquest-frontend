angular.module('jQuest')

.controller('ListDomainsCtrl', function($scope, $log, $http) {
  $http ({
       method: 'GET',
       url: `http://localhost:8080/JQuestWebApplication/GetDomainsFullDataServlet`
   })
    .then(response => {
      $scope.domains = response.data;
    });

});
