const app = angular.module('jQuest',['ngRoute'])

.controller('MyQuestionsCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
})

.controller('RegisterCtrl', function($scope, $location)
{
   $scope.nome = 'ayy lmao';
})

.directive('jqNavbar', function() {
  return {
    restrict: 'E',
    templateUrl : 'app/components/shared/navbar.html'
  };
});
