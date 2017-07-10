const app = angular.module('jQuest',['ngRoute'])

.directive('jqNavbar', function() {
  return {
    restrict: 'E',
    templateUrl : 'app/components/shared/navbar.html'
  };
});
