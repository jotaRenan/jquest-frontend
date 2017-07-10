 angular.module('jQuest')

.controller('MainCtrl', function($scope, $log) {
  // TODO: add verification
  const temp = sessionStorage.getItem('hideLogin');
  $scope.hideLogin = !!temp;
  $scope.close = () => {
    $scope.hideLogin = true;
    sessionStorage.setItem('hideLogin', 'true');
  }
})